type Props = {
  children: React.ReactNode
}

export function Alert({ children }: Props) {
  return (
    <div className='my-6 rounded-xl p-4 border-4 border-yellow-300 bg-tertiary text-tertiary-foreground'>
      {children}
    </div>
  )
}
