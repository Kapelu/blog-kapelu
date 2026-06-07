import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/posts'

type Props = {
  post: Post
}

export function PostCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='block h-80 rounded-xl border  transition hover:shadow-lg hover:-translate-y-1'>
      <article className='flex h-full flex-col'>
        {/* IMAGE WRAPPER */}
        <div className='relative h-40 w-full overflow-hidden rounded-t-xl'>
          <Image
            src={post.cover}
            alt={`${post.title} - thumbnail`}
            fill
            className='object-cover'
            sizes='100vw'
          />
        </div>

        {/* CONTENT */}
        <h2 className='mt-3 pl-3 pr-3 text-xl font-bold'>{post.title}</h2>

        <p className='mt-2 pl-3 pr-3 text-sm opacity-80 line-clamp-2'>
          {post.description}
        </p>

        <div className='mt-auto  pl-3 pr-3 pb-4 flex flex-wrap gap-2 pt-3'>
          {post.tags.map((tag) => (
            <span key={tag} className='rounded-full border px-2 py-1 text-xs'>
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  )
}
