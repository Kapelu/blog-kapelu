import Link from 'next/link'

type Props = {
  currentPage: number
  totalPages: number
}

function getPages(current: number, total: number) {
  const delta = 1
  const range: (number | string)[] = []

  const left = current - delta
  const right = current + delta

  let last: number | null = null

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= left && i <= right)) {
      if (last && i - last > 1) range.push('...')
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
    <div className='mt-10 flex items-center justify-center gap-2 text-secondary-foreground'>
      {/* PREV */}
      <Link
        href={`/?page=${prevPage}`}
        className='mr-4 flex items-center gap-1 transition hover:opacity-70'>
        <svg
          className='mt-px'
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M5.75 12.5h11.5m-11.5 0 4.792-4.791M5.75 12.5l4.792 4.792'
            stroke='#6B7280'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span>anterior</span>
      </Link>

      {/* PAGES */}
      <div className='flex gap-2'>
        {pages.map((page, i) =>
          page === '...' ? (
            <span
              key={`dots-${i}`}
              className='px-2 text-secondary-foreground/60'>
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={`/?page=${page}`}
              className={`flex h-9 w-9 md:h-9 md:w-9 items-center justify-center rounded-md transition active:scale-95 ${
                currentPage === page
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-secondary/70'
              }`}>
              {page}
            </Link>
          ),
        )}
      </div>

      {/* NEXT */}
      <Link
        href={`/?page=${nextPage}`}
        className='ml-4 flex items-center gap-1 transition hover:opacity-70'>
        <span>siguiente</span>
        <svg
          className='mt-px'
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M17.25 11.5H5.75m11.5 0-4.792-4.79m4.792 4.79-4.792 4.792'
            stroke='#6B7280'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Link>
    </div>
  )
}
