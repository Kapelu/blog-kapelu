import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostTag = {
  name: string
  slug: string
}

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: PostTag[]
  cover: string
}

export type Tag = PostTag

const POSTS_PATH = path.join(process.cwd(), 'src/posts')

const ACRONYMS = ['api', 'ssh', 'css', 'html', 'sql', 'php', 'xml']

export function postExists(slug: string): boolean {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)
  return fs.existsSync(fullPath)
}

export function normalizeTag(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word) =>
      ACRONYMS.includes(word)
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(' ')
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

      const tags = [
        ...new Map(
          rawTags.filter(Boolean).map((tag) => {
            const name = normalizeTag(tag)
            const slug = tagToSlug(tag)

            return [slug, { name, slug }]
          }),
        ).values(),
      ]

      return {
        slug,
        ...(data as Omit<Post, 'slug' | 'tags'>),
        tags,
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

  const unique = new Map<string, Tag>()

  for (const post of posts) {
    for (const tag of post.tags) {
      if (!unique.has(tag.slug)) {
        unique.set(tag.slug, tag)
      }
    }
  }

  return Array.from(unique.values())
}
