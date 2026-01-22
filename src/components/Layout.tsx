import { Link, Outlet } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600">
            <BrainCircuit className="h-6 w-6" />
            <span>NeuralCatalog</span>
          </Link>
          <nav className="flex gap-6">
            <Link to="/courses" className="text-sm font-medium hover:text-indigo-600">Catalog</Link>
            {/* <Link to="/admin/courses" className="text-sm font-medium text-slate-500 hover:text-indigo-600">Admin</Link> */}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} NeuralCatalog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
