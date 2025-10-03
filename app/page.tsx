"use client";

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { addToMailingList } from '../lib/mailingListService';
import Logo from './components/Logo';
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

const cardHover = {
  scale: 1.05,
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 },
};

// Feature card data
const features = [
  {
    name: 'Planowanie i harmonogramowanie',
    description: 'Twórz szczegółowe harmonogramy, przypisuj zadania i śledź postępy w czasie rzeczywistym.',
    icon: '/Plan.png',
  },
  {
    name: 'Zarządzanie materiałami (BoM)',
    description: 'Automatycznie generuj listy materiałów, zarządzaj zamówieniami i kontroluj koszty.',
    icon: '/BoM.png',
  },
  {
    name: 'Komunikacja w zespole',
    description: 'Wbudowany czat i system powiadomień, aby wszyscy byli na bieżąco.',
    icon: '/Chats.png',
  },
  {
    name: 'Chmura na pliki',
    description: 'Przechowuj i udostępniaj wszystkie swoje pliki projektowe w jednym, bezpiecznym miejscu.',
    icon: '/Cloud.png'
  }
];

export default function LandingPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !name) {
            setError('Imię i adres e-mail są wymagane.');
            return;
        }
        setError('');
        setMessage('');

        try {
            await addToMailingList(email, name);
            setMessage('Dziękujemy! Zostałeś zapisany na listę.');
            setEmail('');
            setName('');
        } catch (err: any) {
            setError(err.message || 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie.');
        }
    };

    return (
        <div className="min-h-screen text-gray-800 overflow-x-hidden bg-white">
            {/* Header */}
            <motion.header 
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <a href="#" className="flex items-center h-full">
                            <Logo />
                        </a>
                        <a href="#zapisz-sie" className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                            Otrzymaj Dostęp
                        </a>
                    </div>
                </div>
            </motion.header>

            {/* Main Content */}
            <main className="pt-20">
                {/* Hero Section */}
                <section 
                    className="relative flex items-center justify-center h-[calc(100vh-80px)]"
                >
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `url('/background.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}></div>
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div variants={itemVariants} initial="hidden" animate="visible">
                            <p className="font-semibold text-indigo-600 tracking-wider mb-4">JUŻ WKRÓTCE</p>
                        </motion.div>
                        <motion.h1 
                            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            Zarządzaj budową, a nie chaosem.
                        </motion.h1>
                        <motion.p 
                            className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            PlanBudowlany to proste narzędzie, które gromadzi wszystkie zadania, plany, kosztorysy i komunikację w jednym, uporządkowanym miejscu. Koniec z setkami maili i nieporozumień.
                        </motion.p>
                        <motion.div 
                            className="mt-10"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <a href="#features" className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
                                Dowiedz się więcej
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <motion.section 
                    id="features" 
                    className="py-20 bg-gray-50"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">Wszystko, czego potrzebujesz, w jednym miejscu</h2>
                            <p className="mt-4 text-lg text-gray-600">Od planowania, przez komunikację, aż po raportowanie.</p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="relative rounded-2xl shadow-lg overflow-hidden flex flex-col justify-end text-center p-8 min-h-[384px] text-white"
                                    variants={itemVariants}
                                    whileHover={cardHover}
                                >
                                    <Image
                                        src={feature.icon}
                                        alt={feature.name}
                                        layout="fill"
                                        className="object-cover z-0"
                                    />
                                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                                    <div className="relative z-20">
                                        <h3 className="text-2xl font-bold mb-3">{feature.name}</h3>
                                        <p className="text-gray-200 text-lg">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

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

                {/* AI Features Section */}
                <motion.section 
                    id="ai-features" 
                    className="py-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">Inteligentne Funkcje</h2>
                            <p className="mt-4 text-lg text-gray-600">Odkryj moc sztucznej inteligencji w zarządzaniu budową.</p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                            <motion.div className="bg-white p-8 rounded-2xl shadow-md" variants={itemVariants}>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Automatyczne Raporty</h3>
                                <p className="text-base text-gray-600">Oszczędzaj godziny na papierkowej robocie. Nasza AI przygotuje tygodniowe raporty z postępu prac za Ciebie.</p>
                            </motion.div>
                            <motion.div className="bg-white p-8 rounded-2xl shadow-md" variants={itemVariants}>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Inteligentne Dzielenie Zadań</h3>
                                <p className="text-base text-gray-600">Zamień jedno duże zadanie w gotową checklistę dla Twojej ekipy jednym kliknięciem.</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Integrations Section */}
                <motion.section 
                    id="integrations" 
                    className="py-20 bg-gray-50"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">Integracje, które ułatwiają życie</h2>
                            <p className="mt-4 text-lg text-gray-600">Ludzie uwielbiają narzędzia, które współpracują z tym, czego już używają.</p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3 text-center max-w-5xl mx-auto">
                            <motion.div variants={itemVariants}>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Google Drive</h3>
                                <p className="text-base text-gray-600">Wszystkie Twoje pliki i projekty w jednym miejscu dzięki synchronizacji z Google Drive.</p>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Google Calendar</h3>
                                <p className="text-base text-gray-600">Terminy z budowy automatycznie w Twoim kalendarzu.</p>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">WhatsApp</h3>
                                <p className="text-base text-gray-600">Komunikuj się z wykonawcami tak, jak lubią – bezpośrednio przez WhatsApp, a wszystko i tak zapisze się w aplikacji.</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Target Audience Section */}
                <motion.section 
                    id="target-audience" 
                    className="py-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">Idealne rozwiązanie dla:</h2>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3 text-center max-w-5xl mx-auto">
                            <motion.div className="bg-white p-8 rounded-2xl shadow-md" variants={itemVariants}>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Inwestorów</h3>
                                <p className="text-base text-gray-600">Pełna kontrola nad postępem i finansami, nawet zdalnie.</p>
                            </motion.div>
                            <motion.div className="bg-white p-8 rounded-2xl shadow-md" variants={itemVariants}>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Wykonawców i Ekip</h3>
                                <p className="text-base text-gray-600">Koniec z nieporozumieniami. Wszystkie zadania i plany w jednym miejscu, dostępne w telefonie.</p>
                            </motion.div>
                            <motion.div className="bg-white p-8 rounded-2xl shadow-md" variants={itemVariants}>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Architektów</h3>
                                <p className="text-base text-gray-600">Łatwa współpraca i szybkie udostępnianie projektów wszystkim stronom.</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Mobile App Section */}
                <motion.section 
                    id="mobile-app" 
                    className="py-20 bg-gray-50"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Pracuj wygodnie z dowolnego miejsca</h2>
                            <p className="mt-4 text-lg text-gray-600">Dzięki dedykowanej aplikacji mobilnej na iOS i Android.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Mailing List Section */}
                <motion.section 
                    id="zapisz-sie" 
                    className="py-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg" variants={itemVariants}>
                            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Bądź na bieżąco!</h2>
                            <p className="text-center text-gray-600 mb-8">Zapisz się, aby otrzymać wczesny dostęp i informacje o rozwoju aplikacji.</p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Imię</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Twoje imię"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Twój adres e-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Zapisz mnie!
                                </button>
                            </form>
                            {message && <p className="mt-4 text-center text-green-600">{message}</p>}
                            {error && <p className="mt-4 text-center text-red-600">{error}</p>}
                        </motion.div>
                    </div>
                </motion.section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} PlanerBudowlany. Wszelkie prawa zastrzeżone.</p>
                </div>
            </footer>
        </div>
    );
}