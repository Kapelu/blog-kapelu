const Button = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
      <button className="relative px-6 py-2 text-center text-green-600 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-green-500/10 before:transition-all after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:scale-125 after:border after:border-green-600 after:opacity-0 after:transition-all hover:before:scale-50 hover:before:opacity-0 hover:after:scale-100 hover:after:opacity-100">
        Anterior
      </button>
      <button className="relative px-6 py-2 text-center text-green-600 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-green-500/10 before:transition-all after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:scale-125 after:border after:border-green-600 after:opacity-0 after:transition-all hover:before:scale-50 hover:before:opacity-0 hover:after:scale-100 hover:after:opacity-100">
        Siguiente
      </button>
    </div>
  )
}
