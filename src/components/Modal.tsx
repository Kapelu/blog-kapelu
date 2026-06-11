'use client'

import { useEffect, useState } from 'react'

type Props = {
  open: boolean
  title: string
  message: string
  onClose: () => void
  autoClose: number
}

export default function Modal({ open, title, message, onClose, autoClose }: Props) {
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
        className={`relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,.25)] transition-all duration-300 ${
          visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}>
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          aria-label='Cerrar'
          className='absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700'>
          ✕
        </button>

        {/* Check animado */}
        <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100'>
          <svg
            className='h-12 w-12 text-green-600'
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
        <h2 className='mt-6 text-center text-2xl font-bold text-gray-900'>
          {title}
        </h2>

        {/* Mensaje */}
        <p className='mt-3 text-center text-gray-600'>{message}</p>
      </div>
    </div>
  )
}
