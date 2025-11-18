'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "@/app/hooks/useTranslation";  // for Translation
import Link from "next/link";

export default function NavSection() {
    const t = useTranslation(); // für Traduction

const [isOpen, setIsOpen] = useState(false);
  const [hiddenHeader, setHiddenHeader] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Navigation beim Scrollen nach unten ausblenden, beim Scrollen nach oben anzeigen
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setHiddenHeader(scrollTop > lastScrollTop);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  // Die Menü Items erstellen
  const menuItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.skills, href: '/#skills' },
    { label: t.nav.competences, href: '/#competences' },
    { label: t.nav.projects, href: '/#projects' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  //Sprache aktualisieren bzw. festlegen
  const [locale, setLocale] = useState("en");

useEffect(() => {
  if (typeof window !== "undefined") {
    const search = new URLSearchParams(window.location.search);
    setLocale(search.get("lang") || "en");
  }
}, []);

// Funktion bei ausgelöstem Event: Sprache ändern
const changeLanguage = () => {
  const nextLang = locale === "de" ? "en" : "de";
  const url = new URL(window.location.href);
  url.searchParams.set("lang", nextLang);
  window.location.href = url.toString();
};

//Ende

	return (
        <>
      {/* === Principal Navbar === */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hiddenHeader ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full h-12 z-[100] transition-all duration-300 bg-transparent dark:bg-gray-900/60 backdrop-blur-md"
      >
        <div className="flex items-center justify-between w-full h-16 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-green-500">
            NK
          </Link>

          {/* --- Desktop Menü  --- */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="px-4 py-2 text-sm font-semibold uppercase text-green-500 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer relative group">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sprache (Button) */}
            <button
                onClick={changeLanguage}
              className="relative group ml-2 p-2 bg-gray-900/50 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl 
                border border-green-500 dark:border-gray-700 hover:border-primary dark:hover:border-primary 
                transition-all shadow-lg"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-green-500 dark:text-gray-200" />
                <span className="text-sm font-bold text-green-500 dark:text-gray-200">{locale}</span>
              </div>
            </button>

            {/* Bouton dark mode */}
            {/*<button
              className="relative group p-2 bg-gray-900/50 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl 
                border border-green-500 dark:border-gray-700 hover:border-primary dark:hover:border-primary 
                transition-all shadow-lg text-green-500"
              aria-label="Switch to dark mode"
            >☀️/🌑</button>*/}
          </div>

          {/* --- Button (Mobile Menu)  --- */}
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
            {/* Header of drawer */}
            <div className="flex justify-between items-center mb-4  mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={toggleMenu}>
                <X className="text-gray-300 hover:text-white" size={24} />
              </button>
            </div>

            {/* Links of menu */}
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg uppercase font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='pt-6 border-t border-gray-200 dark:border-gray-700' style={{opacity: 1, transform: 'none'}}>
              <p>Let&apos;s build something legendary together</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* === Overlay (semi-transparent background when the menu is open) === */}
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