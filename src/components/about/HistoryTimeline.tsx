import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const historyEvents = [
  {
    year: '2020',
    title: 'Fundação e Missão',
    description: 'A CODEXA nasceu da visão de dois engenheiros apaixonados por tecnologia, com a missão de democratizar o acesso a soluções de software de alta qualidade.',
  },
  {
    year: '2021',
    title: 'Primeiros Clientes Enterprise',
    description: 'Conquistamos nossos primeiros contratos com grandes empresas, provando que qualidade e inovação andam juntas.',
  },
  {
    year: '2022',
    title: 'Primeiro Grande Projeto',
    description: 'Desenvolvemos a plataforma que revolucionou o setor logístico brasileiro, processando mais de 1 milhão de transações diárias.',
  },
  {
    year: '2023',
    title: 'Expansão da Equipe',
    description: 'Triplicamos nosso time de engenheiros, atraindo talentos das melhores universidades e empresas de tecnologia.',
  },
  {
    year: '2024',
    title: 'Inovação em IA',
    description: 'Lançamos nossas primeiras soluções com IA integrada, posicionando a CODEXA na vanguarda da transformação digital.',
  },
];

const HistoryTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Nossa Trajetória
          </span>
          <h2 className="section-title mb-4">
            A Jornada da <span className="text-gradient">CODEXA</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-secondary"
              style={{ height: lineProgress }}
            />
          </div>

          <div className="space-y-12">
            {historyEvents.map((event, index) => (
              <motion.div
                key={event.year}
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
                        '0 0 15px hsl(var(--neon-blue) / 0.4)',
                        '0 0 30px hsl(var(--neon-blue) / 0.6)',
                        '0 0 15px hsl(var(--neon-blue) / 0.4)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 rounded-full bg-primary border-2 border-primary"
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 group"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-gradient">
                      {event.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mt-2 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
