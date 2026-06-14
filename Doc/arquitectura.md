```
└── 📁blog-kapelu
    └── 📁public
    |   └── 📁images
    |   |   |    ├── apple-touch-icon.png
    |   |   |    └── favicon-192x192.png
    |   |   ├── 📁Favicon
    |   |   |    ├── favicon-512x512.png
    |   |   |    └── favicon.ico
    |   |   ├── frasePele.jpg
    |   |   ├── kapelu.png
    |   |   ├── post01.webp
    |   |   ├── post02.webp
    |   |   ├── post03.webp
    |   |   ├── post04.webp
    |   |   ├── post05.webp
    |   |   ├── post06.webp
    |   |   ├── post07.webp
    |   |   ├── post08.webp
    |   |   ├── post09.webp
    |   |   ├── post10.webp
    |   |   ├── post11.webp
    |   |   └── post12.webp
    |   ├── bg.png
    |   ├── logo.png
    |   └── manifest.json
    └── 📁src
    |   ├── 📁app
    |   |   ├── 📁about
    |   |   |   └── page.tsx
    |		|	  |        import Image from 'next/image'
    |   |   |        import type { Metadata } from 'next'
    |   |   |        import { WEBSITE_HOST_URL } from '@/lib/constants'
    |   |   |        
    |   |   |        const meta = {
    |   |   |          title: 'Sobre mí',
    |   |   |          description: 'Soy un autodidacta que disfruta aprender a programar',
    |   |   |          url: `${WEBSITE_HOST_URL}/about`,
    |   |   |        }
    |   |   |        
    |   |   |        export const metadata: Metadata = {
    |   |   |          title: meta.title,
    |   |   |          description: meta.description,
    |   |   |          openGraph: {
    |   |   |            title: meta.title,
    |   |   |            description: meta.description,
    |   |   |            url: meta.url,
    |   |   |          },
    |   |   |          twitter: {
    |   |   |            title: meta.title,
    |   |   |            description: meta.description,
    |   |   |          },
    |   |   |          alternates: {
    |   |   |            canonical: meta.url,
    |   |   |          },
    |   |   |        }
    |   |   |        
    |   |   |        export default function About() {
    |   |   |          return (
    |   |   |            <div className='container mx-auto max-w-6xl px-4 py-12'>
    |   |   |              <div className='flex flex-col gap-16'>
    |   |   |                {/* PERFIL */}
    |   |   |                <section className='flex flex-col items-center text-center'>
    |   |   |                  <div className='overflow-hidden rounded-full border-border shadow-xl/35'>
    |   |   |                    <Image
    |   |   |                      width={300}
    |   |   |                      height={300}
    |   |   |                      src='/images/kapelu.png'
    |   |   |                      alt='Daniel Calderón'
    |   |   |                      className='h-auto w-auto object-cover'
    |   |   |                      priority
    |   |   |                    />
    |   |   |                  </div>
    |   |   |        
    |   |   |                  <h1 className='mt-6 bg-clip-text text-4xl font-bold text-secundary md:text-6xl'>
    |   |   |                    Daniel Calderón
    |   |   |                  </h1>
    |   |   |        
    |   |   |                  <p className='mt-3 text-lg font-medium text-muted-foreground md:text-xl'>
    |   |   |                    Desarrollador Full Stack
    |   |   |                  </p>
    |   |   |        
    |   |   |                  <div className='mt-4 flex flex-wrap justify-center gap-2'>
    |   |   |                    {['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB','Bash',].map(
    |   |   |                      (tech) => (
    |   |   |                        <span
    |   |   |                          key={tech}
    |   |   |                          className='rounded-full border px-3 py-1 text-sm'>
    |   |   |                          {tech}
    |   |   |                        </span>
    |   |   |                      ),
    |   |   |                    )}
    |   |   |                  </div>
    |   |   |                </section>
    |   |   |        
    |   |   |                {/* DESCRIPCIÓN */}
    |   |   |                <section className='mx-auto max-w-4xl'>
    |   |   |                  <div className='rounded-2xl border bg-card p-8 shadow-sm'>
    |   |   |                    <h2 className='mb-6 text-2xl font-bold'>Mi historia</h2>
    |   |   |        
    |   |   |                    <div className='space-y-5 text-base leading-8 text-muted-foreground md:text-lg'>
    |   |   |                      <p>
    |   |   |                        Soy un desarrollador web autodidacta. Durante los últimos años
    |   |   |                        he dedicado gran parte de mi tiempo a aprender y mejorar mis
    |   |   |                        habilidades en el desarrollo de aplicaciones modernas.
    |   |   |                      </p>
    |   |   |        
    |   |   |                      <p>
    |   |   |                        Me considero una persona comprometida, curiosa y enfocada en el
    |   |   |                        aprendizaje continuo. Aunque disfruto especialmente del
    |   |   |                        desarrollo Frontend, también trabajo con Backend y bases de
    |   |   |                        datos.
    |   |   |                      </p>
    |   |   |        
    |   |   |                      <p>
    |   |   |                        Disfruto resolver problemas, crear experiencias de usuario
    |   |   |                        intuitivas y enfrentar nuevos desafíos que me permitan crecer
    |   |   |                        profesionalmente.
    |   |   |                      </p>
    |   |   |        
    |   |   |                      <p>
    |   |   |                        Mi objetivo es formar parte de proyectos donde pueda aportar
    |   |   |                        valor, seguir aprendiendo y colaborar con equipos que compartan
    |   |   |                        la pasión por construir productos de calidad.
    |   |   |                      </p>
    |   |   |                    </div>
    |   |   |                  </div>
    |   |   |                </section>
    |   |   |        
    |   |   |                {/* FRASE */}
    |   |   |                <section className='mx-auto w-full max-w-5xl'>
    |   |   |                  <div className='overflow-hidden rounded-2xl shadow-lg'>
    |   |   |                    <Image
    |   |   |                      src='/images/frasePele.jpg'
    |   |   |                      alt='Frase de Pelé'
    |   |   |                      width={1200}
    |   |   |                      height={800}
    |   |   |                      sizes='100vw'
    |   |   |                      className='w-full h-auto'
    |   |   |                    />
    |   |   |                  </div>
    |   |   |                </section>
    |   |   |              </div>
    |   |   |            </div>
    |   |   |          )
    |   |   |        }
    |   |   ├── 📁api
    |   |   |   └── 📁contact
    |   |   |       └── route.ts
    |   |   |            import { ContactEmail } from '@/emails/ContactEmail'
    |   |   |            import { NextResponse } from 'next/server'
    |   |   |            import { Resend } from 'resend'
    |   |   |            
    |   |   |            let resend: any
    |   |   |            
    |   |   |            try {
    |   |   |              resend = new Resend(process.env.RESEND_API_KEY)
    |   |   |            } catch (err) {
    |   |   |              console.warn('Resend module not available')
    |   |   |            }
    |   |   |            
    |   |   |            export async function POST(request: Request) {
    |   |   |              try {
    |   |   |                const body = await request.json()
    |   |   |            
    |   |   |                const { name, email, message } = body
    |   |   |            
    |   |   |                await resend.emails.send({
    |   |   |                  from: 'Portfolio <onboarding@resend.dev>',
    |   |   |                  to: ['ddaniel_calderon@proton.me'],
    |   |   |                  subject: `Mensaje de ${name}`,
    |   |   |                  replyTo: email,
    |   |   |                  react: ContactEmail({
    |   |   |                    name,
    |   |   |                    email,
    |   |   |                    message,
    |   |   |                  }),
    |   |   |                })
    |   |   |            
    |   |   |                return NextResponse.json({
    |   |   |                  success: true,
    |   |   |                })
    |   |   |              } catch (error) {
    |   |   |                console.error(error)
    |   |   |            
    |   |   |                return NextResponse.json(
    |   |   |                  {
    |   |   |                    success: false,
    |   |   |                  },
    |   |   |                  {
    |   |   |                    status: 500,
    |   |   |                  },
    |   |   |                )
    |   |   |              }
    |   |   |            }
    |   |   |   
    |   |   ├── 📁blog
    |   |   |   └── 📁[slug]
    |   |   |       └── page.tsx
    |   |   |            import { Button } from '@/components/Button'
    |   |   |            import { getPostBySlug } from '@/lib/posts'
    |   |   |            import { mdxComponents } from '@/mdx/components'
    |   |   |            import { MDXRemote } from 'next-mdx-remote/rsc'
    |   |   |            
    |   |   |            type Props = {
    |   |   |              params: Promise<{
    |   |   |                slug: string
    |   |   |              }>
    |   |   |            }
    |   |   |            
    |   |   |            export default async function PostPage({ params }: Props) {
    |   |   |              const { slug } = await params
    |   |   |            
    |   |   |              const post = getPostBySlug(slug)
    |   |   |            
    |   |   |              return (
    |   |   |                <article className='mx-auto max-w-4xl py-10'>
    |   |   |                  <h1 className='mb-8 text-4xl font-bold'>{post.data.title}</h1>
    |   |   |            
    |   |   |                  <MDXRemote source={post.content} components={mdxComponents} />
    |   |   |            
    |   |   |                  <div className='mt-10'>
    |   |   |                    <Button href='/'>Atrás</Button>
    |   |   |                  </div>
    |   |   |                </article>
    |   |   |              )
    |   |   |            }
    |   |   |
    |   |   ├── 📁contact
    |   |   |    └── page.tsx
    |   |   |         import ContactForm from '@/components/ContactForm'
    |   |   | 
    |   |   |         export default function Contact() {
    |   |   |           return (
    |   |   |             <section className='py-24'>
    |   |   |               <div className='container mx-auto px-5'>
    |   |   |                 <div className='mx-auto mb-12 flex max-w-3xl flex-col text-center'>
    |   |   |                   <div className='mb-12 text-center'>
    |   |   |                     <h1 className='mb-4 text-4xl font-bold sm:text-3xl'>Contacto</h1>
    |   |   |         
    |   |   |                     <p className='mx-auto max-w-2xl text-muted-foreground'>
    |   |   |                       ¿Tienes una consulta, una propuesta de trabajo o simplemente
    |   |   |                       quieres saludar?
    |   |   |                     </p>
    |   |   |                     <p className='mx-auto max-w-2xl text-muted-foreground'>
    |   |   |                       Completa el formulario y te responderé lo antes posible.
    |   |   |                     </p>
    |   |   |                   </div>
    |   |   |                 </div>
    |   |   |         
    |   |   |                 <ContactForm />
    |   |   |               </div>
    |   |   |             </section>
    |   |   |           )
    |   |   |         }
    |   |   |
    |   |   |── favicon.ico
    |   |   ├── globals.css
    |   |   |    @import "tailwindcss";
    |   |   |    
    |   |   |    @custom-variant dark (&:where(.dark, .dark *));
    |   |   |    
    |   |   |    :root {
    |   |   |      /* Base */
    |   |   |      --background: #ffffff;
    |   |   |      --foreground: #171717;
    |   |   |    
    |   |   |      /* Palette */
    |   |   |      --first-color: #3b8686;
    |   |   |      --first-alpha-color: #3b8686bf; /* 75% */
    |   |   |    
    |   |   |      --second-color: #79bd9a;
    |   |   |      --second-alpha-color: #79bd9abf; /* 75% */
    |   |   |    
    |   |   |      --third-color: #a8dba8;
    |   |   |      --third-alpha-color: #a8dba8bf; /* 75% */
    |   |   |    
    |   |   |      --white-color: #ffffff;
    |   |   |      --white-alpha-color: #ffffff80; /* 50% */
    |   |   |    
    |   |   |      --black-color: #000000;
    |   |   |      --black-alpha-color: #00000080; /* 50% */
    |   |   |    
    |   |   |      --gray-light-color: #f3f3f3;
    |   |   |      --gray-color: #cccccc;
    |   |   |      --gray-dark-color: #666666;
    |   |   |    
    |   |   |      --link-color: #509ee3;
    |   |   |      --title-color: #333333;
    |   |   |      --text-color: #222222;
    |   |   |    
    |   |   |      /* Semantic colors */
    |   |   |      --primary: var(--first-color);
    |   |   |      --primary-foreground: var(--white-color);
    |   |   |    
    |   |   |      --secondary: var(--second-color);
    |   |   |      --secondary-foreground: var(--white-color);
    |   |   |    
    |   |   |      --accent: var(--third-color);
    |   |   |      --accent-foreground: var(--title-color);
    |   |   |    
    |   |   |      --muted: var(--gray-light-color);
    |   |   |      --muted-foreground: var(--gray-dark-color);
    |   |   |    
    |   |   |      --border: var(--gray-color);
    |   |   |    }
    |   |   |    
    |   |   |    .dark {
    |   |   |      /* Base */
    |   |   |      --background: #4e4e4e;
    |   |   |      --foreground: #ededed;
    |   |   |    
    |   |   |      /* Semantic colors */
    |   |   |      --primary: var(--first-color);
    |   |   |      --primary-foreground: #ffffff;
    |   |   |    
    |   |   |      --secondary: #2d2d2d;
    |   |   |      --secondary-foreground: #f5f5f5;
    |   |   |    
    |   |   |      --accent: var(--third-color);
    |   |   |      --accent-foreground: #111111;
    |   |   |    
    |   |   |      --muted: #3a3a3a;
    |   |   |      --muted-foreground: #cfcfcf;
    |   |   |    
    |   |   |      --border: #5c5c5c;
    |   |   |    
    |   |   |      /* Ajustes de texto */
    |   |   |      --title-color: #f5f5f5;
    |   |   |      --text-color: #e5e5e5;
    |   |   |      --link-color: #7bbcff;
    |   |   |    }
    |   |   |    
    |   |   |    @theme inline {
    |   |   |      /* Base */
    |   |   |      --color-background: var(--background);
    |   |   |      --color-foreground: var(--foreground);
    |   |   |    
    |   |   |      /* Semantic */
    |   |   |      --color-primary: var(--primary);
    |   |   |      --color-primary-foreground: var(--primary-foreground);
    |   |   |    
    |   |   |      --color-secondary: var(--secondary);
    |   |   |      --color-secondary-foreground: var(--secondary-foreground);
    |   |   |    
    |   |   |      --color-accent: var(--accent);
    |   |   |      --color-accent-foreground: var(--accent-foreground);
    |   |   |    
    |   |   |      --color-muted: var(--muted);
    |   |   |      --color-muted-foreground: var(--muted-foreground);
    |   |   |    
    |   |   |      --color-border: var(--border);
    |   |   |    
    |   |   |      /* Legacy palette */
    |   |   |      --color-first: var(--first-color);
    |   |   |      --color-second: var(--second-color);
    |   |   |      --color-third: var(--third-color);
    |   |   |    
    |   |   |      --color-gray-light: var(--gray-light-color);
    |   |   |      --color-gray: var(--gray-color);
    |   |   |      --color-gray-dark: var(--gray-dark-color);
    |   |   |    
    |   |   |      --color-link: var(--link-color);
    |   |   |      --color-title: var(--title-color);
    |   |   |      --color-text: var(--text-color);
    |   |   |    
    |   |   |      --font-sans: var(--font-geist-sans);
    |   |   |      --font-mono: var(--font-geist-mono);
    |   |   |    }
    |   |   |    
    |   |   |    body {
    |   |   |      background: var(--background);
    |   |   |      color: var(--foreground);
    |   |   |      font-family: Arial, Helvetica, sans-serif;
    |   |   |    }
    |   |   |    
    |   |   |    html {
    |   |   |      scrollbar-width: none;
    |   |   |    }
    |   |   |    
    |   |   |    html::-webkit-scrollbar {
    |   |   |      display: none;
    |   |   |    }
    |   |   |    
    |   |   |    @keyframes draw {
    |   |   |      to {
    |   |   |        stroke-dashoffset: 0;
    |   |   |      }
    |   |   |    }
    |   |   |    
    |   |   |    /*
    |   |   |    Con esta configuración podrás usar clases Tailwind como:
    |   |   |    
    |   |   |    bg-primary
    |   |   |    text-primary-foreground
    |   |   |    
    |   |   |    bg-secondary
    |   |   |    text-secondary-foreground
    |   |   |    
    |   |   |    bg-accent
    |   |   |    text-accent-foreground
    |   |   |    
    |   |   |    bg-muted
    |   |   |    text-muted-foreground
    |   |   |    
    |   |   |    border-border
    |   |   |    
    |   |   |    y además seguir teniendo acceso a tu paleta original mediante variables CSS (var(--first-color), var(--second-color), etc.) cuando necesites estilos personalizados.
    |   |   |    
    |   |   |    */
    |   |   |
    |   |   ├── layout.tsx
    |   |   |    import type { Metadata } from 'next'
    |   |   |    import { AppConfig } from '@/lib/AppConfig'
    |   |   |    import { ComeBack } from '@/components/ComeBack'
    |   |   |    import { Container } from '@/components/Container'
    |   |   |    import { Providers } from './providers'
    |   |   |    import Header from '@/components/Header'
    |   |   |    import Footer from '@/components/Footer'
    |   |   |    import './globals.css'
    |   |   |    
    |   |   |    export const metadata: Metadata = {
    |   |   |      metadataBase: new URL(AppConfig.url),
    |   |   |    
    |   |   |      title: {
    |   |   |        default: AppConfig.title,
    |   |   |        template: '%s | Daniel Calderon',
    |   |   |      },
    |   |   |    
    |   |   |      description: AppConfig.description,
    |   |   |    
    |   |   |      keywords: AppConfig.keywords,
    |   |   |    
    |   |   |      authors: [
    |   |   |        {
    |   |   |          name: AppConfig.author,
    |   |   |        },
    |   |   |      ],
    |   |   |    
    |   |   |      creator: AppConfig.author,
    |   |   |    
    |   |   |      publisher: AppConfig.author,
    |   |   |    
    |   |   |      robots: {
    |   |   |        index: true,
    |   |   |        follow: true,
    |   |   |        nocache: false,
    |   |   |    
    |   |   |        googleBot: {
    |   |   |          index: true,
    |   |   |          follow: true,
    |   |   |          noimageindex: false,
    |   |   |          'max-video-preview': -1,
    |   |   |          'max-image-preview': 'large',
    |   |   |          'max-snippet': -1,
    |   |   |        },
    |   |   |      },
    |   |   |    
    |   |   |      alternates: {
    |   |   |        canonical: AppConfig.url,
    |   |   |      },
    |   |   |    
    |   |   |      openGraph: {
    |   |   |        title: AppConfig.title,
    |   |   |        description: AppConfig.description,
    |   |   |    
    |   |   |        url: AppConfig.url,
    |   |   |    
    |   |   |        siteName: AppConfig.site_name,
    |   |   |    
    |   |   |        locale: AppConfig.locale,
    |   |   |    
    |   |   |        type: 'website',
    |   |   |    
    |   |   |        images: [
    |   |   |          {
    |   |   |            url: AppConfig.image,
    |   |   |            width: 1200,
    |   |   |            height: 630,
    |   |   |            alt: AppConfig.title,
    |   |   |          },
    |   |   |        ],
    |   |   |      },
    |   |   |    
    |   |   |      twitter: {
    |   |   |        card: 'summary_large_image',
    |   |   |    
    |   |   |        title: AppConfig.title,
    |   |   |    
    |   |   |        description: AppConfig.description,
    |   |   |    
    |   |   |        creator: '@kapelu',
    |   |   |    
    |   |   |        images: [AppConfig.image],
    |   |   |      },
    |   |   |    
    |   |   |      category: 'technology',
    |   |   |    
    |   |   |      applicationName: AppConfig.site_name,
    |   |   |    
    |   |   |      referrer: 'origin-when-cross-origin',
    |   |   |    }
    |   |   |    
    |   |   |    export default function RootLayout({
    |   |   |      children,
    |   |   |    }: Readonly<{
    |   |   |      children: React.ReactNode
    |   |   |    }>) {
    |   |   |      return (
    |   |   |        <html lang='es' suppressHydrationWarning>
    |   |   |          <body>
    |   |   |            <Providers>
    |   |   |              {/* HERO BACKGROUND GLOBAL 
    |   |   |              <div className='fixed inset-0 -z-10'>
    |   |   |                <Image
    |   |   |                  src='/bg.png'
    |   |   |                  alt='Background'
    |   |   |                  fill
    |   |   |                  priority
    |   |   |                  className='object-cover'
    |   |   |                />
    |   |   |                <div className='absolute inset-0 bg-black/50' />
    |   |   |              </div>*/}
    |   |   |              <ComeBack />
    |   |   |    
    |   |   |              <main className='mb-8'>
    |   |   |                <Header />
    |   |   |                <Container>{children}</Container>
    |   |   |                <Footer />
    |   |   |              </main>
    |   |   |            </Providers>
    |   |   |          </body>
    |   |   |        </html>
    |   |   |      )
    |   |   |    }
    |   |   |    
    |   |   ├── page.tsx
    |   |   |    import { getAllPosts, getAllTags } from '@/lib/posts'
    |   |   |    
    |   |   |    import { PostCard } from '@/components/PostCard'
    |   |   |    import { Pagination } from '@/components/Pagination'
    |   |   |    import { TagFilter } from '@/components/TagFilter'
    |   |   |    
    |   |   |    const POSTS_PER_PAGE = 9
    |   |   |    
    |   |   |    type Props = {
    |   |   |      searchParams: Promise<{
    |   |   |        page?: string
    |   |   |        tag?: string
    |   |   |      }>
    |   |   |    }
    |   |   |    
    |   |   |    export default async function HomePage({ searchParams }: Props) {
    |   |   |      const params = await searchParams
    |   |   |    
    |   |   |      const page = Number(params.page ?? 1)
    |   |   |    
    |   |   |      const tag = params.tag
    |   |   |    
    |   |   |      const posts = getAllPosts()
    |   |   |    
    |   |   |      const filteredPosts = tag
    |   |   |        ? posts.filter((post) => post.tags.includes(tag))
    |   |   |        : posts
    |   |   |    
    |   |   |      const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
    |   |   |    
    |   |   |      const paginatedPosts = filteredPosts.slice(
    |   |   |        (page - 1) * POSTS_PER_PAGE,
    |   |   |        page * POSTS_PER_PAGE,
    |   |   |      )
    |   |   |    
    |   |   |      return (
    |   |   |        <section className='py-10'>
    |   |   |          <TagFilter tags={getAllTags()} />
    |   |   |    
    |   |   |          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
    |   |   |            {paginatedPosts.map((post) => (
    |   |   |              <PostCard key={post.slug} post={post} />
    |   |   |            ))}
    |   |   |          </div>
    |   |   |    
    |   |   |          <Pagination currentPage={page} totalPages={totalPages} />
    |   |   |        </section>
    |   |   |      )
    |   |   |    }
    |   |   |    
    |   |   ├── providers.tsx
    |   |   |    'use client'
    |   |   |    
    |   |   |    import { ThemeProvider } from 'next-themes'
    |   |   |    
    |   |   |    export function Providers({ children }: { children: React.ReactNode }) {
    |   |   |      return (
    |   |   |        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
    |   |   |          {children}
    |   |   |        </ThemeProvider>
    |   |   |      )
    |   |   |    }
    |   |   |    
    |   |   ├── robot.ts
    |   |   |    import type { MetadataRoute } from 'next'
    |   |   |    import { AppConfig } from '@/lib/AppConfig'
    |   |   |    
    |   |   |    export default function robots(): MetadataRoute.Robots {
    |   |   |      return {
    |   |   |        rules: {
    |   |   |          userAgent: '*',
    |   |   |          allow: '/',
    |   |   |        },
    |   |   |        sitemap: `${AppConfig.url}/sitemap.xml`,
    |   |   |      }
    |   |   |    }
    |   |   |    
    |   |   └── sitemap.ts
    |   |        import type { MetadataRoute } from 'next'
    |   |        import { AppConfig } from '@/lib/AppConfig'
    |   |        
    |   |        export default function sitemap(): MetadataRoute.Sitemap {
    |   |          return [
    |   |            {
    |   |              url: AppConfig.url,
    |   |              lastModified: new Date(),
    |   |              changeFrequency: 'weekly',
    |   |              priority: 1,
    |   |            },
    |   |            {
    |   |              url: `${AppConfig.url}/about`,
    |   |              lastModified: new Date(),
    |   |              changeFrequency: 'monthly',
    |   |              priority: 0.8,
    |   |            },
    |   |            {
    |   |              url: `${AppConfig.url}/contact`,
    |   |              lastModified: new Date(),
    |   |              changeFrequency: 'monthly',
    |   |              priority: 0.7,
    |   |            },
    |   |            {
    |   |              url: `${AppConfig.url}/blog`,
    |   |              lastModified: new Date(),
    |   |              changeFrequency: 'daily',
    |   |              priority: 0.9,
    |   |            },
    |   |          ]
    |   |        }
    |   |        
    |   ├── 📁components
    |   |   ├── Alert.tsx
    |   |   |    type Props = {
    |   |   |      children: React.ReactNode
    |   |   |    }
    |   |   |    
    |   |   |    export function Alert({ children }: Props) {
    |   |   |      return (
    |   |   |        <div className='my-6 rounded-xl border border-secundary bg-tertiary p-4 text-tertiary-foreground'>
    |   |   |          {children}
    |   |   |        </div>
    |   |   |      )
    |   |   |    }
    |   |   |    
    |   |   ├── Button.tsx
    |   |   |    import Link from 'next/link'
    |   |   |    import clsx from 'clsx'
    |   |   |    
    |   |   |    type ButtonVariant = 'primary' | 'secondary' | 'ghost'
    |   |   |    type ButtonSize = 'sm' | 'md' | 'lg'
    |   |   |    
    |   |   |    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    |   |   |      variant?: ButtonVariant
    |   |   |      size?: ButtonSize
    |   |   |      loading?: boolean
    |   |   |      href?: string
    |   |   |    }
    |   |   |    
    |   |   |    const base =
    |   |   |      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none'
    |   |   |    
    |   |   |    const variants = {
    |   |   |      primary:
    |   |   |        'bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black',
    |   |   |      secondary:
    |   |   |        'bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white',
    |   |   |      ghost: 'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900',
    |   |   |    }
    |   |   |    
    |   |   |    const sizes = {
    |   |   |      sm: 'h-8 px-3 text-sm',
    |   |   |      md: 'h-10 px-4 text-sm',
    |   |   |      lg: 'h-12 px-6 text-base',
    |   |   |    }
    |   |   |    
    |   |   |    export function Button({
    |   |   |      className,
    |   |   |      variant = 'primary',
    |   |   |      size = 'md',
    |   |   |      loading = false,
    |   |   |      href,
    |   |   |      children,
    |   |   |      disabled,
    |   |   |      ...props
    |   |   |    }: ButtonProps) {
    |   |   |      const classes = clsx(
    |   |   |        base,
    |   |   |        variants[variant],
    |   |   |        sizes[size],
    |   |   |        loading && 'opacity-70 cursor-wait',
    |   |   |        className,
    |   |   |      )
    |   |   |    
    |   |   |      if (href) {
    |   |   |        return (
    |   |   |          <Link href={href} className={classes}>
    |   |   |            {children}
    |   |   |          </Link>
    |   |   |        )
    |   |   |      }
    |   |   |    
    |   |   |      return (
    |   |   |        <button disabled={disabled || loading} className={classes} {...props}>
    |   |   |          {loading ? 'Cargando...' : children}
    |   |   |        </button>
    |   |   |      )
    |   |   |    }
    |   |   |    
    |   |   ├── ComeBack.tsx
    |   |   ├── ContactForm.tsx
    |   |   ├── Container.tsx
    |   |   ├── Footer.tsx
    |   |   ├── Header.tsx
    |   |   ├── Hero.tsx
    |   |   ├── Icons.tsx
    |   |   ├── index.ts
    |   |   ├── Input.tsx
    |   |   ├── Logo.tsx
    |   |   ├── Modal.tsx
    |   |   ├── Pagination.tsx
    |   |   ├── PostCard.tsx
    |   |   ├── TagFilter.tsx
    |   |   └── ThemeToggle.tsx
    |   ├── 📁emails
    |   |   └── ContactEmail.tsx
    |   ├── 📁lib
    |   |   ├── AppConfig.ts
    |   |   ├── posts.ts
    |   |   └── utils.ts
    |   ├── 📁mdx
    |   |   └── components.tsx
    |   └── 📁posts
    |       ├── commit-github.mdx
    |       ├── configurar-llaves-ssh.mdx
    |       ├── esquema-de-particiones.mdx
    |       ├── post-01.mdx
    |       ├── post-02.mdx
    |       ├── post-03.mdx
    |       ├── post-04.mdx
    |       ├── post-05.mdx
    |       ├── post-06.mdx
    |       ├── post-07.mdx
    |       ├── post-08.mdx
    |       ├── post-09.mdx
    |       ├── post-10.mdx
    |       ├── post-11.mdx
    |       ├── post-12.mdx
    |       └── trabajo-en-equipo.mdx
    ├── .env.local
    ├── .gitignore
    ├── eslint.config.mjs
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package.json
    ├── pnpm-lock.yaml
    ├── pnpm-workspace.yaml
    ├── postcss.config.mjs
    ├── README.md
    └── tsconfig.json
```