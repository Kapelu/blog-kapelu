// components/PaginationButtons.tsx

import { useRouter } from 'next/navigation'

const PaginationButtons = () => {
  const router = useRouter()

  const handlePrevious = () => {
    router.back()
  }

  const handleNext = () => {
    router.push('/next-page') // Reemplaza '/next-page' con la ruta de la página siguiente
  }

  return (
    <div>
      <button onClick={handlePrevious}>Anterior</button>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  )
}

export default PaginationButtons
