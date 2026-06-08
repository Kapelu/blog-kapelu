import Link from 'next/link'

type Props = {
  tags: string[]
}

export function TagFilter({ tags }: Props) {
  return (
    <div className='mb-10 flex flex-wrap gap-2'>
      <Link href='/' className='rounded border px-3 py-1'>
        Todos
      </Link>

      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/?tag=${tag}`}
          className='rounded border px-3 py-1'>
          {tag}
        </Link>
      ))}
    </div>
  )
}
