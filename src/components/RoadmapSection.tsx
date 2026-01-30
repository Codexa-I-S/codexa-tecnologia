import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    date: 'Q1 2026',
    title: 'Plataforma CODEXA Cloud',
    description: 'Lançamento da nossa plataforma proprietária de infraestrutura inteligente, oferecendo deploy automatizado e escalabilidade sob demanda para empresas de todos os portes.',
    color: 'neon-blue',
  },
  {
    date: 'Q3 2026',
    title: 'Expansão LATAM',
    description: 'Abertura de operações no México e Colômbia, consolidando nossa presença como líder em soluções de software na América Latina.',
    color: 'neon-purple',
  },
  {
    date: 'Q1 2027',
    title: 'CODEXA AI Lab',
    description: 'Inauguração do nosso laboratório de IA Generativa, focado em desenvolver modelos proprietários para automação empresarial e análise preditiva.',
    color: 'neon-cyan',
  },
  {
    date: 'Q4 2027',
    title: 'Enterprise Suite 2.0',
    description: 'Nova versão da nossa suite empresarial com integração nativa de IA, dashboards personalizáveis e recursos avançados de segurança.',
    color: 'neon-blue',
  },
];

const RoadmapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="roadmap"
      className="relative py-32 overflow-hidden"
    >
      {/* Starfield background effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="container mx-auto px-6 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Visão de Futuro
          </span>
          <h2 className="section-title mb-6">
            O Caminho da{' '}
            <span className="text-gradient">Inovação</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Nossa jornada estratégica rumo à transformação digital do mercado
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-secondary to-neon-cyan"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-24 md:space-y-32">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.date}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`relative flex items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 md:p-8 relative group"
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                        milestone.color === 'neon-blue'
                          ? 'bg-primary/20'
                          : milestone.color === 'neon-purple'
                          ? 'bg-secondary/20'
                          : 'bg-neon-cyan/20'
                      }`}
                    />
                    <div className="relative z-10">
                      <span
                        className={`inline-block text-sm font-bold mb-3 ${
                          milestone.color === 'neon-blue'
                            ? 'text-primary'
                            : milestone.color === 'neon-purple'
                            ? 'text-secondary'
                            : 'text-neon-cyan'
                        }`}
                      >
                        {milestone.date}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    animate={{
                      boxShadow: [
                        `0 0 20px hsl(var(--${milestone.color}) / 0.4)`,
                        `0 0 40px hsl(var(--${milestone.color}) / 0.6)`,
                        `0 0 20px hsl(var(--${milestone.color}) / 0.4)`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-5 h-5 rounded-full border-2 ${
                      milestone.color === 'neon-blue'
                        ? 'bg-primary border-primary'
                        : milestone.color === 'neon-purple'
                        ? 'bg-secondary border-secondary'
                        : 'bg-neon-cyan border-neon-cyan'
                    }`}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* End indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-8"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse-glow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
