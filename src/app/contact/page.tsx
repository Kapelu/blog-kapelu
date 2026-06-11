import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <section className='py-24'>
      <div className='container mx-auto px-5'>
        <div className='mx-auto mb-12 flex max-w-3xl flex-col text-center'>
          <div className='mb-12 text-center'>
            <h1 className='mb-4 text-4xl font-bold sm:text-3xl'>Contacto</h1>

            <p className='mx-auto max-w-2xl text-muted-foreground'>
              ¿Tienes una consulta, una propuesta de trabajo o simplemente
              quieres saludar?
            </p>
            <p className='mx-auto max-w-2xl text-muted-foreground'>
              Completa el formulario y te responderé lo antes posible.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
