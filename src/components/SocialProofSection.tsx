import { motion } from 'framer-motion';

// Tech company/partner logos as SVG components (monocromatic)
const logos = [
  {
    name: 'AWS',
    svg: (
      <svg viewBox="0 0 100 60" fill="currentColor" className="h-8 md:h-10 w-auto">
        <path d="M28.3 20.6c0 1.2.1 2.1.4 2.9.2.7.6 1.5 1 2.4.2.3.2.5.2.7 0 .3-.2.6-.6.9l-2 1.3c-.3.2-.6.3-.8.3-.3 0-.6-.2-.9-.5-.4-.4-.8-.9-1.1-1.4-.3-.5-.6-1.1-1-1.8-2.5 2.9-5.6 4.4-9.3 4.4-2.7 0-4.8-.8-6.4-2.3-1.6-1.5-2.4-3.6-2.4-6.1 0-2.7.9-4.9 2.9-6.6 1.9-1.7 4.5-2.5 7.7-2.5 1.1 0 2.2.1 3.4.3 1.2.2 2.4.4 3.7.8v-2.3c0-2.4-.5-4.1-1.5-5.1-1-1-2.8-1.5-5.3-1.5-1.1 0-2.3.1-3.5.4-1.2.3-2.3.6-3.4 1.1-.5.2-.9.4-1.1.4-.3 0-.4-.2-.4-.7V3c0-.4.1-.6.2-.8.1-.2.4-.4.8-.5 1.1-.5 2.4-1 4-1.3C14.3.1 15.9 0 17.6 0c4 0 7 .9 8.9 2.8 1.9 1.8 2.8 4.6 2.8 8.4v11.4h1zm-12.8 4.8c1.1 0 2.2-.2 3.4-.6 1.2-.4 2.3-1.1 3.2-2 .5-.6.9-1.3 1.1-2.1.2-.8.4-1.8.4-3v-1.4c-1-.3-2-.5-3.1-.7-1.1-.1-2.1-.2-3.1-.2-2.1 0-3.6.4-4.6 1.3-1 .9-1.5 2.1-1.5 3.8 0 1.5.4 2.7 1.2 3.5.8.9 1.9 1.4 3 1.4zm25.3 3.4c-.4 0-.7-.1-.9-.3-.2-.2-.4-.5-.5-1l-5.8-19.1c-.2-.5-.3-.8-.3-1 0-.4.2-.6.6-.6h3.1c.4 0 .7.1.9.3.2.2.3.5.5 1l4.1 16.3 3.9-16.3c.1-.5.3-.8.5-1 .2-.2.5-.3.9-.3h2.5c.4 0 .7.1.9.3.2.2.4.5.5 1l3.9 16.5 4.2-16.5c.2-.5.3-.8.5-1 .2-.2.5-.3.9-.3h3c.4 0 .6.2.6.6 0 .1 0 .3-.1.4 0 .2-.1.3-.2.6l-6 19.1c-.2.5-.3.8-.5 1-.2.2-.5.3-.9.3h-2.7c-.4 0-.7-.1-.9-.3-.2-.2-.4-.5-.5-1L53 12.3l-3.8 15.8c-.1.5-.3.8-.5 1-.2.2-.5.3-.9.3h-2.7l-4.3.4zm41 .9c-1.7 0-3.3-.2-4.9-.6-1.6-.4-2.8-.9-3.6-1.4-.5-.3-.8-.6-.9-.9-.1-.3-.2-.6-.2-.9v-1.5c0-.5.2-.7.6-.7.2 0 .3 0 .5.1.2.1.4.2.7.3 1 .4 2 .8 3.2 1 1.2.3 2.4.4 3.5.4 1.9 0 3.3-.3 4.3-1 1-.7 1.5-1.6 1.5-2.9 0-.9-.3-1.6-.8-2.2-.6-.6-1.6-1.1-3.1-1.6l-4.5-1.4c-2.2-.7-3.9-1.7-4.9-3-1-1.3-1.5-2.8-1.5-4.4 0-1.3.3-2.4.9-3.4.6-1 1.3-1.8 2.3-2.5 1-.7 2.1-1.2 3.4-1.5 1.3-.4 2.6-.5 4-.5.7 0 1.4 0 2.1.1.7.1 1.4.2 2 .4.6.2 1.2.3 1.8.5.5.2 1 .4 1.3.6.4.2.7.5.9.7.2.3.3.6.3 1v1.4c0 .5-.2.7-.6.7-.2 0-.5-.1-.9-.3-1.3-.6-2.8-.9-4.5-.9-1.7 0-3 .3-4 .8-.9.5-1.4 1.4-1.4 2.5 0 .9.3 1.6.9 2.2.6.6 1.8 1.2 3.4 1.7l4.4 1.4c2.2.7 3.8 1.7 4.8 2.9.9 1.2 1.4 2.7 1.4 4.3 0 1.3-.3 2.5-.8 3.6-.6 1.1-1.3 2-2.3 2.8-1 .8-2.2 1.4-3.6 1.8-1.5.5-3.1.7-4.8.7z"/>
      </svg>
    ),
  },
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 100 90" fill="currentColor" className="h-8 md:h-10 w-auto">
        <circle cx="50" cy="45" r="8" />
        <ellipse cx="50" cy="45" rx="40" ry="16" fill="none" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="50" cy="45" rx="40" ry="16" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(60 50 45)" />
        <ellipse cx="50" cy="45" rx="40" ry="16" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(-60 50 45)" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-8 md:h-10 w-auto">
        <rect x="10" y="10" width="80" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="4" />
        <text x="50" y="68" textAnchor="middle" fontSize="48" fontWeight="bold">TS</text>
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    svg: (
      <svg viewBox="0 0 120 100" fill="currentColor" className="h-8 md:h-10 w-auto">
        <path d="M60 20c-16.6 0-30 13.4-30 30 0 13.5 9 24.9 21.3 28.5l6-10.4C51.2 65.8 47 58.4 47 50c0-7.2 5.8-13 13-13s13 5.8 13 13c0 8.4-4.2 15.8-10.3 18.1l6 10.4C81 74.9 90 63.5 90 50c0-16.6-13.4-30-30-30z"/>
        <circle cx="60" cy="50" r="8" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    svg: (
      <svg viewBox="0 0 120 90" fill="currentColor" className="h-8 md:h-10 w-auto">
        <rect x="20" y="50" width="12" height="10" />
        <rect x="35" y="50" width="12" height="10" />
        <rect x="50" y="50" width="12" height="10" />
        <rect x="65" y="50" width="12" height="10" />
        <rect x="35" y="38" width="12" height="10" />
        <rect x="50" y="38" width="12" height="10" />
        <rect x="65" y="38" width="12" height="10" />
        <rect x="50" y="26" width="12" height="10" />
        <path d="M100 48c-2-1.5-6.6-2-10-1.3-.5-3.5-2.5-6.5-6-9l-2-1.3-1.3 2c-1.6 2.5-2.5 6-2.2 9 .2 2 .8 4.2 2 6H10c-2 4.5-2 15.3 3 23.3 4 6.4 10.5 9.6 19.5 9.6 18.8 0 33-8.7 40-24.6 2.6.1 8.3.2 11.2-5.5l.8-1.5-2.5-1.7z"/>
      </svg>
    ),
  },
  {
    name: 'Kubernetes',
    svg: (
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-8 md:h-10 w-auto">
        <path d="M50 10L15 30v40l35 20 35-20V30L50 10zm0 8l25 14.3V67.7L50 82 25 67.7V32.3L50 18z"/>
        <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <line x1="50" y1="38" x2="50" y2="25" stroke="currentColor" strokeWidth="3" />
        <line x1="50" y1="62" x2="50" y2="75" stroke="currentColor" strokeWidth="3" />
        <line x1="38" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="3" />
        <line x1="62" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    svg: (
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-8 md:h-10 w-auto">
        <path d="M50 10c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zm0 72c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
        <path d="M50 30l-15 26h30L50 30zm0 10l7.5 13h-15L50 40z"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    svg: (
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-8 md:h-10 w-auto">
        <ellipse cx="50" cy="25" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M20 25v50c0 6.6 13.4 12 30 12s30-5.4 30-12V25" fill="none" stroke="currentColor" strokeWidth="4" />
        <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Construindo o Futuro com os{' '}
            <span className="text-gradient">Melhores</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
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
              className="flex-shrink-0 text-white/40 transition-all duration-300 hover:text-white cursor-pointer relative group/logo"
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
