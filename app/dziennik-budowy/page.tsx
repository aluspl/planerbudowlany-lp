"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import DemoPageLayout from '../components/DemoPageLayout';

// Mock Data for Demo - in the future, this will be generated automatically
const mockLogEntries = [
  {
    date: '2025-10-03',
    weather: 'Słonecznie, 15°C, wiatr 5 km/h',
    personnel: '5 (Ekipa A), 3 (Ekipa B)',
    report: 'Zakończono wylewanie fundamentów. Rozpoczęto przygotowania do wznoszenia ścian parteru. Dostarczono pierwszą partię bloczków betonowych.',
    photos: ['/Cover.png', '/BoM.png'], // Using existing images as placeholders
  },
  {
    date: '2025-10-02',
    weather: 'Pochmurno, 12°C, wiatr 10 km/h',
    personnel: '4 (Ekipa A)',
    report: 'Kontynuowano prace przy zbrojeniu ław fundamentowych. Wykonano szalunki. Brak problemów.',
    photos: [],
  },
  {
    date: '2025-10-01',
    weather: 'Deszczowo, 10°C, wiatr 15 km/h',
    personnel: '5 (Ekipa A)',
    report: 'Rozpoczęto prace ziemne pod fundamenty. Usunięto humus. Wytyczono osie budynku.',
    photos: ['/background.png'],
  },
];

export default function DziennikBudowyPage() {
  const handleExport = () => {
    alert('Funkcja eksportu do PDF będzie dostępna w pełnej wersji aplikacji.');
  };

  return (
    <DemoPageLayout
      title="Dziennik Budowy"
      description="Automatycznie generowany dziennik budowy na podstawie postępów prac, wydatków i usterek.">
      <div className="flex justify-end items-center mb-8 -mt-16">
        <button onClick={handleExport} className="bg-gray-200 text-gray-700 font-semibold px-5 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300">
          Eksportuj do PDF
        </button>
      </div>

      {/* Log Entries List */}
      <div className="space-y-8">
        {mockLogEntries.map((entry, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{entry.date}</h2>
                <p className="text-sm text-gray-500 mt-1">{entry.weather}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-700">Obecni na budowie:</p>
                <p className="text-gray-600">{entry.personnel}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{entry.report}</p>
            {entry.photos.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700 mb-2">Dokumentacja fotograficzna:</h3>
                <div className="flex gap-4">
                  {entry.photos.map((photo, photoIndex) => (
                    <Image key={photoIndex} src={photo} alt={`Photo ${photoIndex + 1}`} width={150} height={100} className="rounded-md object-cover" />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </DemoPageLayout>
  );
}
