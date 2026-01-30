import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ProcessStep from './ProcessStep';
import DiscoveryAnimation from './DiscoveryAnimation';
import DevelopmentAnimation from './DevelopmentAnimation';
import MissionControlDashboard from './MissionControlDashboard';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic background gradient based on scroll
  const gradientPosition = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100]);

  const processSteps = [
    {
      stepNumber: 1,
      title: 'Descoberta',
      subtitle: 'Mapeamento e Arquitetura',
      description:
        'Mergulhamos no seu ecossistema para identificar oportunidades, mapear requisitos e arquitetar a solução tecnológica ideal.',
      media: <DiscoveryAnimation />,
      mediaPosition: 'left' as const,
    },
    {
      stepNumber: 2,
      title: 'Desenvolvimento',
      subtitle: 'Engenharia de Software de Alta Performance',
      description:
        'Transformamos conceitos em realidade através de código limpo, metodologias ágeis e design centrado no usuário, garantindo escalabilidade.',
      media: <DevelopmentAnimation />,
      mediaPosition: 'right' as const,
    },
    {
      stepNumber: 3,
      title: 'Entrega & Suporte',
      subtitle: 'Lançamento e Evolução Contínua',
      description:
        'Implementação impecável, monitoramento em tempo real e acompanhamento contínuo para garantir que sua tecnologia nunca pare de evoluir e esteja sempre à frente.',
      media: <MissionControlDashboard />,
      mediaPosition: 'left' as const,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% ${gradientPosition}%, hsla(210, 100%, 60%, 0.08) 0%, transparent 50%), 
                       radial-gradient(ellipse at 30% 30%, hsla(270, 100%, 65%, 0.06) 0%, transparent 40%),
                       radial-gradient(ellipse at 70% 70%, hsla(190, 100%, 50%, 0.06) 0%, transparent 40%)`,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative">
        {/* Section Header */}
        <div className="container mx-auto px-4 md:px-8 pt-20 md:pt-32 pb-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Title */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Do Conceito ao{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                Lançamento Impecável
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Uma jornada meticulosamente planejada para transformar sua visão em realidade tecnológica.
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Process Steps */}
        {processSteps.map((step) => (
          <ProcessStep
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            subtitle={step.subtitle}
            description={step.description}
            media={step.media}
            mediaPosition={step.mediaPosition}
          />
        ))}

        {/* Bottom Fade */}
        <div className="h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default ProcessSection;