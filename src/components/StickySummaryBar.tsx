import React from 'react';
import { ProductItem } from '../types';
import { formatRupiah } from '../data/products';
import { ShoppingCart, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface StickySummaryBarProps {
  selectedProduct: ProductItem | null;
  onContinue: () => void;
}

export const StickySummaryBar: React.FC<StickySummaryBarProps> = ({
  selectedProduct,
  onContinue,
}) => {
  return (
    <div className="fixed bottom-4 left-3 right-3 sm:left-1/2 sm:-translate-x-1/2 sm:max-w-2xl sm:w-full z-40 transition-all duration-300">
      <div className={`p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl border backdrop-blur-2xl shadow-2xl transition-all duration-300 ${
        selectedProduct
          ? 'bg-slate-900/95 dark:bg-slate-950/95 light:bg-white/95 border-indigo-500/50 shadow-indigo-950/50 ring-1 ring-indigo-500/30'
          : 'bg-slate-900/90 dark:bg-slate-950/90 light:bg-white/90 border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-slate-950/30'
      }`}>
        <div className="flex items-center justify-between gap-3">
          {/* Left: Product preview & Price */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {selectedProduct ? (
              <>
                {/* Product thumbnail */}
                <div className="w-11 h-11 rounded-xl bg-slate-800/90 border border-slate-700/80 p-1 flex items-center justify-center shrink-0 shadow-inner">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                      Pesanan Aktif
                    </span>
                    <span className="text-xs text-slate-400 hidden sm:inline">&bull; Siap Checkout</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 mt-0.5">
                    <span className="text-sm sm:text-base font-extrabold text-white dark:text-white light:text-slate-900 truncate">
                      {selectedProduct.name}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-emerald-400">
                      {formatRupiah(selectedProduct.price)}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 shrink-0">
                  <ShoppingCart className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block">
                    Keranjang Top Up
                  </span>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 font-medium">
                    Pilih salah satu produk di atas untuk lanjut
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right: Action button */}
          <button
            onClick={onContinue}
            disabled={!selectedProduct}
            className={`shrink-0 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg ${
              selectedProduct
                ? 'bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-indigo-600/30 hover:scale-[1.03] active:scale-[0.97]'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50 shadow-none'
            }`}
          >
            <span>Lanjutkan</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
