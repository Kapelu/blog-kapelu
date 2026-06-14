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
      className='group block h-80 overflow-hidden rounded-xl border border-secondary bg-secondary transition hover:-translate-y-1 hover:shadow-lg'>
      <article className='flex h-full flex-col rounded-xl'>
        {/* IMAGE */}
        <div className='relative h-40 w-full overflow-hidden'>
          <Image
            src={post.cover}
            alt={`${post.title} - thumbnail`}
            fill
            className='object-cover transition duration-300 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw,
                  (max-width: 1024px) 50vw,
                  33vw'
          />
        </div>

        {/* CONTENT */}
        <h2 className='mt-3 px-3 text-xl font-bold text-secondary-foreground'>
          {post.title}
        </h2>

        <p className='mt-2 px-3 text-sm text-secondary-foreground/70 line-clamp-2'>
          {post.description}
        </p>

        {/* TAGS */}
        <div className='mt-auto flex flex-wrap gap-2 px-3 pb-4 pt-3'>
          {post.tags.map((tag) => (
            <span
              key={tag.slug}
              className='rounded-full border border-secondary-foreground/20 bg-secondary-foreground/10 px-2 py-1 text-xs text-secondary-foreground'>
              {tag.name}
            </span>
          ))}
        </div>
      </article>
    </Link>
  )
}
