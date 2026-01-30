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

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} id="roadmap" className="relative py-32 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Nossa <span className="text-gradient">Trajetória</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Nossa jornada estratégica rumo à transformação digital do mercado
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-secondary to-neon-cyan"
              style={{ height: lineProgress }}
            />
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.date}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2">
                  <motion.div
                    animate={{
                      boxShadow: [
                        `0 0 15px hsl(var(--${milestone.color}) / 0.4)`,
                        `0 0 30px hsl(var(--${milestone.color}) / 0.6)`,
                        `0 0 15px hsl(var(--${milestone.color}) / 0.4)`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-4 h-4 rounded-full border-2 ${
                      milestone.color === 'neon-blue'
                        ? 'bg-primary border-primary'
                        : milestone.color === 'neon-purple'
                        ? 'bg-secondary border-secondary'
                        : 'bg-neon-cyan border-neon-cyan'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 group relative"
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
                        className={`text-2xl md:text-3xl font-bold ${
                          milestone.color === 'neon-blue'
                            ? 'text-primary'
                            : milestone.color === 'neon-purple'
                            ? 'text-secondary'
                            : 'text-neon-cyan'
                        }`}
                      >
                        {milestone.date}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-foreground mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* End indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 -bottom-8"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse-glow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;