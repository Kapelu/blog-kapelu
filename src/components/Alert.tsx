type Props = {
  children: React.ReactNode
}

export function Alert({ children }: Props) {
  return (
    <div className='my-6 rounded-xl border border-secundary bg-tertiary p-4 text-tertiary-foreground'>
      {children}
    </div>
  )
}
