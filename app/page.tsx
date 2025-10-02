"use client";

import 'react';
import { useState } from 'react';
import { addToMailingList } from '../lib/mailingListService';
import Image from 'next/image';

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
        <div className="bg-white">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="#" className="flex items-center space-x-2">
                            <Image src="/file.svg" alt="PlanBudowlany Logo" width={40} height={40} />
                            <span className="text-2xl font-bold text-gray-800">PlanBudowlany</span>
                        </a>
                        
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#features" className="text-gray-600 hover:text-indigo-600">Funkcje</a>
                            <a href="#zapisz-sie" className="text-gray-600 hover:text-indigo-600">Zapisz się</a>
                        </nav>

                        <div className="flex items-center">
                            <a href="#zapisz-sie" className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                Otrzymaj Dostęp
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <section className="relative hero-gradient pt-24 pb-20 sm:pt-32 sm:pb-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-indigo-600 font-semibold">JUŻ WKRÓTCE</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 leading-tight">
                            Zarządzaj budową, a nie chaosem.
                        </h1>
                        <div className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                            PlanBudowlany to proste narzędzie, które gromadzi wszystkie zadania, plany, kosztorysy i komunikację w jednym, uporządkowanym miejscu. Koniec z setkami maili i nieporozumień.
                        </div>
                        <div className="mt-10">
                            <a href="#features" className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg">
                                Dowiedz się więcej
                            </a>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Wszystko, czego potrzebujesz, w jednym miejscu</h2>
                            <p className="mt-4 text-lg text-gray-600">Od planowania, przez komunikację, aż po raportowanie.</p>
                        </div>
                        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Feature 1 */}
                            <div className="text-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 mx-auto">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-gray-900">Inteligentne Zadania</h3>
                                <p className="mt-2 text-base text-gray-600">Twórz listy zadań, przypisuj osoby i śledź postępy w czasie rzeczywistym. Koniec z zapomnianymi terminami.</p>
                            </div>
                            {/* Feature 2 */}
                            <div className="text-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 mx-auto">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-gray-900">Spójna Komunikacja</h3>
                                <p className="mt-2 text-base text-gray-600">Dedykowane kanały czatu dla każdego projektu. Wszystkie ustalenia i decyzje w jednym, łatwym do znalezienia miejscu.</p>
                            </div>
                            {/* Feature 3 */}
                            <div className="text-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 mx-auto">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-gray-900">Kontrola nad Kosztami</h3>
                                <p className="mt-2 text-base text-gray-600">Importuj i zarządzaj kosztorysami. Oznaczaj pozycje jako kupione i miej pełny wgląd w finanse projektu.</p>
                            </div>
                            {/* Feature 4 */}
                            <div className="text-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 mx-auto">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-gray-900">Dostęp do Dokumentów</h3>
                                <p className="mt-2 text-base text-gray-600">Integracja z Google Drive pozwala na łatwy dostęp do wszystkich projektów, umów i planów dla całego zespołu.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="zapisz-sie" className="bg-gray-50 py-20">
                    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Bądź na bieżąco!</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Zapisz się na listę oczekujących, a poinformujemy Cię jako pierwszego i damy specjalną ofertę na start!
                        </p>
                        <div className="mt-10">
                            {message && (
                                <div className="rounded-md bg-green-50 p-4 mb-4">
                                    <p className="text-sm font-medium text-green-800">{message}</p>
                                </div>
                            )}
                            {error && (
                                <div className="rounded-md bg-red-50 p-4 mb-4">
                                    <p className="text-sm font-medium text-red-800">{error}</p>
                                </div>
                            )}
                            {!message && (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="w-full">
                                        <label htmlFor="name-cta" className="sr-only">Imię</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name-cta"
                                            autoComplete="name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            placeholder="Wpisz swoje imię"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="email-address-cta" className="sr-only">Adres email</label>
                                        <input
                                            type="email"
                                            name="email-address"
                                            id="email-address-cta"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            placeholder="Wpisz swój adres e-mail"
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Powiadom mnie</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-gray-800">
                <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-base text-gray-400">&copy; 2025 PlanBudowlany. Wszelkie prawa zastrzeżone.</p>
                </div>
            </footer>
        </div>
    );
}