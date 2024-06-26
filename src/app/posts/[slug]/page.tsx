import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { MDXComponents } from 'mdx/types'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import NextImage from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    return
  }

  const { title, description, date, url } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `${WEBSITE_HOST_URL}/posts/${url}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${WEBSITE_HOST_URL}/posts/${url}`,
    },
  }
}

const CustomText = (props) => {
  return (
    <div
      style={{
        margin: '0 4rem',
        padding: '.5rem',
        textAlign: 'justify',
        border: '5px solid #283747',
        borderRadius:'15px',
      }}
      {...props}
    />
  )
}

const P = (props) => {
  return (
    <p
      style={{
        textAlign: 'justify',
      }}
      {...props}
      />
    )
  }
  
  const H2 = (props) => {
    return (
      <h2
      style={{
        textAlign: 'center',
        color: 'hsl(var(--title-h2))',
      }}
      {...props}
    />
  )
}

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <NextImage className="rounded-lg" {...props} />,
  h2: H2,
  p:P,
  CustomText,
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="mt-8">
      <h1 className="text-center">{post.title}</h1>
      <time
        className="my-4 block text-right text-sm text-zinc-500 "
        dateTime={post.date}
      >
        {format(parseISO(post.date), 'dd LLLL yyyy')}
      </time>
      <article className="prose max-w-5xl dark:prose-invert">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  )
}

export default PostLayout
