import { Button } from '@/components/Button'
import type { Tag } from '@/lib/posts'

type Props = {
  tags: Tag[]
  activeTag?: string
}

export function TagFilter({ tags, activeTag }: Props) {
  return (
    <div className='mb-10 flex flex-wrap gap-3'>
      <Button href='/' variant={activeTag ? 'ghost' : 'primary'} size='sm'>
        Todos
      </Button>

      {tags.map((tag) => (
        <Button
          key={tag.slug}
          href={`/?tag=${tag.slug}`}
          variant={activeTag === tag.slug ? 'primary' : 'ghost'}
          size='sm'>
          {tag.name}
        </Button>
      ))}
    </div>
  )
}
