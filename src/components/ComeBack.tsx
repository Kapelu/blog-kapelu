'use client'
import { AppConfig } from '@/lib/AppConfig'
import { useEffect } from 'react'

export function ComeBack() {
  useEffect(() => {
    const handleBlur = () => {
      document.title = 'Come back! 🥺'
    }

    const handleFocus = () => {
      document.title = AppConfig.title
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
