import { PostCard } from '@/components/PostCard'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <section>
      <div className="space-y-7 pt-7 text-center">
        <h2>Articulos</h2>
      </div>
      <div className="mt-10 space-y-8 border-t border-gray-200 pt-5 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </section>
  )
}
