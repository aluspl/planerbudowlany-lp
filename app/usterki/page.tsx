"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import DemoPageLayout from '../components/DemoPageLayout';

// Mock Data for Demo
const mockDefects = [
  {
    id: 1,
    title: 'Rysa na ścianie',
    status: 'Nowe',
    contractor: 'Ekipa Malarska',
    photo: '/Cover.png', // Placeholder image
    position: { top: '25%', left: '50%' }
  },
  {
    id: 2,
    title: 'Źle zamontowane gniazdko',
    status: 'W trakcie',
    contractor: 'Elektryk',
    photo: '/BoM.png', // Placeholder image
    position: { top: '60%', left: '30%' }
  },
  {
    id: 3,
    title: 'Uszkodzony panel podłogowy',
    status: 'Zakończone',
    contractor: 'Ekipa Wykończeniowa',
    photo: '/background.png', // Placeholder image
    position: { top: '75%', left: '70%' }
  }
];

export default function SnaggingPage() {
  const [selectedDefect, setSelectedDefect] = useState<any>(null);

  const handleAddDefectClick = () => {
    alert('W pełnej wersji aplikacji, w tym miejscu mógłbyś kliknąć na plan, aby dodać nową usterkę.');
  };

  return (
    <DemoPageLayout title="Zgłaszanie Usterek">
      <div className="flex justify-end items-center mb-8 -mt-16">
        <button onClick={handleAddDefectClick} className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          + Dodaj usterkę
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Interactive Plan */}
        <motion.div 
          className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Rzut Parteru - Budynek A</h2>
          <div className="relative w-full h-[600px] bg-gray-100 rounded-md">
            <Image src="/Plan.png" alt="Rzut budynku" layout="fill" className="object-contain" />
            {mockDefects.map(defect => (
              <button 
                key={defect.id}
                className="absolute w-6 h-6 rounded-full bg-red-500 border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: defect.position.top, left: defect.position.left }}
                onClick={() => setSelectedDefect(defect)}
                aria-label={`Pokaż usterkę: ${defect.title}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Defect Details */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-28">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Szczegóły usterki</h2>
            <AnimatePresence>
              {selectedDefect ? (
                <motion.div
                  key={selectedDefect.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{selectedDefect.title}</h3>
                  <div className="mt-2">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      selectedDefect.status === 'Nowe' ? 'bg-blue-100 text-blue-800' :
                      selectedDefect.status === 'W trakcie' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {selectedDefect.status}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">Wykonawca: <span className="font-medium text-gray-800">{selectedDefect.contractor}</span></p>
                  <div className="mt-4 w-full h-48 relative rounded-md overflow-hidden">
                    <Image src={selectedDefect.photo} alt={selectedDefect.title} layout="fill" className="object-cover" />
                  </div>
                  <button onClick={() => setSelectedDefect(null)} className="mt-6 w-full text-center bg-gray-200 text-gray-700 font-semibold px-5 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                    Zamknij
                  </button>
                </motion.div>
              ) : (
                <div className="text-center text-gray-500 py-16">
                  <p>Kliknij na pinezkę na planie, aby zobaczyć szczegóły usterki.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </DemoPageLayout>
  );
}
