// app/fonts.ts
import { Gentium_Book_Plus } from 'next/font/google'

export const gentium = Gentium_Book_Plus({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic'],
  variable: '--font-gentium',
})
