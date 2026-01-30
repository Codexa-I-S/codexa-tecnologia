import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'Daniel Verissimo',
    role: 'Desenvolvedor Front-End & Co-Foundador',
    image: '/profile/Imagem-daniel03.JPG',
    linkedin: 'https://www.linkedin.com/in/daniel-verissimo/',
    github: 'https://github.com/DanielVerissimo1',
  },
  {
    name: 'Davi de Castro',
    role: 'Desenvolvedor Front-End & Co-Foundador',
    image: '/profile/163475173.jpg',
    linkedin: 'https://www.linkedin.com/in/davicastro213/',
    github: 'https://github.com/Davi-santos16',
  },  
  {
    name: 'Maira Castro',
    role: 'Desenvolvedora Back-End & Co-Foundador',
    image: '/profile/Hire-Maira-n-2vGeER.webp',
    linkedin: 'https://www.linkedin.com/in/maira-stefane-b86492208/',
    github: 'https://github.com/Maira-castro',
  },
  {
    name: 'Valdiano Rocha',
    role: 'Desenvolvedor Back-End & Co-Foundador',
    image: '/profile/Hire-Valdiano-TEyn30O0.webp',
    linkedin: 'https://www.linkedin.com/in/valdiano-rocha-4b82bb143/',
    github: 'https://github.com/ValdianoRocha',
  },
  {
    name: 'José Lianderson',
    role: 'Desenvolvedor Back-End & Co-Foundador',
    image: '/profile/Hire-Lianderson-JBrc6XlD.webp',
    linkedin: 'https://www.linkedin.com/in/jose-lianderson-ribeiro/',
    github: 'https://github.com/liandersonDesen',
  }
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
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{member.role}</p>

                  <div className="flex gap-2 justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
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
