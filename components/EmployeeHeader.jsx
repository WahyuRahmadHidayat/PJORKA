import { Search, Mic } from 'lucide-react';

export default function EmployeeHeader() {
  return (
    <header className="flex flex-col-reverse md:flex-row md:justify-between md:items-center mb-8 gap-4">
      <div className="relative w-full md:w-96">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
          <Search size={18} />
        </span>
        <input 
          type="text" 
          placeholder="Search .." 
          className="w-full bg-white border border-gray-200 rounded-full py-2.5 pl-11 pr-10 text-sm focus:outline-none focus:border-purple-500 shadow-sm transition-all"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-purple-600">
          <Mic size={18} />
        </span>
      </div>

      <div className="flex items-center justify-end w-full md:w-auto space-x-3 bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm">
        <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600 text-sm">
          AK
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-800">Altheo Kiandra</h4>
          <p className="text-[10px] text-gray-400">Admin</p>
        </div>
      </div>
    </header>
  );
}