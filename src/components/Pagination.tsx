import { Button } from '@/components/Button'

type Props = {
  currentPage: number
  totalPages: number
}

type PageItem = number | '...'

function getPages(current: number, total: number): PageItem[] {
  const delta = 1
  const range: PageItem[] = []

  const left = current - delta
  const right = current + delta

  let last: number | null = null

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= left && i <= right)) {
      if (last && i - last > 1) {
        range.push('...')
      }

      range.push(i)
      last = i
    }
  }

  return range
}

export function Pagination({ currentPage, totalPages }: Props) {
  const pages = getPages(currentPage, totalPages)

  const prevPage = Math.max(currentPage - 1, 1)
  const nextPage = Math.min(currentPage + 1, totalPages)

  return (
    <div className='mt-10 flex items-center justify-center gap-2 text-title'>
      {/* PREV */}
      <Button
        href={`/?page=${prevPage}`}
        variant='ghost'
        className='mr-4 gap-1'>
        <svg
          className='mt-px stroke-title'
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M5.75 12.5h11.5m-11.5 0 4.792-4.791M5.75 12.5l4.792 4.792'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <span>anterior</span>
      </Button>

      {/* PAGES */}
      <div className='flex gap-2'>
        {pages.map((page, i) => {
          if (page === '...') {
            return (
              <span
                key={`dots-${i}`}
                className='flex h-9 w-9 items-center justify-center text-foreground/60'>
                ...
              </span>
            )
          }

          const active = currentPage === page

          return (
            <Button
              key={`page-${page}`}
              href={`/?page=${page}`}
              size='sm'
              variant={active ? 'secondary' : 'ghost'}
              className='h-9 w-9 p-0 active:scale-95'>
              {page}
            </Button>
          )
        })}
      </div>

      {/* NEXT */}
      <Button
        href={`/?page=${nextPage}`}
        variant='ghost'
        className='ml-4 gap-1'>
        <span>siguiente</span>

        <svg
          className='mt-px stroke-title'
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M17.25 11.5H5.75m11.5 0-4.792-4.79m4.792 4.79-4.792 4.792'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Button>
    </div>
  )
}
