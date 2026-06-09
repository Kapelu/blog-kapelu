'use client'

import { useEffect } from 'react'

export function ComeBack() {
  useEffect(() => {
    const handleBlur = () => {
      document.title = 'Come back! 🥺'
    }

    const handleFocus = () => {
      document.title = 'Blog | Daniel Calderon'
    }

    window.addEventListener('blur', handleBlur)
    window.addEventListener('focus', handleFocus)

    return () => {
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  return null
}
