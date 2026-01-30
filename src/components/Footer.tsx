import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/codexa-logo.png" 
                alt="CODEXA Tecnologia e Inovação" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed ">
              Transformando o futuro através da tecnologia. Soluções inovadoras para empresas que buscam excelência digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Início', 'Serviços', 'FAQ', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase() === 'início' ? 'hero' : link.toLowerCase()}`}
                    className="text-white/50 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-3">
              {['Desenvolvimento', 'Consultoria', 'Cloud', 'IA & ML'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Codexa Tecnologia e Inovação. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
