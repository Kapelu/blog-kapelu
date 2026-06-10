'use client'

import React, { forwardRef, useState } from 'react'
import { EyeIcon, EyeOffIcon } from './Icons'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  variant?: 'default' | 'password'
  leftIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, variant, leftIcon, type, ...props }, ref) => {
    const isPassword = variant === 'password' || type === 'password'
    const [show, setShow] = useState(false)

    return (
      <div className='flex flex-col gap-1'>
        {label && (
          <label className='pl-3 text-sm font-medium text-gray-700'>
            {label}
          </label>
        )}

        <div className='relative flex items-center'>
          {leftIcon && (
            <span className='absolute left-3 text-gray-500'>{leftIcon}</span>
          )}

          <input
            ref={ref}
            type={isPassword ? (show ? 'text' : 'password') : type}
            className={`w-full rounded-lg border px-3 py-2 text-sm
              ${leftIcon ? 'pl-10' : ''}
              ${isPassword ? 'pr-10' : ''}
              ${error ? 'border-red-500' : 'border-gray-300'}
            `}
            {...props}
          />

          {isPassword && (
            <button
              type='button'
              onClick={() => setShow(!show)}
              className='absolute right-3 text-gray-500'>
              {show ? (
                <EyeOffIcon className='h-5 w-5' />
              ) : (
                <EyeIcon className='h-5 w-5' />
              )}
            </button>
          )}
        </div>

        {error && <span className='text-xs text-red-500'>{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'
