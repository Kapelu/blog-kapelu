import { getAllPosts, getAllTags } from '@/lib/posts'

import { PostCard } from '@/components/PostCard'
import { Pagination } from '@/components/Pagination'
import { TagFilter } from '@/components/TagFilter'

const POSTS_PER_PAGE = 9

type Props = {
  searchParams: Promise<{
    page?: string
    tag?: string
  }>
}

export default async function HomePage({ searchParams }: Props) {
  const params = await searchParams

  const page = Number(params.page ?? 1)

  const tag = params.tag

  const posts = getAllPosts()

  const filteredPosts = tag
    ? posts.filter((post) => post.tags.some((t) => t.slug === tag))
    : posts

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  )

  return (
    <section className='py-10'>
      <TagFilter tags={getAllTags()} activeTag={tag} />

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {paginatedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} />
    </section>
  )
}
