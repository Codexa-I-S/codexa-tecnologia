import { motion } from 'framer-motion';

// Tech company/partner logos as SVG components (monocromatic)
const logos = [
  {
    name: 'JavaScript',
    svg: (
      <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'Docker',
    svg: (
      <img src="https://cdn.simpleicons.org/docker" alt="Docker" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <img src="https://cdn.simpleicons.org/node.js" alt="Node.js" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'Git',
    svg: (
      <img src="https://cdn.simpleicons.org/git" alt="Git" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'GitHub',
    svg: (
      <img src="https://cdn.simpleicons.org/github" alt="GitHub" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'NestJS',
    svg: (
      <img src="https://cdn.simpleicons.org/nestjs" alt="NestJS" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'PostgreSQL',
    svg: (
      <img src="https://cdn.simpleicons.org/postgresql" alt="PostgreSQL" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'React',
    svg: (
      <img src="https://cdn.simpleicons.org/react" alt="React" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'Next.js',
    svg: (
      <img src="https://cdn.simpleicons.org/next.js" alt="Next.js" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'TanStack',
    svg: (
      <img src="https://cdn.simpleicons.org/tanstack" alt="TanStack" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'Vite',
    svg: (
      <img src="https://cdn.simpleicons.org/vite" alt="Vite" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
  {
    name: 'Bootstrap',
    svg: (
      <img src="https://cdn.simpleicons.org/bootstrap" alt="Bootstrap" className="h-8 md:h-10 w-auto filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-opacity" />
    ),
  },
];

const SocialProofSection = () => {
  // Double the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Grid background texture */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-foreground mb-3">
            Construindo o Futuro com os{' '}
            <span className="text-gradient">Melhores</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg  max-w-2xl mx-auto">
            Utilizamos as tecnologias mais avançadas do mercado para entregar soluções de alto impacto
          </p>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative group">
        <motion.div
          className="flex items-center gap-16 md:gap-24"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ width: 'fit-content' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 transition-all duration-300 cursor-pointer relative group/logo"
              whileHover={{ scale: 1.1 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-primary/50 to-secondary/50" />
              <div className="relative z-10 drop-shadow-[0_0_0px_transparent] group-hover/logo:drop-shadow-[0_0_15px_hsl(var(--neon-blue)/0.8)] transition-all duration-300">
                {logo.svg}
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover/logo:opacity-100 transition-opacity whitespace-nowrap">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
