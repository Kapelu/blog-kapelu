import React from 'react'

export const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' {...props}>
    <path
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z'
    />
    <circle cx='12' cy='12' r='3' strokeWidth='2' />
  </svg>
)

export const EyeOffIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' {...props}>
    <path
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.77 21.77 0 0 1 5.06-5.94'
    />
    <path
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.77 21.77 0 0 1-2.13 3.19'
    />
    <line x1='1' y1='1' x2='23' y2='23' strokeWidth='2' />
  </svg>
)

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' {...props}>
    <circle cx='11' cy='11' r='7' strokeWidth='2' />
    <path d='M21 21l-4.3-4.3' strokeWidth='2' />
  </svg>
)
