type Props = {
  children: React.ReactNode
}

export function Alert({ children }: Props) {
  return (
    <div className='my-6 flex gap-4 rounded-xl border border-yellow bg-yellow/10 p-4 text-foreground'>
      <div className='flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          className='h-14 w-14 shrink-0 text-yellow'>
          <path
            d='M12 9v4'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='12' cy='16.5' r='1' fill='currentColor' />
          <path
            d='M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      <div className='flex-1'>{children}</div>
    </div>
  )
}
