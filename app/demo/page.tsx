"use client";

import { motion, Variants } from 'framer-motion';
import Logo from '../components/Logo';
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
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <a href="/" className="flex items-center h-full">
                            <Logo />
                        </a>
                        <a href="/#zapisz-sie" className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                            Otrzymaj Dostęp
                        </a>
                    </div>
                </div>
            </header>

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
                            <svg width="100%" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter, sans-serif">
                              <defs>
                                <style>
                                  {`
                                  .phone-border { stroke: #e2e8f0; stroke-width: 4; rx: 20; ry: 20; fill: white; filter: drop-shadow(0 10px 8px rgba(0,0,0,0.04)) drop-shadow(0 4px 3px rgba(0,0,0,0.1)); }
                                  .header { fill: #f8fafc; stroke: #e2e8f0; }
                                  .nav { fill: #f8fafc; stroke: #e2e8f0; }
                                  .title-text { font-size: 14px; font-weight: 600; fill: #1e293b; }
                                  .body-text { font-size: 12px; fill: #475569; }
                                  .item-box { fill: white; stroke: #e2e8f0; rx: 8; ry: 8; }
                                  .arrow { stroke: #94a3b8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
                                  .arrow-text { font-size: 11px; fill: #64748b; font-style: italic; }
                                  .icon { stroke: #4f46e5; stroke-width: 1.5; fill: none; }
                                  `}
                                </style>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                  <polygon points="0 0, 8 3.5, 0 7" fill="#94a3b8" />
                                </marker>
                              </defs>

                              <rect width="100%" height="100%" fill="#f1f5f9" />
                              
                              <text x="50%" y="40" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1e293b">Wizualizacja Przepływu Aplikacji "PlanBudowlany"</text>

                              {/* Main Screens */}
                              <g id="main-screens">
                                {/* Tasks Screen */}
                                <g id="tasks-screen-group" transform="translate(50, 80)">
                                  <rect className="phone-border" width="220" height="450" />
                                  <rect className="header" x="3" y="3" width="214" height="50" />
                                  <text className="title-text" x="110" y="35" textAnchor="middle">Zadania</text>
                                  <rect className="item-box" x="20" y="70" width="180" height="40" />
                                  <text className="body-text" x="35" y="95">Projekt elektryki</text>
                                  <circle cx="180" cy="90" r="4" fill="#4f46e5" />
                                  <rect className="item-box" x="20" y="130" width="180" height="40" />
                                  <text className="body-text" x="35" y="155">Zamówić okna</text>
                                  <rect className="nav" x="3" y="397" width="214" height="50" />
                                  <g className="icon" transform="translate(55, 412) scale(1.2)">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </g>
                                </g>

                                {/* Chat Screen */}
                                <g id="chat-screen-group" transform="translate(320, 80)">
                                  <rect className="phone-border" width="220" height="450" />
                                  <rect className="header" x="3" y="3" width="214" height="50" />
                                  <text className="title-text" x="110" y="35" textAnchor="middle">Czat</text>
                                  <rect className="item-box" x="20" y="70" width="180" height="40" />
                                  <text className="body-text" x="35" y="95"># elektryka</text>
                                  <rect className="item-box" x="20" y="130" width="180" height="40" />
                                  <text className="body-text" x="35" y="155">Jan Kowalski</text>
                                  <rect className="nav" x="3" y="397" width="214" height="50" />
                                  <g className="icon" transform="translate(100, 412) scale(1.2)">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                  </g>
                                </g>

                                {/* Files Screen */}
                                <g id="files-screen-group" transform="translate(590, 80)">
                                  <rect className="phone-border" width="220" height="450" />
                                  <rect className="header" x="3" y="3" width="214" height="50" />
                                  <text className="title-text" x="110" y="35" textAnchor="middle">Pliki</text>
                                  <rect className="item-box" x="20" y="70" width="180" height="40" />
                                  <text className="body-text" x="35" y="95">Projekty</text>
                                  <rect className="item-box" x="20" y="130" width="180" height="40" />
                                  <text className="body-text" x="35" y="155">Kosztorysy</text>
                                  <rect className="nav" x="3" y="397" width="214" height="50" />
                                   <g className="icon" transform="translate(145, 412) scale(1.2)">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.25-2.25v-6.59a2.25 2.25 0 00-2.25-2.25H6.375a2.25 2.25 0 00-2.25 2.25v6.59z" />
                                  </g>
                                </g>
                              </g>
                              
                              {/* Sub Screens & Arrows */}
                              <g id="sub-screens">
                                {/* Task Detail */}
                                <g id="task-detail-group" transform="translate(160, 590)">
                                  <rect className="phone-border" width="220" height="100" />
                                  <rect className="header" x="3" y="3" width="214" height="30" />
                                  <text className="title-text" x="110" y="23" textAnchor="middle">Checklista</text>
                                  <text className="body-text" x="20" y="55">☐ Sprawdzić normy</text>
                                  <text className="body-text" x="20" y="75">☐ Zatwierdzić z inwestorem</text>
                                </g>
                                <path className="arrow" d="M160 530 C 160 560, 270 560, 270 590" />
                                <text className="arrow-text" x="220" y="565">Klik</text>

                                {/* Chat Detail */}
                                <g id="chat-detail-group" transform="translate(490, 590)">
                                  <rect className="phone-border" width="220" height="100" />
                                  <rect className="header" x="3" y="3" width="214" height="30" />
                                  <text className="title-text" x="110" y="23" textAnchor="middle">Konwersacja</text>
                                  <rect x="15" y="40" width="150" height="25" rx="5" fill="#e2e8f0" />
                                  <rect x="55" y="75" width="150" height="25" rx="5" fill="#4f46e5" />
                                </g>
                                <path className="arrow" d="M430 530 C 430 560, 530 560, 530 590" />
                                <text className="arrow-text" x="480" y="565">Wejdź</text>
                                
                                {/* Files Detail */}
                                 <g id="files-detail-group" transform="translate(820, 590)">
                                  <rect className="phone-border" width="220" height="100" />
                                  <rect className="header" x="3" y="3" width="214" height="30" />
                                  <text className="title-text" x="110" y="23" textAnchor="middle">Folder: Projekty</text>
                                   <text className="body-text" x="20" y="55"> projekt_glowny.pdf</text>
                                  <text className="body-text" x="20" y="75">️ rzut_parteru.png</text>
                                </g>
                                <path className="arrow" d="M700 530 C 700 560, 800 560, 800 590" />
                                <text className="arrow-text" x="750" y="565">Otwórz</text>
                              </g>
                            </svg>
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
