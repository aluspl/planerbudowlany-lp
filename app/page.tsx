"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { addToMailingList } from '../lib/mailingListService';
import Header from './components/Header';
import Image from 'next/image';
import LazyImage from './components/LazyImage';
const dashboardFull = '/screenshots/dashboard.png';
const dashboardDark = '/screenshots/dashboard.png';
const kanban = '/screenshots/kanban.png';
const kanbanDark = '/screenshots/kanban.png';
const tasksList = '/screenshots/tasks.png';
const templates = '/screenshots/onboarding.png';
import { logCtaClick, logFormSuccess, logLinkClick } from '../lib/analytics';

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

interface Feature {
  name: string;
  description: string;
  icon: string;
  href?: string;
}

// Feature card data
const features: Feature[] = [
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
    name: 'Cyfrowy Dziennik Budowy',
    description: 'Prowadź oficjalny zapis prac z autom. danymi pogodowymi i eksportem do PDF.',
    icon: '/background.png',
    href: '/dziennik-budowy'
  },
  {
    name: 'Pełna Kontrola nad Budżetem',
    description: 'Śledź koszty rzeczywiste vs. planowane, dołączaj faktury i wizualizuj wydatki.',
    icon: '/Banner.png',
    href: '/budzet'
  },
  {
    name: 'Wizualne Zgłaszanie Usterek',
    description: 'Zgłaszaj usterki "pinezką" na rzucie budynku, automatycznie tworząc zadania dla ekip.',
    icon: '/background.png',
    href: '/usterki'
  }
];

export default function LandingPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // removed lightbox interactivity - images are static

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !name) {
            setError('Imię i adres e-mail są wymagane.');
            return;
        }
        if (!consent) {
            setError('Musisz wyrazić zgodę na przetwarzanie danych.');
            return;
        }
        setError('');
        setMessage('');

        try {
            await addToMailingList(email, name);
            setMessage('Dziękujemy! Zostałeś zapisany na listę.');
            logFormSuccess(); // Log analytics event
            setEmail('');
            setName('');
            setConsent(false);
        } catch (err: any) {
            setError(err.message || 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie.');
        }
    };

        // no lightbox behaviour anymore

        // screenshots fetched from API
        const [screenshotList, setScreenshotList] = useState<string[]>([]);
        const [heroImage, setHeroImage] = useState<string>(dashboardFull);
        useEffect(() => {
            fetch('/api/screenshots').then(r => r.json()).then((data) => {
                if (data && data.images) {
                    // limit to first 6 screenshots
                    const imgs: string[] = (data.images || []).slice(0, 6);
                    setScreenshotList(imgs);
                    // pick hero: prefer filenames with 'dashboard' or 'full' or '8' within the limited set
                      const findPrefer = (keywords: string[]) => imgs.find(s => keywords.some(k => s.toLowerCase().includes(k)));
                      const pick = findPrefer(['dashboard', 'full']) || findPrefer(['8']) || imgs[0] || '';
                    setHeroImage(pick);
                }
            }).catch(() => {});
        }, []);

    return (
        <div className="min-h-screen text-gray-800 overflow-x-hidden bg-white">
            <Header />

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
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 text-center lg:text-left">
                        <motion.h1 
                                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            Masz dość chaosu na budowie? Odzyskaj kontrolę.
                        </motion.h1>
                            <motion.p 
                                className="mt-6 max-w-3xl mx-auto lg:mx-0 text-lg text-gray-600"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            PlanBudowlany to Twoje jedno źródło prawdy. Gromadzi wszystkie zadania, plany, koszty i rozmowy w jednym miejscu, dając Ci spokój i pewność na każdym etapie. Koniec z setkami maili i nieporozumień.
                        </motion.p>
                        <motion.div 
                            className="mt-10"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <a href="#zapisz-sie" onClick={() => logCtaClick('hero_learn_more')} className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
                                Chcę odzyskać spokój
                            </a>
                        </motion.div>
                        
                        {/* empty div to keep spacing on small screens */}
                        <div className="hidden lg:block" />
                    
                    {/* Right column: hero screenshot (visible on all sizes) */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-[720px] rounded-2xl shadow-2xl overflow-hidden">
                            <LazyImage src={heroImage} alt="Dashboard preview" width={1280} height={720} className="object-cover w-full h-auto" />
                        </div>
                    </div>
                    </div>
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
                            <h2 className="text-4xl font-bold text-gray-900">Kompleksowe narzędzie do zarządzania budową</h2>
                            <p className="mt-4 text-lg text-gray-600">Od harmonogramu i budżetu, przez dziennik budowy, aż po odbiór końcowy.</p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature, index) => {
                                const card = (
                                    <motion.div
                                        className="relative rounded-2xl shadow-lg overflow-hidden flex flex-col justify-end text-center p-8 min-h-[384px] text-white h-full"
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
                                );

                                if (feature.href) {
                                    return (
                                        <a href={feature.href} key={index} className="block h-full">
                                            {card}
                                        </a>
                                    );
                                }
                                
                                return <div key={index}>{card}</div>;
                            })}
                        </div>
                    </div>
                </motion.section>

                {/* Demo Section */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-gray-900">Zobacz Aplikację w Akcji</h2>
                        <motion.div 
                            className="mt-10 flex justify-center gap-4"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <a href="/demo" onClick={() => logCtaClick('cta_see_demo')} className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
                                Zobacz Demo
                            </a>
                            <a href="/dziennik-budowy" onClick={() => logCtaClick('cta_see_dziennik')} className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
                                Dziennik Budowy
                            </a>
                            <a href="/usterki" onClick={() => logCtaClick('cta_see_usterki')} className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
                                Zgłaszanie Usterek
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Screenshots Gallery */}
                <section id="screenshots" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">Galeria ekranu</h2>
                            <p className="mt-2 text-gray-600">Kilka zrzutów ekranu pokazujących główne widoki aplikacji (jasny i ciemny motyw).</p>
                        </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                      {screenshotList.filter(s => s !== heroImage).map((src) => (
                                                        <div key={src} className="rounded-lg overflow-hidden shadow-md">
                                                            <LazyImage src={src} alt={src} width={1200} height={700} className="w-full h-auto object-cover" />
                                                        </div>
                                                    ))}
                                                </div>
                    </div>
                </section>

                {/* tu beda komentarze, po testach mvp
                <motion.section
                    id="social-proof"
                    className="py-20 bg-gray-50"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">Dowody, nie obietnice</h2>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                            <motion.div className="bg-white p-8 rounded-2xl shadow-md" variants={itemVariants}>
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                                    <div>
                                        <p className="font-bold">Jan Kowalski</p>
                                        <p className="text-sm text-gray-500">Inwestor, budowa domu</p>
                                    </div>
                                </div>
                                <p className="text-base text-gray-600">"Ta aplikacja to ratunek. Wcześniej miałem wszystko w setkach maili i SMS-ów. Teraz mam porządek i wiem, co się dzieje na budowie."</p>
                            </motion.div>
                            <motion.div className="bg-white p-8 rounded-2xl shadow-md" variants={itemVariants}>
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                                    <div>
                                        <p className="font-bold">Anna Nowak</p>
                                        <p className="text-sm text-gray-500">Architekt</p>
                                    </div>
                                </div>
                                <p className="text-base text-gray-600">"Genialne narzędzie do komunikacji z klientem i wykonawcami. Wreszcie wszystko jest w jednym miejscu, a ja mam więcej czasu na projektowanie."</p>
                            </motion.div>
                            <motion.div className="bg-white p-8 rounded-2xl shadow-md" variants={itemVariants}>
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                                    <div>
                                        <p className="font-bold">Piotr Wiśniewski</p>
                                        <p className="text-sm text-gray-500">Kierownik budowy</p>
                                    </div>
                                </div>
                                <p className="text-base text-gray-600">"PlanBudowlany oszczędza mi kilka godzin tygodniowo. Zgłaszanie usterek i raportowanie postępów jest teraz banalnie proste."</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
                */}


                {/* About Author Section */}
                <motion.section
                    id="about-author"
                    className="py-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                                <div className="md:col-span-1 flex justify-center">
                                    <LazyImage src="/me.png" alt="Szymon Motyka" width={192} height={192} className="rounded-full" />
                                </div>
                            <div className="md:col-span-2">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cześć, tu Szymon!</h2>
                                <p className="text-lg text-gray-600">Jestem programistą, nerdem i DevOps-em, który z pasji do rozwiązywania realnych problemów stworzył to narzędzie. Wierzę, że technologia powinna ułatwiać życie, a nie je komplikować. Dlatego PlanBudowlany jest prosty, intuicyjny i skuteczny. Obecnie sam jestem na etapie chaosu budowlanego, co zainspirowało mnie do stworzenia tego produktu.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Mailing List Section */}
                <motion.section 
                    id="zapisz-sie" 
                    className="py-20 bg-indigo-700"
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
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="consent"
                                            name="consent"
                                            type="checkbox"
                                            checked={consent}
                                            onChange={(e) => setConsent(e.target.checked)}
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="consent" className="text-gray-500">
                                            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu otrzymywania informacji o produkcie.
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={!consent}
                                    className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    Chcę odzyskać spokój
                                </button>
                            </form>
                            {message && <p className="mt-4 text-center text-green-600">{message}</p>}
                            {error && <p className="mt-4 text-center text-red-600">{error}</p>}
                        </motion.div>
                    </div>
                </motion.section>
            </main>

            <footer className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <div className="flex items-center gap-3">
                            <img src="/favicon.svg" alt="logo" className="h-8 w-8" />
                            <p className="text-gray-400">&copy; {new Date().getFullYear()} PlanerBudowlany</p>
                        </div>

                        <div>
                            <a href="/demo" onClick={() => logLinkClick('/demo')} className="text-indigo-300 hover:text-white font-medium mr-4">Zobacz Demo</a>
                            <a href="https://planbudowlany.online" onClick={() => logLinkClick('https://planbudowlany.online')} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">Strona główna</a>
                        </div>

                        <p className="text-sm text-gray-500 mt-2 md:mt-0">
                            Projekt stworzony przez <a href="https://lifelike.cloud/" onClick={() => logLinkClick('https://lifelike.cloud/')} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Lifelike</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
