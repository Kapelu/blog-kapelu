import { Button } from '@/components/Button'

export default function About() {
  return (
    <section className='container px-5 py-24 mx-auto'>
      <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        <br />
        <br />
        <br />
        <br />
        <div>
          <Button variant='primary'>Publicar</Button>

          <Button variant='ghost' size='sm'>
            Cancelar
          </Button>

          <Button loading>Guardando</Button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  )
}
