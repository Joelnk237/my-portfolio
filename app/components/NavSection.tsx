'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavSection() {

const [isOpen, setIsOpen] = useState(false);
  const [hiddenHeader, setHiddenHeader] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Masquer la nav au scroll vers le bas, l’afficher vers le haut
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setHiddenHeader(scrollTop > lastScrollTop);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Achievements', href: '/#competences' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
  ];

	return (
        /*<nav className="fixed top-0 w-full h-15 z-[100] transition-all duration-300 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md" style={{transform: 'none'}}>
            <div className="flex items-center justify-between w-full h-full px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
                <a href="/"></a>
                <div className="hidden md:flex items-center gap-2">
                    <ul className="flex items-center gap-1">
                        <li style={{opacity: 1, transform: 'none'}}>
                            <a href="/">
                                <span className="px-4 py-2 text-sm font-semibold uppercase text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer relative group" tabIndex={0}>
                                    Home
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full transition-all duration-300"></span>
                                </span>
                            </a>
                        </li>
                        <li style={{opacity: 1, transform: 'none'}}>
                            <a href="/#skills">
                                <span className="px-4 py-2 text-sm font-semibold uppercase text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer relative group" tabIndex={0}>
                                    Skills
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full transition-all duration-300"></span>
                                </span>
                            </a>
                        </li>
                        <li style={{opacity: 1, transform: 'none'}}>
                            <a href="/#competences">
                                <span className="px-4 py-2 text-sm font-semibold uppercase text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer relative group" tabIndex={0}>
                                    Achievements
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full transition-all duration-300"></span>
                                </span>
                            </a>
                        </li>
                        <li style={{opacity: 1, transform: 'none'}}>
                            <a href="/#projects">
                                <span className="px-4 py-2 text-sm font-semibold uppercase text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer relative group" tabIndex={0}>
                                    Projects
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full transition-all duration-300"></span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <button className="relative group ml-2 p-2.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all shadow-lg" aria-label="Switch to English" tabIndex={0} style={{transform: 'none'}}>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                        <div className="relative flex items-center gap-1.5">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="text-lg text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-200">EN</span>
                        </div>
                    </button>
                    <button className="relative group p-2.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all shadow-lg" aria-label="Switch to dark mode"  style={{transform: 'none'}} tabIndex={0}></button>
                </div>
                <div className="md:hidden cursor-pointer p-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-lg border border-gray-700" tabIndex={0} style={{transform: 'none'}}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-gray-700 dark:text-gray-200" height="25" width="25" xmlns="http://www.w3.org/2000/svg"></svg>
                </div>
            </div> 017643188459
        </nav>*/

        <>
      {/* === Barre principale === */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hiddenHeader ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full h-12 z-[100] transition-all duration-300 bg-transparent dark:bg-gray-900/60 backdrop-blur-md"
      >
        <div className="flex items-center justify-between w-full h-16 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-green-500">
            NK
          </a>

          {/* --- Menu Desktop --- */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>
                    <span className="px-4 py-2 text-sm font-semibold uppercase text-green-500 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer relative group">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Bouton langue */}
            <button
              className="relative group ml-2 p-2 bg-gray-900/50 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl 
                border border-green-500 dark:border-gray-700 hover:border-primary dark:hover:border-primary 
                transition-all shadow-lg"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-green-500 dark:text-gray-200" />
                <span className="text-sm font-bold text-green-500 dark:text-gray-200">DE</span>
              </div>
            </button>

            {/* Bouton dark mode */}
            <button
              className="relative group p-2 bg-gray-900/50 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl 
                border border-green-500 dark:border-gray-700 hover:border-primary dark:hover:border-primary 
                transition-all shadow-lg text-green-500"
              aria-label="Switch to dark mode"
            >☀️/🌑</button>
          </div>

          {/* --- Bouton Menu Mobile --- */}
          <button
            onClick={toggleMenu}
            className="md:hidden cursor-pointer p-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-lg border border-gray-700"
          >
            {isOpen ? (
              <X className="text-gray-700 dark:text-gray-200" size={25} />
            ) : (
              <Menu className="text-gray-700 dark:text-gray-200" size={25} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* === Drawer Mobile === */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-90 bg-gray-900/95 backdrop-blur-xl p-6 flex flex-col gap-6 text-white z-[200] shadow-xl"
          >
            {/* Header du drawer */}
            <div className="flex justify-between items-center mb-4  mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={toggleMenu}>
                <X className="text-gray-300 hover:text-white" size={24} />
              </button>
            </div>

            {/* Liens du menu */}
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg uppercase font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='pt-6 border-t border-gray-200 dark:border-gray-700' style={{opacity: 1, transform: 'none'}}>
              <p>Let's build something legendary together</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* === Overlay (fond semi-transparent quand le menu est ouvert) === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black md:hidden z-[150]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
        
        

            	);
}