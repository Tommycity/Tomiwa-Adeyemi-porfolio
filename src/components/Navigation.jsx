import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        'fixed z-50',
        // Mobile: edge-to-edge, minimal side inset so the bar uses most of the width
        'top-3 left-0 right-0 w-full max-w-none px-2 sm:px-3',
        // Laptop+: centered pill, less horizontal margin than before
        'md:top-6 md:left-1/2 md:right-auto md:w-auto md:max-w-fit md:-translate-x-1/2 md:px-1.5 lg:px-2'
      )}
    >
      {/* Mobile: top bar + trigram */}
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-zinc-950/70 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 px-3 py-2.5 md:hidden w-full">
        <span className="truncate text-sm font-medium text-zinc-400">Welcome</span>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex shrink-0 flex-col justify-center gap-[5px] rounded-lg p-2 -mr-1 hover:bg-white/10 transition-colors"
        >
          <motion.span
            className="block h-0.5 w-6 rounded-full bg-zinc-100 origin-center"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-6 rounded-full bg-zinc-100"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-6 rounded-full bg-zinc-100 origin-center"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden mt-2 rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl shadow-xl w-full"
          >
            <div className="flex flex-col p-2 gap-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={clsx(
                      'relative w-full text-left rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      isActive ? 'text-zinc-50 bg-white/10' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Laptop+: horizontal nav — larger tap targets & type */}
      <div className="hidden md:flex items-center gap-1 p-2 rounded-full bg-zinc-950/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={clsx(
                'relative rounded-full font-medium transition-colors duration-300',
                'px-4 py-2.5 text-sm',
                'lg:px-6 lg:py-3 lg:text-base',
                isActive ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-200'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
