import React from 'react';
import Header from './Header';

interface DemoPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const DemoPageLayout: React.FC<DemoPageLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Demo Banner */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-8" role="alert">
            <p className="font-bold">Tryb Demonstracyjny</p>
            <p>To jest interaktywna makieta. Funkcje nie są w pełni zaimplementowane.</p>
          </div>
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          </div>

          {children}
        </div>
      </main>
    </div>
  );
};

export default DemoPageLayout;
