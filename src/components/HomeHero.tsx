import React from 'react';
import { Tag, Zap, CreditCard, ShieldCheck, Flame } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-4">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-3xl h-36 bg-gradient-to-r from-blue-600/15 via-indigo-600/20 to-cyan-500/15 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Sleek Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm mb-3">
          <Flame className="w-3.5 h-3.5 text-amber-400 fill-current animate-pulse" />
          <span>Layanan Top Up Game Terpercaya</span>
        </div>

        {/* Clean, Bold Store Title */}
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white dark:text-white light:text-slate-900">
          Selamat Datang di <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Kenos Store</span>
        </h1>

        <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal">
          Top up game favoritmu dengan harga bersahabat, proses instan, dan metode pembayaran lengkap QRIS, DANA, serta GoPay.
        </p>

        {/* Compact Benefits Pills */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white light:border-slate-200 shadow-sm text-left">
            <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
              <Tag className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-slate-400 leading-tight">Harga</p>
              <p className="text-xs font-bold text-white dark:text-white light:text-slate-800 truncate">Terjangkau</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white light:border-slate-200 shadow-sm text-left">
            <div className="p-1.5 rounded-lg bg-indigo-500/15 text-indigo-400 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-slate-400 leading-tight">Proses</p>
              <p className="text-xs font-bold text-white dark:text-white light:text-slate-800 truncate">Cepat & Mudah</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white light:border-slate-200 shadow-sm text-left">
            <div className="p-1.5 rounded-lg bg-blue-500/15 text-blue-400 shrink-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-slate-400 leading-tight">Metode</p>
              <p className="text-xs font-bold text-white dark:text-white light:text-slate-800 truncate">QRIS & E-Wallet</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white light:border-slate-200 shadow-sm text-left">
            <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-slate-400 leading-tight">Layanan</p>
              <p className="text-xs font-bold text-white dark:text-white light:text-slate-800 truncate">Aman & Terpercaya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
