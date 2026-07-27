import { Search, Bell, ChevronDown } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
      <div className="w-full md:w-auto">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>

      <div className="flex-1 w-full max-w-xl md:mx-4">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
            <Search size={18} />
          </span>
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-white border border-gray-200 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-purple-500 shadow-sm transition-all"
          />
        </div>
      </div>

      <div className="flex items-center justify-between w-full md:w-auto md:space-x-6 bg-white md:bg-transparent px-4 py-2 md:p-0 rounded-2xl border md:border-none border-gray-100 shadow-sm md:shadow-none">
        <button className="text-gray-500 hover:text-purple-600 transition-colors hidden md:block">
          <Bell size={20} />
        </button>
        
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src="https://ui-avatars.com/api/?name=Admin&background=E9D5FF&color=6B21A8" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-800">Admin</span>
            <span className="text-[10px] text-gray-400">admin@gmail.com</span>
          </div>
          <ChevronDown size={16} className="text-gray-500 ml-1" />
        </div>
      </div>
    </header>
  );
}