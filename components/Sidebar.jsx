import { 
  Gauge, 
  List, 
  UserCircle, 
  CalendarDays, 
  BarChart2, 
  Users, 
  Network, 
  Settings,
  X
} from 'lucide-react';

export default function Sidebar({ onClose, activePage, setActivePage }) {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-6 h-full min-h-screen">
      <div>
        <div className="flex items-center justify-between mb-5">
          <img 
            src="/sidebarkiri.svg" 
            alt="Logo Progres" 
            className="w-154px h-55px object-contain" 
          />
          <button onClick={onClose} className="lg:hidden p-1 text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-1">
          <NavItem 
            Icon={Gauge} 
            label="Dashboard" 
            active={activePage === 'dashboard'} 
            onClick={() => setActivePage('dashboard')}
          />
          <NavItem 
            Icon={List} 
            label="List Karyawan" 
          />
          <NavItem 
            Icon={UserCircle} 
            label="Kelola Data Karyawan" 
            active={activePage === 'kelola-karyawan'} 
            onClick={() => setActivePage('kelola-karyawan')}
          />
          <NavItem Icon={CalendarDays} label="Kalender" />
          <NavItem Icon={BarChart2} label="Kelola Proyek" />
          <NavItem Icon={Users} label="Kelola Divisi" />
          <NavItem Icon={Network} label="Kelola Tim" />
        </nav>
      </div>

      <div>
        <NavItem Icon={Settings} label="Pengaturan" />
      </div>
    </aside>
  );
}

function NavItem({ Icon, label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
        active 
          ? 'bg-purple-50 text-purple-700 font-semibold' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <Icon size={20} strokeWidth={active ? 2.5 : 2} />
      <span>{label}</span>
    </button>
  );
}