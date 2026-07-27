import { MoreHorizontal, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export default function DashboardOverview() {
  const projects = [
    { type: 'Design', title: 'Website', progress: 60, status: 'On Task' },
    { type: 'Development', title: 'Webflow sites', progress: 85, status: 'On Progres' },
  ];

  const employees = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: 'Handaru ravindra',
    divisi: 'UI/UX Design',
    tim: 'Task management',
  }));

  const days = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];
  const dates = [
    28, 29, 30, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 1
  ];

  return (
    <div className="flex flex-col gap-6">
      
      <div className="bg-[#f5f3ff] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="z-10 max-w-md">
          <p className="text-gray-500 text-sm mb-1">Welcome To</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Your Task Management Area</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Manage and monitor all your team's tasks efficiently in one place.
          </p>
        </div>
        <div className="mt-6 md:mt-0 z-10 w-48 h-32 bg-purple-200/50 rounded-xl flex items-center justify-center text-purple-700 text-xs font-bold border border-purple-200">
          [Ilustrasi Gambar]
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        <div className="xl:col-span-2 flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Project Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-purple-50 text-purple-700 text-[10px] font-bold px-3 py-1 rounded-full">
                      {proj.type}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{proj.title}</h4>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                    <span>Progress</span>
                    <span className="font-bold text-gray-700">{proj.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mb-5">
                    <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: `${proj.progress}%` }}></div>
                  </div>
                  <span className="bg-purple-700 text-white text-[10px] font-semibold px-4 py-1.5 rounded-full shadow-sm">
                    {proj.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-50">
              <h3 className="text-sm font-bold text-gray-800">List Karyawan</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#9f7aea] text-white text-xs">
                    <th className="py-3 px-5 font-medium">No</th>
                    <th className="py-3 px-5 font-medium">Nama karyawan</th>
                    <th className="py-3 px-5 font-medium">Devisi</th>
                    <th className="py-3 px-5 font-medium">Tim</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
                  {employees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-gray-50">
                      <td className="py-3 px-5">{emp.id}</td>
                      <td className="py-3 px-5 text-gray-800">{emp.name}</td>
                      <td className="py-3 px-5">{emp.divisi}</td>
                      <td className="py-3 px-5">{emp.tim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 flex flex-col gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800">Oktober 2025</h3>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-gray-50 rounded text-gray-600">
                  <ChevronLeft size={18} />
                </button>
                <button className="p-1 hover:bg-gray-50 rounded text-gray-600">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-y-4 mb-2 text-center text-[10px] font-semibold text-gray-400">
              {days.map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-y-4 text-center text-xs font-medium text-gray-700">
              {dates.map((date, idx) => {
                const isPurple = date === 13 || date === 16;
                const isDim = idx < 3 || idx > 33;
                return (
                  <div key={idx} className="flex justify-center items-center">
                    <span className={`w-7 h-7 flex items-center justify-center rounded-full ${
                      isPurple ? 'bg-purple-700 text-white shadow-md' : 
                      isDim ? 'text-gray-300' : 'hover:bg-gray-100 cursor-pointer'
                    }`}>
                      {date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-purple-800 text-sm">Tasks</h3>
              <button className="flex items-center space-x-1 border border-gray-200 rounded-lg px-3 py-1.5 text-[10px] text-gray-500 hover:bg-gray-50">
                <span>Weekly</span>
                <ChevronDown size={12} />
              </button>
            </div>
            
            <div className="relative h-40 w-full">
              <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-gray-300">
                <span>100</span><span>75</span><span>50</span><span>25</span><span>10</span>
              </div>
              <div className="absolute inset-0 left-6 border-b border-gray-100 flex items-end">
                <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <path d="M0,40 Q10,30 25,35 T50,25 T75,10 T100,30" fill="none" stroke="#7e22ce" strokeWidth="1.5" />
                  <path d="M0,45 Q15,45 25,48 T50,42 T75,40 T100,45" fill="none" stroke="#e9d5ff" strokeWidth="1" />
                  <line x1="75" y1="10" x2="75" y2="50" stroke="#fb923c" strokeWidth="0.5" />
                  <circle cx="75" cy="10" r="1.5" fill="none" stroke="#fb923c" strokeWidth="1" />
                  <text x="75" y="6" fontSize="3" fill="#6b7280" textAnchor="middle">72 Task</text>
                </svg>
              </div>
            </div>
            <div className="flex justify-between text-[9px] text-gray-400 mt-3 pl-6 pr-2">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}