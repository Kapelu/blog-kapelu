import { ContactEmail } from '@/emails/ContactEmail'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

let resend: any

try {
  resend = new Resend(process.env.RESEND_API_KEY)
} catch (err) {
  console.warn('Resend module not available')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, message } = body

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['ddaniel_calderon@proton.me'],
      subject: `Mensaje de ${name}`,
      replyTo: email,
      react: ContactEmail({
        name,
        email,
        message,
      }),
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    )
  }
}
