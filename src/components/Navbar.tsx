import React, { useState } from 'react';
import { ViewState } from '../types';
import { 
  Sun, 
  Moon, 
  Gamepad2, 
  Home, 
  History, 
  Menu, 
  X, 
  Flame, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  orderCount: number;
  onOpenHistory: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  isDark,
  onToggleTheme,
  orderCount,
  onOpenHistory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: ViewState) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-300 bg-slate-900/85 border-slate-800 text-slate-100 dark:bg-slate-950/85 dark:border-slate-800/80 light:bg-white/90 light:border-slate-200 light:text-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 dark:from-blue-400 dark:to-cyan-300 light:from-indigo-600 light:to-blue-600">
                  KENOS STORE
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  OFFICIAL
                </span>
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
                Top Up Game & Digital Store
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNav('home')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                currentView === 'home'
                  ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60 dark:text-slate-300 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNav('freefire')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                currentView === 'freefire'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60 dark:text-slate-300 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100'
              }`}
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Free Fire</span>
            </button>

            <button
              onClick={() => handleNav('roblox')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                currentView === 'roblox'
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60 dark:text-slate-300 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>Roblox</span>
            </button>

            <button
              onClick={onOpenHistory}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 dark:text-slate-300 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100 transition-all duration-200"
            >
              <History className="w-4 h-4 text-cyan-400" />
              <span>Riwayat Pesanan</span>
              {orderCount > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold bg-indigo-600 text-white rounded-full">
                  {orderCount}
                </span>
              )}
            </button>

            {/* Dark / Light Toggle */}
            <div className="h-6 w-px bg-slate-700/60 mx-1"></div>
            
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-slate-700/50 bg-slate-800/50 hover:bg-slate-700/60 text-amber-400 dark:text-amber-300 light:text-slate-700 light:bg-slate-100 light:border-slate-300 light:hover:bg-slate-200 transition-colors shadow-sm"
              title={isDark ? 'Ganti ke Light Mode' : 'Ganti ke Dark Mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-slate-700/50 bg-slate-800/50 text-amber-400 light:bg-slate-100 light:border-slate-300 light:text-slate-700"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-700/50 bg-slate-800/50 text-slate-200 light:bg-slate-100 light:border-slate-300 light:text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-900/95 dark:bg-slate-950/95 light:bg-white light:border-slate-200 px-4 pt-2 pb-4 space-y-2 animate-in slide-in-from-top-2">
          <button
            onClick={() => handleNav('home')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold ${
              currentView === 'home'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/50'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>

          <button
            onClick={() => handleNav('freefire')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold ${
              currentView === 'freefire'
                ? 'bg-amber-600 text-white'
                : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/50'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Free Fire Top Up</span>
          </button>

          <button
            onClick={() => handleNav('roblox')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold ${
              currentView === 'roblox'
                ? 'bg-rose-600 text-white'
                : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>Roblox Top Up</span>
          </button>

          <button
            onClick={() => {
              onOpenHistory();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/50"
          >
            <div className="flex items-center gap-3">
              <History className="w-4 h-4 text-cyan-400" />
              <span>Riwayat Pesanan</span>
            </div>
            {orderCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-bold bg-indigo-600 text-white rounded-full">
                {orderCount}
              </span>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};
