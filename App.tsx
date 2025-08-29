
import React, { useState } from 'react';
import Calendar from './components/Calendar';

const App: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2025-01-01'));

  const handleSetToday = () => {
    // Note: This will set to today's actual date, but since the data is for 2025,
    // we will reset it to January 2025 for demonstration purposes.
    setCurrentDate(new Date('2025-01-01'));
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };


  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-600">Personel İzin Takvimi 2025</h1>
          <p className="text-lg text-gray-500 mt-2">İzinleri ve resmi tatilleri görüntüleyin.</p>
        </header>
        <main>
           <Calendar 
              currentDate={currentDate}
              onSetToday={handleSetToday}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
            />
        </main>
        <footer className="text-center mt-12 text-gray-400">
          <p> savsek.com.tr için oluşturulmuştur.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
