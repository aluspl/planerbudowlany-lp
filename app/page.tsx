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