import { getPostBySlug } from '@/lib/posts'
import { Button } from '@/components/Button'
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
    <article className='prose mx-auto py-10 dark:prose-invert'>
      <h1>{post.data.title}</h1>

      <MDXRemote source={post.content} components={mdxComponents} />

      <br />
      <Button href='/blog'>Atras</Button>
    </article>
  )
}
