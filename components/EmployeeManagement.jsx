import { Search, ChevronDown, Plus, Pencil, Trash2 } from 'lucide-react';

export default function EmployeeManagement() {
  const employees = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: "Handaru Ravindra",
    email: "rahandaru@gmail.com",
    division: "Software Engineer",
  }));

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Data Karyawan</h2>
      </div>

      <div className="bg-white rounded-3xl p-4 md:p-6 border border-gray-100 shadow-sm">
        
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full xl:w-auto gap-3">
            <div className="relative w-full sm:w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Search size={16} />
              </span>
              <input 
                type="text" 
                placeholder="Search .." 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
            
            <div className="flex w-full sm:w-auto gap-3">
              <button className="flex-1 sm:flex-none flex items-center justify-between w-full sm:w-40 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-xs text-gray-600 hover:bg-gray-100 transition-colors">
                <span>Nama Karyawan</span>
                <ChevronDown size={14} />
              </button>
              <button className="flex items-center justify-between w-20 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-xs text-gray-600 hover:bg-gray-100 transition-colors">
                <span>10</span>
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          <button className="w-full xl:w-auto bg-purple-700 hover:bg-purple-800 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-purple-200 flex items-center justify-center space-x-2 transition-all">
            <Plus size={16} strokeWidth={3} />
            <span>Tambah</span>
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-left border-collapse min-w-700px">
            <thead>
              <tr className="bg-purple-700 text-white text-xs">
                <th className="py-3 px-4 font-semibold rounded-tl-xl whitespace-nowrap">No</th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">Nama karyawan</th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">Email</th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">Devisi</th>
                <th className="py-3 px-4 font-semibold text-center rounded-tr-xl whitespace-nowrap">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">{emp.id}</td>
                  <td className="py-3 px-4 font-medium text-gray-800">{emp.name}</td>
                  <td className="py-3 px-4 text-gray-500">{emp.email}</td>
                  <td className="py-3 px-4">{emp.division}</td>
                  <td className="py-3 px-4 flex justify-center items-center space-x-3">
                    <button className="text-gray-400 hover:text-purple-600 transition-colors">
                      <Pencil size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end items-center mt-6 gap-2 text-xs">
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">Previous</button>
          <button className="px-3 py-1.5 bg-purple-700 text-white rounded-lg font-medium shadow-sm">1</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">2</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">3</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">Next</button>
        </div>

      </div>
    </div>
  );
}