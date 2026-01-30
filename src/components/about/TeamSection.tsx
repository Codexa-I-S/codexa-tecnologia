import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Carlos Silva',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Ana Rodrigues',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Pedro Santos',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Mariana Costa',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Lucas Oliveira',
    role: 'Lead AI Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Julia Ferreira',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
];

const TeamSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Nossa Equipe
          </span>
          <h2 className="section-title mb-4">
            Conheça os <span className="text-gradient">Especialistas</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Mentes brilhantes unidas pela paixão de construir o futuro da tecnologia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Image with duotone effect */}
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay z-10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Scanline effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="h-px bg-white/30"
                          style={{ marginTop: `${i * 8}px` }}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{member.role}</p>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
