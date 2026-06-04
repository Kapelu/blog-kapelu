import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div>
      <Button variant='primary'>Publicar</Button>

      <Button variant='ghost' size='sm'>
        Cancelar
      </Button>

      <Button loading>Guardando</Button>
    </div>
  )
}
