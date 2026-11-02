import React from 'react';
import { ProductItem } from '../types';
import { STORE_ASSETS, ROBLOX_PRODUCTS, formatRupiah } from '../data/products';
import { ArrowLeft, Check, Sparkles, ShieldCheck } from 'lucide-react';

interface RobloxViewProps {
  selectedProduct: ProductItem | null;
  onSelectProduct: (product: ProductItem) => void;
  onBackToHome: () => void;
}

export const RobloxView: React.FC<RobloxViewProps> = ({
  selectedProduct,
  onSelectProduct,
  onBackToHome,
}) => {
  return (
    <div className="pb-32 pt-3 max-w-4xl mx-auto px-4 sm:px-6 animate-in fade-in duration-200">
      {/* Top Banner & Header */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md mb-6">
        <div className="relative aspect-[24/7] max-h-44 w-full overflow-hidden bg-slate-950">
          <img
            src={STORE_ASSETS.robloxBanner}
            alt="Roblox Top Up Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        <div className="p-4 sm:p-5 relative z-10 -mt-10 sm:-mt-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 backdrop-blur-md mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Roblox Top Up
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                  <Sparkles className="w-3 h-3 mr-1 fill-current" />
                  Instan Tanpa Password
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Top up Robux dengan mudah dan praktis di Kenos Store. Cukup masukkan Username Roblox!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-md bg-rose-600 text-white font-black text-xs flex items-center justify-center">
          1
        </div>
        <div>
          <h2 className="text-lg font-black text-white dark:text-white light:text-slate-900 tracking-tight">
            Pilih Nominal Robux
          </h2>
        </div>
      </div>

      {/* Robux Grid - Compact & Responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {ROBLOX_PRODUCTS.map((product) => {
          const isSelected = selectedProduct?.id === product.id;

          return (
            <button
              key={product.id}
              type="button"
              onClick={() => onSelectProduct(product)}
              className={`relative group p-3.5 rounded-xl border text-center transition-all duration-150 flex flex-col items-center justify-between ${
                isSelected
                  ? 'bg-rose-950/60 border-rose-500 shadow-md ring-1 ring-rose-500 scale-[1.02]'
                  : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border-slate-800 hover:border-slate-700'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shadow">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              )}

              <div className="w-16 h-16 mb-2 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain rounded-lg shadow"
                />
              </div>

              <div className="w-full">
                <h3 className="text-sm font-black text-white dark:text-white light:text-slate-900">
                  {product.name}
                </h3>
                <div className="mt-1 text-sm font-extrabold text-rose-400 dark:text-rose-400 light:text-rose-600">
                  {formatRupiah(product.price)}
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-800/80 w-full flex items-center justify-center gap-1 text-[10px] text-slate-400">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>100% Legal</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
