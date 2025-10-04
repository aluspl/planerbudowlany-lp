"use client";

import { motion, Variants } from 'framer-motion';
import Header from '../components/Header';
import AppVisualization from '../components/AppVisualization';
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
    return (
        <div className="min-h-screen text-gray-800 overflow-x-hidden bg-white">
            <Header />

            {/* Main Content */}
            <main className="pt-20">
                {/* App Visualization Section */}
                <section id="visualization" className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">Zobacz, jakie to proste</h2>
                            <p className="mt-4 text-lg text-gray-600">Wszystkie kluczowe funkcje w zasięgu ręki.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl p-4 lg:p-8">
                            <AppVisualization />
                        </div>
                        <p className="text-center text-xs text-gray-500 mt-4">
                          Uwaga: Finalny wygląd produktu może różnić się od przedstawionych wizualizacji.
                        </p>
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
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {/* Column 1 */}
                          <div>
                            <h4 className="font-semibold text-sm text-gray-500 mb-3 text-center">Do zrobienia</h4>
                            <div className="space-y-2">
                              <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 shadow-sm">Zamówić stal</div>
                              <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 shadow-sm">Projekt łazienki</div>
                            </div>
                          </div>
                          {/* Column 2 */}
                          <div>
                            <h4 className="font-semibold text-sm text-amber-600 mb-3 text-center">W trakcie</h4>
                            <div className="space-y-2">
                              <div className="bg-amber-100 p-3 rounded-lg text-sm text-amber-800 shadow-sm">Tynkowanie ścian</div>
                            </div>
                          </div>
                          {/* Column 3 */}
                          <div>
                            <h4 className="font-semibold text-sm text-indigo-600 mb-3 text-center">Zrobione</h4>
                            <div className="space-y-2">
                              <div className="bg-indigo-100 p-3 rounded-lg text-sm text-indigo-800 line-through shadow-sm">Wylanie fundamentów</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.section>

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

                    <motion.div
                      variants={itemVariants}
                      className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
                    >
                      {/* Browser Header */}
                      <div className="h-11 bg-gray-100 border-b border-gray-200 flex items-center px-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row min-h-[600px]">
                        {/* Sidebar */}
                        <div className="w-full md:w-60 bg-gray-50 border-r border-gray-200 p-6">
                          <h3 className="font-bold text-lg text-gray-800 mb-6">Menu</h3>
                          <ul className="space-y-3">
                            <li><a href="#" className="font-semibold text-indigo-600 bg-indigo-100 p-2 rounded-lg flex">Dashboard</a></li>
                            <li><a href="#" className="text-gray-600 hover:bg-gray-200 p-2 rounded-lg flex">Projekty</a></li>
                            <li><a href="#" className="text-gray-600 hover:bg-gray-200 p-2 rounded-lg flex">Zadania</a></li>
                            <li><a href="#" className="text-gray-600 hover:bg-gray-200 p-2 rounded-lg flex">Czat</a></li>
                            <li><a href="#" className="text-gray-600 hover:bg-gray-200 p-2 rounded-lg flex">Pliki</a></li>
                            <li><a href="#" className="text-gray-600 hover:bg-gray-200 p-2 rounded-lg flex">Ustawienia</a></li>
                          </ul>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-8">
                          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Projektu "Budowa Domu"</h2>
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            
                            {/* Gantt Chart Widget */}
                            <div className="lg:col-span-2 bg-gray-50 p-6 rounded-xl">
                              <h4 className="font-semibold text-gray-800 mb-4">Oś czasu projektu</h4>
                              <div className="space-y-3">
                                <div className="flex items-center gap-4"><p className="w-24 text-sm shrink-0">Fundamenty</p><div className="flex-1 h-5 bg-gray-200 rounded-full"><div className="h-5 bg-indigo-500 rounded-full" style={{width: '100%'}}></div></div></div>
                                <div className="flex items-center gap-4"><p className="w-24 text-sm shrink-0">Struktura</p><div className="flex-1 h-5 bg-gray-200 rounded-full"><div className="h-5 bg-indigo-500 rounded-full ml-[15%]" style={{width: '85%'}}></div></div></div>
                                <div className="flex items-center gap-4"><p className="w-24 text-sm shrink-0">Instalacje</p><div className="flex-1 h-5 bg-gray-200 rounded-full"><div className="h-5 bg-amber-500 rounded-full ml-[40%]" style={{width: '60%'}}></div></div></div>
                              </div>
                            </div>

                            {/* Checklist Widget */}
                            <div className="bg-gray-50 p-6 rounded-xl">
                              <h4 className="font-semibold text-gray-800 mb-4">Moja Checklista</h4>
                              <ul className="space-y-3">
                                <li className="flex items-center"><input type="checkbox" defaultChecked className="h-4 w-4 text-indigo-600 rounded" readOnly /> <span className="ml-3 text-sm line-through text-gray-500">Zatwierdzić projekt</span></li>
                                <li className="flex items-center"><input type="checkbox" defaultChecked className="h-4 w-4 text-indigo-600 rounded" readOnly /> <span className="ml-3 text-sm line-through text-gray-500">Wybrać ekipę</span></li>
                                <li className="flex items-center"><input type="checkbox" className="h-4 w-4 text-indigo-600 rounded" readOnly /> <span className="ml-3 text-sm text-gray-800">Zamówić materiały</span></li>
                              </ul>
                            </div>

                            {/* Chat Widget */}
                            <div className="lg:col-span-3 bg-gray-50 p-6 rounded-xl">
                               <h4 className="font-semibold text-gray-800 mb-4">Czat z wykonawcą</h4>
                               <div className="space-y-3">
                                <div className="text-sm"><span className="font-bold text-indigo-700">Ty:</span> Cześć, czy mamy już update odnośnie okien?</div>
                                <div className="text-sm"><span className="font-bold text-amber-700">Jan Murarz:</span> Tak, dzwoniłem. Będą w przyszłym tygodniu we wtorek.</div>
                               </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </motion.div>
                    <p className="text-center text-xs text-gray-500 mt-6">
                      Uwaga: Finalny wygląd produktu może różnić się od przedstawionej wizualizacji.
                    </p>
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
