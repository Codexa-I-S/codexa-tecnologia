import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Início', href: '/', isRoute: true },
  { name: 'Sobre', href: '/sobre#about', isRoute: true },
  { name: 'Serviços', href: '/#services', isRoute: false },
  { name: 'FAQ', href: '/#faq', isRoute: false },
  { name: 'Contato', href: '/#contact', isRoute: false },
];

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-[9999] transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-25  items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative">
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/30" />
            <img 
              src="/codexa-logo.png" 
              alt="CODEXA Tecnologia e Inovação" 
              className="h-20 w-130 relative z-10 transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_15px_hsl(211,100%,50%,0.6)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => 
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 group ${
                    location.pathname === link.href ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-neon-gradient transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => window.location.href = link.href}
                  className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-neon-gradient group-hover:w-full transition-all duration-300" />
                </button>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="btn-neon text-sm bg-transparent border-none cursor-pointer"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 relative z-[9999]"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => 
                link.isRoute ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg font-medium transition-colors py-2 ${
                        location.pathname === link.href ? 'text-white' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        setTimeout(() => {
                          window.location.href = link.href;
                        }, 100);
                      }}
                      className="block text-lg font-medium text-white/70 hover:text-white transition-colors py-2 bg-transparent border-none cursor-pointer w-full text-left"
                    >
                      {link.name}
                    </button>
                  </motion.div>
                )
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    window.location.href = '/#contact';
                  }, 100);
                }}
                className="btn-neon text-center mt-4 bg-transparent border-none cursor-pointer w-full"
              >
                Fale Conosco
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
