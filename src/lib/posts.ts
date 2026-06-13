import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  cover: string
}

export type Tag = {
  name: string
  slug: string
}

const POSTS_PATH = path.join(process.cwd(), 'src/posts')

export function normalizeTag(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export function tagToSlug(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export function getAllPosts(): Post[] {
  const files = fs
    .readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith('.mdx'))

  return files
    .map((file) => {
      const slug = file.replace('.mdx', '')
      const source = fs.readFileSync(path.join(POSTS_PATH, file), 'utf8')
      const { data } = matter(source)

      const rawTags = (data.tags ?? []) as string[]

      const cleanTags = [...new Set(rawTags.filter(Boolean).map(normalizeTag))]

      return {
        slug,
        ...(data as Omit<Post, 'slug' | 'tags'>),
        tags: cleanTags,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(fullPath, 'utf8')

  return matter(source)
}

export function getAllTags(): Tag[] {
  const posts = getAllPosts()

  const tags = posts.flatMap((post) => post.tags)

  const unique = new Map<string, Tag>()

  for (const tag of tags) {
    const name = normalizeTag(tag)
    const slug = tagToSlug(tag)

    if (!unique.has(slug)) {
      unique.set(slug, {
        name,
        slug,
      })
    }
  }

  return Array.from(unique.values())
}
