import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}

/*
Ventajas:

px-4 → móviles.
sm:px-6 → tablets.
lg:px-8 → desktop.
max-w-5xl controla el ancho máximo.
No necesitás sizes, center ni lógica extra.

Es el patrón que usan muchos sitios hechos con Next.js, incluidos blogs y documentación técnica.

*/

/*

import clsx from 'clsx'

type ContainerSize = 'sm' | 'md' | 'lg' | 'full'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: ContainerSize
  center?: boolean
}

const sizes: Record<ContainerSize, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  full: 'max-w-full',
}

export function Container({
  children,
  className,
  size = 'lg',
  center = true,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        'w-full px-6',
        sizes[size],
        center && 'mx-auto',
        className,
      )}>
      {children}
    </div>
  )
}*/
