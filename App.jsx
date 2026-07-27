import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import EmployeeHeader from './components/EmployeeHeader';
import DashboardOverview from './components/DashboardOverview';
import EmployeeManagement from './components/EmployeeManagement';
import { Menu } from 'lucide-react';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans antialiased overflow-hidden">
      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div 
        className={`fixed inset-y-0 left-0 z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <Sidebar 
          onClose={() => setIsSidebarOpen(false)} 
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>

      <main className="flex-1 w-full px-4 md:px-8 pb-4 md:pb-8 pt-4 h-screen overflow-y-auto">
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600"
            >
              <Menu size={20} />
            </button>
            <h1 className="font-bold text-gray-800 text-lg">PROGRES</h1>
          </div>
        </div>

        {activePage === 'dashboard' ? (
          <>
            <DashboardHeader />
            <DashboardOverview />
          </>
        ) : (
          <>
            <EmployeeHeader />
            <EmployeeManagement />
          </>
        )}

      </main>
    </div>
  );
}