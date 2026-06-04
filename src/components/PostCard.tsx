import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export function PostCard(post: Post) {
  return (
      <div className="bg-background-secondary gap-2 shrink mx-1 max-w-5xl rounded-lg border-4 border-solid px-6 py-4 text-center shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <time dateTime={post.date} className="text-sm text-muted-foreground">
            {format(parseISO(post.date), 'dd LLLL yyyy')}
          </time>
          <span className="rounded bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase text-indigo-500">
            {post.tag}
          </span>
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <Link href={post.url} className="text-2xl font-bold hover:underline">
            {post.title}
          </Link>
          <p className="text-muted-foreground">{post.description}</p>
        </div>
        {/* <div className="flex justify-between">
         <Link
          href={post.url}
          className="text-indigo-500 items-end transition-colors hover:underline"
        >
          Leer más
        </Link> 
         <div className="flex flex-col items-center gap-2 md:flex-row">
          <i className="fi fi-rr-star"></i>
          <h5>4.5 stars</h5>
          </div> 
        </div>  */}
      </div>
  )
}
