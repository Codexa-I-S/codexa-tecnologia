import { motion } from 'framer-motion';
import { Lightbulb, Shield, Target, Users } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Buscamos constantemente novas formas de resolver problemas e criar valor através da tecnologia.',
    gradient: 'from-primary to-neon-cyan',
  },
  {
    icon: Shield,
    title: 'Integridade',
    description: 'Agimos com transparência e honestidade em todas as nossas relações e decisões.',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: Target,
    title: 'Excelência Técnica',
    description: 'Comprometidos com a qualidade, entregamos soluções que superam expectativas.',
    gradient: 'from-neon-cyan to-secondary',
  },
  {
    icon: Users,
    title: 'Colaboração',
    description: 'Acreditamos que as melhores soluções nascem do trabalho em equipe e da diversidade de ideias.',
    gradient: 'from-primary to-secondary',
  },
];

const ValuesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            O Código de Conduta
          </span>
          <h2 className="section-title mb-4">
            Nossos <span className="text-gradient">Valores</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card p-8 h-full text-center group relative overflow-hidden"
              >
                {/* Pulsing background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon with 3D floating effect */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative mb-6"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} blur-xl opacity-30 group-hover:opacity-60 transition-opacity`} />
                    <div className={`relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.gradient} p-0.5`}>
                      <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                        <value.icon className="w-8 h-8 text-foreground" />
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
