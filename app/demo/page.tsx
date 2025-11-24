"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Header from '../components/Header';
import LazyImage from '../components/LazyImage';
import Image from 'next/image';

// Animation definitions for Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function DemoPage() {
    const [screenshots, setScreenshots] = React.useState<string[]>([]);
    React.useEffect(() => {
      fetch('/api/screenshots').then(r => r.json()).then((data) => {
        if (data && data.images) setScreenshots((data.images || []).slice(0,6));
      }).catch(() => {});
    }, []);
    return (
        <div className="min-h-screen text-gray-800 overflow-x-hidden bg-white">
            <Header />

            {/* Main Content */}
            <main className="pt-20">
                {/* App Visualization Section */}
                <section id="visualization" className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold text-gray-900">Zobacz, jakie to proste</h2>
                            <p className="mt-4 text-lg text-gray-600">Kilka zrzutów ekranu ilustrujących kluczowe funkcje aplikacji.</p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-2 items-start">
                          <div className="bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-xl font-semibold mb-3">Dashboard projektu</h3>
                            <p className="text-gray-600 mb-4">Szybki przegląd postępu, budżetu i najważniejszych zadań.</p>
                            <div className="rounded-lg overflow-hidden">
                              <LazyImage src={'/screenshots/dashboard.png'} alt="Dashboard" width={1280} height={720} className="w-full h-auto object-cover" />
                            </div>
                          </div>

                          <div className="bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-xl font-semibold mb-3">Tablica zadań (Kanban)</h3>
                            <p className="text-gray-600 mb-4">Przeciągaj zadania między kolumnami, kontroluj statusy i priorytety.</p>
                            <div className="rounded-lg overflow-hidden">
                              <LazyImage src={'/screenshots/kanban.png'} alt="Kanban" width={1280} height={720} className="w-full h-auto object-cover" />
                            </div>
                          </div>
                        </div>
                    </div>
                </section>

                {/* Visualize Progress Section */}
                <motion.section
                  id="visualize-progress"
                  className="py-20 bg-gray-50"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900">Wizualizuj swoje postępy</h2>
                      <p className="mt-4 text-lg text-gray-600">
                        Od harmonogramów Gantta po tablice Kanban – miej wszystko pod kontrolą.
                      </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                      {/* Gantt Chart Mockup */}
                      <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-lg">
                        <h3 className="font-bold text-lg text-gray-800 mb-4">Przykładowy harmonogram</h3>
                        <div className="space-y-4">
                          {/* Task 1 */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <p className="sm:w-28 text-sm text-gray-600 shrink-0 font-medium">Fundamenty</p>
                            <div className="flex-1 h-7 bg-gray-200 rounded-full w-full">
                              <div className="h-7 bg-indigo-500 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                          {/* Task 2 */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <p className="sm:w-28 text-sm text-gray-600 shrink-0 font-medium">Struktura</p>
                            <div className="flex-1 h-7 bg-gray-200 rounded-full w-full">
                              <div className="h-7 bg-indigo-500 rounded-full ml-[20%]" style={{ width: '50%' }}></div>
                            </div>
                          </div>
                          {/* Task 3 */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <p className="sm:w-28 text-sm text-gray-600 shrink-0 font-medium">Instalacje</p>
                            <div className="flex-1 h-7 bg-gray-200 rounded-full w-full">
                              <div className="h-7 bg-amber-500 rounded-full ml-[45%]" style={{ width: '35%' }}></div>
                            </div>
                          </div>
                           {/* Task 4 */}
                           <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <p className="sm:w-28 text-sm text-gray-600 shrink-0 font-medium">Wykończenia</p>
                            <div className="flex-1 h-7 bg-gray-200 rounded-full w-full">
                              <div className="h-7 bg-gray-400 rounded-full ml-[70%]" style={{ width: '30%' }}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Kanban Board Mockup */}
                      <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-lg">
                        <h3 className="font-bold text-lg text-gray-800 mb-4">Przykładowa tablica zadań</h3>
                        <div className="flex justify-center">
                          <div className="w-full max-w-[720px] rounded-lg overflow-hidden">
                            <LazyImage src={'/screenshots/kanban.png'} alt="Kanban view" width={1280} height={720} className="w-full h-auto object-cover" />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.section>

                {/* Demo Screenshots Gallery */}
                <section className="py-12 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-semibold">Zrzuty ekranu demo</h3>
                      <p className="text-gray-500 mt-2">Kliknij aby otworzyć obraz w nowej karcie.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {screenshots.map(s => (
                        <div key={s} className="rounded overflow-hidden shadow-sm">
                          <LazyImage src={s} alt={s} width={800} height={450} className="w-full h-auto object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Web Panel Visualization Section */}
                <motion.section
                  id="web-panel"
                  className="py-20 bg-gray-50"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900">Panel Klienta w Akcji</h2>
                      <p className="mt-4 text-lg text-gray-600">
                        Zarządzaj każdym aspektem swojego projektu w jednym, intuicyjnym miejscu.
                      </p>
                    </div>

                    <motion.div variants={itemVariants} className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden p-6">
                      <h3 className="text-lg font-semibold mb-4">Panel klienta - zrzut ekranu</h3>
                      <p className="text-gray-600 mb-4">Pełny widok panelu klienta z listami projektów, zadaniami i czatem.</p>
                      <div className="rounded-lg overflow-hidden">
                        <LazyImage src={'/screenshots/dashboard.png'} alt="Panel klienta" width={1400} height={800} className="w-full h-auto object-cover" />
                      </div>
                      <p className="text-center text-xs text-gray-500 mt-6">Uwaga: Finalny wygląd produktu może różnić się od przedstawionej wizualizacji.</p>
                    </motion.div>
                  </div>
                </motion.section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} PlanerBudowlany. Wszelkie prawa zastrzeżone.</p>
                    <p className="text-sm text-gray-400 mt-2">
                        Projekt stworzony przez <a href="https://lifelike.cloud/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Lifelike</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
