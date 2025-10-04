"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { logCtaClick } from '../../lib/analytics';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesMenuOpen, setIsFeaturesMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      text: 'Funkcje',
      subLinks: [
        { href: '/dziennik-budowy', text: 'Dziennik Budowy' },
        { href: '/budzet', text: 'Zarządzanie Budżetem' },
        { href: '/usterki', text: 'Zgłaszanie Usterek' },
        { href: '/demo', text: 'Wizualizacja' },
      ]
    },
    { href: pathname === '/' ? '/#zapisz-sie' : '/', text: 'Otrzymaj Dostęp', isButton: true, onClick: () => logCtaClick('header_get_access') },
  ];

  const mobileNavLinks = [
    { href: '/dziennik-budowy', text: 'Dziennik Budowy' },
    { href: '/budzet', text: 'Zarządzanie Budżetem' },
    { href: '/usterki', text: 'Zgłaszanie Usterek' },
    { href: '/demo', text: 'Wizualizacja' },
    { href: pathname === '/' ? '/#zapisz-sie' : '/', text: 'Otrzymaj Dostęp', isButton: true, onClick: () => logCtaClick('header_get_access') },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center h-full">
              <Logo />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                link.subLinks ? (
                  <div 
                    key={link.text}
                    className="relative"
                    onMouseEnter={() => setIsFeaturesMenuOpen(true)}
                    onMouseLeave={() => setIsFeaturesMenuOpen(false)}
                  >
                    <button className="font-semibold text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
                      {link.text}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <AnimatePresence>
                      {isFeaturesMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                          <div className="flex flex-col p-2">
                            {link.subLinks.map(subLink => (
                              <Link key={subLink.href} href={subLink.href} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                {subLink.text}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={link.onClick}
                    className={link.isButton
                      ? "bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                      : "font-semibold text-gray-600 hover:text-indigo-600 transition-colors"}
                  >
                    {link.text}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white shadow-lg md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => {
                    if(link.onClick) link.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className={link.isButton
                    ? "block w-full text-center bg-indigo-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                    : "block font-semibold text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 rounded-md text-base"}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;