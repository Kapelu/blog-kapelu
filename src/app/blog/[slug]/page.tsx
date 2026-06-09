import { Button } from '@/components/Button'
import { getPostBySlug } from '@/lib/posts'
import { mdxComponents } from '@/mdx/components'
import { MDXRemote } from 'next-mdx-remote/rsc'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params

  const post = getPostBySlug(slug)

  return (
    <article className='mx-auto max-w-4xl py-10'>
      <h1 className='mb-8 text-4xl font-bold'>{post.data.title}</h1>

      <MDXRemote source={post.content} components={mdxComponents} />

      <div className='mt-10'>
        <Button href='/'>Atrás</Button>
      </div>
    </article>
  )
}
