'use client'

import { useEffect } from 'react'

type Props = {
  open: boolean
  title?: string
  message: string
  onClose: () => void
}

export default function Modal({
  open,
  title = 'Tu mensaje fue enviado correctamente. ',
  message,
  onClose,
}: Props) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }

    if (open) {
      document.addEventListener('keydown', handleEsc)
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* overlay */}
      <div
        onClick={onClose}
        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
      />

      {/* modal */}
      <div className='relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl'>
        <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>

        <p className='mt-2 text-sm text-gray-600'>{message}</p>

        <button
          onClick={onClose}
          className='mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white active:scale-95 transition'>
          Cerrar
        </button>
      </div>
    </div>
  )
}
