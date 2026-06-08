import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), 'src/posts')

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  cover: string
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

      return {
        slug,
        ...(data as Omit<Post, 'slug'>),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)

  const source = fs.readFileSync(fullPath, 'utf8')

  return matter(source)
}

export function getAllTags() {
  const posts = getAllPosts()

  return [...new Set(posts.flatMap((post) => post.tags))]
}
