import { motion } from 'framer-motion';

const cultureItems = [
  {
    title: 'Aprendizado Contínuo',
    description: 'Investimos no crescimento de cada membro da equipe, com acesso a cursos, conferências e tempo dedicado para experimentação. Aqui, aprender faz parte do trabalho.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    reverse: false,
  },
  {
    title: 'Flexibilidade e Autonomia',
    description: 'Confiamos em nossos talentos. Trabalho remoto, horários flexíveis e liberdade para escolher as melhores ferramentas fazem parte do nosso DNA.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop',
    reverse: true,
  },
  {
    title: 'Paixão por Tecnologia',
    description: 'Somos movidos pelo desejo de criar soluções que impactam vidas. Cada linha de código é uma oportunidade de fazer a diferença.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop',
    reverse: false,
  },
];

const CultureSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Onde a Mágica Acontece
          </span>
          <h2 className="section-title mb-4">
            Nossa <span className="text-gradient">Cultura</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {cultureItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-8 lg:gap-16 items-center ${
                item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                  
                  <div className="relative rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    {/* Dark overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    {/* Tech filter overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 mix-blend-overlay" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
