import React from 'react';
import { ViewState } from '../types';
import { STORE_ASSETS } from '../data/products';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';

interface GameCardsProps {
  onSelectGame: (view: ViewState) => void;
}

export const GameCards: React.FC<GameCardsProps> = ({ onSelectGame }) => {
  return (
    <section className="py-4 max-w-xl mx-auto px-4">
      <div className="text-center mb-4">
        <h2 className="text-lg sm:text-xl font-black text-white dark:text-white light:text-slate-900 tracking-tight">
          Pilih Game Favoritmu
        </h2>
        <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
          Pilih game untuk melihat pricelist dan top up resmi
        </p>
      </div>

      {/* Compact 4:5 Game Cards Grid (2 Columns, max-w-md) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
        {/* Game 1: Free Fire */}
        <div
          onClick={() => onSelectGame('freefire')}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-md hover:shadow-xl hover:border-amber-500/60 transition-all duration-200 flex flex-col hover:-translate-y-1"
        >
          {/* Card Image 4:5 Aspect Ratio (Compact) */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
            <img
              src={STORE_ASSETS.freefireCard}
              alt="Free Fire"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-slate-900/80 text-amber-400 border border-amber-500/30 backdrop-blur-sm shadow flex items-center gap-0.5">
                <Flame className="w-2.5 h-2.5 fill-current" />
                FF
              </span>

              <span className="px-1.5 py-0.5 rounded text-[8px] font-black bg-amber-500 text-slate-950 shadow">
                HOT
              </span>
            </div>

            {/* Bottom Content Floating Over Poster */}
            <div className="absolute bottom-0 left-0 right-0 p-3 z-10 flex flex-col justify-end">
              <div>
                <h3 className="text-sm sm:text-base font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  Free Fire
                </h3>
                <p className="text-[10px] text-slate-300 mt-0.5 line-clamp-1">
                  Diamond & Membership
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-1.5">
                <span className="text-[10px] font-black text-amber-400">
                  Rp 5.000
                </span>

                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow transition-colors"
                >
                  <span>Pilih</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game 2: Roblox */}
        <div
          onClick={() => onSelectGame('roblox')}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-md hover:shadow-xl hover:border-rose-500/60 transition-all duration-200 flex flex-col hover:-translate-y-1"
        >
          {/* Card Image 4:5 Aspect Ratio (Compact) */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
            <img
              src={STORE_ASSETS.robloxCard}
              alt="Roblox"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-slate-900/80 text-rose-400 border border-rose-500/30 backdrop-blur-sm shadow flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5 fill-current" />
                RBX
              </span>

              <span className="px-1.5 py-0.5 rounded text-[8px] font-black bg-rose-500 text-white shadow">
                POPULAR
              </span>
            </div>

            {/* Bottom Content Floating Over Poster */}
            <div className="absolute bottom-0 left-0 right-0 p-3 z-10 flex flex-col justify-end">
              <div>
                <h3 className="text-sm sm:text-base font-black text-white tracking-tight group-hover:text-rose-400 transition-colors">
                  Roblox
                </h3>
                <p className="text-[10px] text-slate-300 mt-0.5 line-clamp-1">
                  Robux Instan & Legal
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-1.5">
                <span className="text-[10px] font-black text-rose-400">
                  Rp 5.000
                </span>

                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-rose-500 hover:bg-rose-400 text-white shadow transition-colors"
                >
                  <span>Pilih</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
