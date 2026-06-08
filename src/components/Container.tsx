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
px-4 → móviles.
sm:px-6 → tablets.
lg:px-8 → desktop.
max-w-5xl controla el ancho máximo.
No necesitás sizes, center ni lógica extra.
*/