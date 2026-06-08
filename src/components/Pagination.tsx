import Link from 'next/link'

type Props = {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: Props) {
  return (
    <div className='mt-10 flex justify-center gap-2'>
      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          key={i}
          href={`/blog?page=${i + 1}`}
          className={`rounded border px-4 py-2 ${
            currentPage === i + 1 ? 'font-bold' : ''
          }`}>
          {i + 1}
        </Link>
      ))}
    </div>
  )
}
