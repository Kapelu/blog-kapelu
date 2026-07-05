'use client'

import { useEffect, useState } from 'react'

type Props = {
  open: boolean
  title: string
  message: string
  onClose: () => void
  autoClose: number
}

export default function Modal({
  open,
  title,
  message,
  onClose,
  autoClose,
}: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!open) return

    const frame = requestAnimationFrame(() => {
      setVisible(true)
    })

    return () => cancelAnimationFrame(frame)
  }, [open])

  useEffect(() => {
    if (!open) return

    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEsc)

    const timer =
      autoClose > 0
        ? setTimeout(() => {
            handleClose()
          }, autoClose)
        : null

    return () => {
      document.removeEventListener('keydown', handleEsc)

      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [open, autoClose])

  function handleClose() {
    setVisible(false)

    setTimeout(() => {
      onClose()
    }, 300)
  }

  if (!open) return null

  return (
    <div className='fixed inset-0 z-999 flex items-center justify-center p-4'>
      {/* Overlay */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-md rounded-3xl border border-border bg-background p-8 shadow-lg transition-all duration-300 ${
          visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}>
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          aria-label='Cerrar'
          className='absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-foreground transition hover:bg-muted hover:text-title'>
          ✕
        </button>

        {/* Check animado */}
        <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted'>
          <svg
            className='h-12 w-12 text-[#859900]'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path
              d='M5 13l4 4L19 7'
              className='animate-[draw_0.6s_ease_forwards]'
              style={{
                strokeDasharray: 30,
                strokeDashoffset: 30,
              }}
            />
          </svg>
        </div>

        {/* Título */}
        <h2 className='mt-6 text-center text-2xl font-bold text-title'>
          {title}
        </h2>

        {/* Mensaje */}
        <p className='mt-3 text-center text-foreground'>{message}</p>
      </div>
    </div>
  )
}
