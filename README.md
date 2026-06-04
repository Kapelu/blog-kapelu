# Guía Completa: Blog con Next.js + MDX (2026)

## Introducción

Si vas a empezar un proyecto nuevo en 2026, no usaría exactamente el stack del ejemplo original. Varias dependencias quedaron antiguas o tienen problemas de mantenimiento con las versiones recientes de Next.js.

---

# Tecnologías que Mantendría

* Next.js
* TypeScript
* Tailwind CSS
* MDX
* Shiki (resaltado de sintaxis)

---

# Tecnologías que NO Utilizaría

## Contentlayer

Contentlayer fue una excelente solución para blogs estáticos, pero actualmente presenta problemas de compatibilidad con versiones modernas de Next.js y su mantenimiento es irregular.

En un proyecto nuevo prefiero:

* MDX nativo de Next.js
* gray-matter
* remark
* rehype
* next-mdx-remote (si el contenido proviene de una fuente externa)

---

# Stack Recomendado para 2026

## Crear el Proyecto Base

```bash
npx create-next-app@latest blog-kapelu \
  --typescript \
  --tailwind \
  --app
```

Esto instala:

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS v4
* App Router

---

# Configurar MDX

## Instalación

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

## Configuración de next.config.ts

```ts
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
```

---

# Frontmatter

El frontmatter permite almacenar metadatos dentro de cada artículo.

## Instalación

```bash
npm install gray-matter
```

## Ejemplo de Archivo MDX

```mdx
---
title: "Mi primer post"
date: "2026-06-01"
description: "Post de prueba"
tags:
  - nextjs
  - mdx
---

# Hola mundo
```

---

# Resaltado de Código

Para mostrar bloques de código con sintaxis resaltada:

## Instalación

```bash
npm install shiki rehype-pretty-code
```

Esta combinación es actualmente una de las más utilizadas en proyectos modernos con MDX.

---

# Lectura Automática de Posts

## Estructura Recomendada

```txt
content/
└── blog/
    ├── primer-post.mdx
    ├── segundo-post.mdx
    └── tercero.mdx
```

Cada vez que agregues un archivo:

```txt
content/blog/nuevo-post.mdx
```

el sistema lo detectará automáticamente.

---

# Obtener Todos los Posts

## Instalación

```bash
npm install fast-glob
```

## Función getPosts()

```ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getPosts() {
  const postsDir = path.join(process.cwd(), "content/blog");

  const files = fs.readdirSync(postsDir);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const source = fs.readFileSync(
      path.join(postsDir, file),
      "utf8"
    );

    const { data } = matter(source);

    return {
      slug,
      ...data,
    };
  });
}
```

---

# Generar Rutas Automáticamente

Con App Router puedes generar todas las rutas estáticas automáticamente.

```ts
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

Si agregas:

```txt
content/blog/mi-cuarto-post.mdx
```

Next.js generará automáticamente:

```txt
/blog/mi-cuarto-post
```

sin modificar ninguna línea adicional de código.

---

# Componentes React Dentro de MDX

Una de las mayores ventajas de MDX es que permite utilizar componentes React directamente dentro del contenido.

## Dentro del Archivo MDX

```mdx
# Mi artículo

<Alert>
  Esto es un componente React
</Alert>
```

## Componente React

```tsx
export function Alert({ children }) {
  return (
    <div className="border-l-4 border-blue-500 p-4">
      {children}
    </div>
  );
}
```

---

# Dependencias Recomendadas

Instalación completa:

```bash
npm install \
@next/mdx \
@mdx-js/react \
gray-matter \
fast-glob \
rehype-pretty-code \
shiki
```

---

# Estructura Final del Proyecto

```txt
src/
├── app/
│   ├── page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── mdx/
│
├── lib/
│   └── posts.ts
│
content/
└── blog/
    ├── primer-post.mdx
    ├── segundo-post.mdx
    └── tercero-post.mdx
```

---

# Resultado Final

Con esta arquitectura podrás:

1. Crear un archivo `.mdx`.
2. Guardarlo dentro de `content/blog`.
3. Reiniciar el servidor en desarrollo o ejecutar un nuevo build.
4. Ver automáticamente el artículo listado en `/blog`.
5. Obtener automáticamente la ruta `/blog/[slug]`.
6. Utilizar componentes React directamente dentro de los artículos.
7. Mantener un sistema simple, moderno y compatible con las versiones actuales de Next.js.



dependencias instaladas
pnpm add next-themes => providers de layout
pnpm add clsx tailwind-merge =>Es un helper para concatenar clases CSS sin problemas