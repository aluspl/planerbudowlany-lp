"use client";

import { motion } from 'framer-motion';
import DemoPageLayout from '../components/DemoPageLayout';

// Mock Data for Demo
const mockBudgetItems = [
  {
    name: 'Beton B25',
    category: 'Materiały',
    planned: '15 000 PLN',
    actual: '15 500 PLN',
    status: 'Przekroczono',
  },
  {
    name: 'Stal zbrojeniowa',
    category: 'Materiały',
    planned: '25 000 PLN',
    actual: '24 800 PLN',
    status: 'Kupione',
  },
  {
    name: 'Robocizna - fundamenty',
    category: 'Usługi',
    planned: '30 000 PLN',
    actual: '30 000 PLN',
    status: 'Zakończone',
  },
  {
    name: 'Okna PVC',
    category: 'Stolarka',
    planned: '18 000 PLN',
    actual: '---',
    status: 'Zaplanowane',
  },
  {
    name: 'Instalacja elektryczna',
    category: 'Instalacje',
    planned: '12 000 PLN',
    actual: '---',
    status: 'Zaplanowane',
  }
];

const totalPlanned = 100000;
const totalActual = 70300;

export default function BudgetPage() {

  const handleActionClick = () => {
    alert('Ta funkcja będzie dostępna w pełnej wersji aplikacji.');
  };

  return (
    <DemoPageLayout title="Zarządzanie Budżetem">
      <div className="flex justify-end items-center mb-8 -mt-16">
        <button onClick={handleActionClick} className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          Importuj kosztorys
        </button>
      </div>

      {/* Budget Visualization */}
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Podsumowanie budżetu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600">Koszt planowany:</p>
            <p className="text-3xl font-bold text-gray-900">{totalPlanned.toLocaleString('pl-PL')} PLN</p>
          </div>
          <div>
            <p className="text-lg text-gray-600">Koszt rzeczywisty:</p>
            <p className="text-3xl font-bold text-indigo-600">{totalActual.toLocaleString('pl-PL')} PLN</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-1">Postęp wydatków</p>
          <div className="bg-gray-200 rounded-full h-4">
            <div 
              className="bg-indigo-600 h-4 rounded-full" 
              style={{ width: `${(totalActual / totalPlanned) * 100}%` }}
            ></div>
          </div>
        </div>
      </motion.div>

      {/* Budget Items Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nazwa</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategoria</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rzeczywisty</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Akcje</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockBudgetItems.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.planned}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.actual}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.status === 'Przekroczono' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">{item.status}</span>}
                  {item.status === 'Kupione' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{item.status}</span>}
                  {item.status === 'Zakończone' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{item.status}</span>}
                  {item.status === 'Zaplanowane' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">{item.status}</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={handleActionClick} className="text-indigo-600 hover:text-indigo-900">Zarządzaj</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DemoPageLayout>
  );
}
