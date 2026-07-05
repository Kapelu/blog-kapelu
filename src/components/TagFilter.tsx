import { Button } from '@/components/Button'
import type { Tag } from '@/lib/posts'

type Props = {
  tags: Tag[]
  activeTag?: string
}

export function TagFilter({ tags, activeTag }: Props) {
  const currentTag = activeTag?.trim().toLowerCase()

  return (
    <div className='mb-10 flex flex-wrap gap-3'>
      <Button href='/' variant={!currentTag ? 'primary' : 'ghost'} size='sm'>
        Todos
      </Button>

      {tags.map((tag) => (
        <Button
          key={tag.slug}
          href={`/?tag=${encodeURIComponent(tag.slug)}`}
          variant={currentTag === tag.slug ? 'primary' : 'ghost'}
          size='sm'>
          {tag.name}
        </Button>
      ))}
    </div>
  )
}
