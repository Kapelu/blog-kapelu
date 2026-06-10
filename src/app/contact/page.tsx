'use client'

import React, { useState } from 'react'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log(form)
  }

  return (
    <section className='text-gray-600 body-font relative'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Contacto
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Envíame un mensaje y te respondo lo antes posible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='lg:w-1/2 md:w-2/3 mx-auto'>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 w-1/2'>
              <Input
                label='Nombre'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Tu nombre'
              />
            </div>

            <div className='p-2 w-1/2'>
              <Input
                label='Email'
                name='email'
                type='email'
                value={form.email}
                onChange={handleChange}
                placeholder='tu@email.com'
              />
            </div>

            <div className='p-2 w-full'>
              <label className='pl-3 text-sm font-medium text-gray-700'>
                Mensaje
              </label>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-neutral-200 text-base outline-none text-gray-700 py-2 px-3 h-32 resize-none'
                placeholder='Escribe tu mensaje...'
              />
            </div>

            <div className='p-2 w-full'>
              <Button type='submit' className='w-full'>
                Enviar mensaje
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
