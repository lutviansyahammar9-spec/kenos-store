import React from 'react';
import { ProductItem } from '../types';
import { 
  STORE_ASSETS, 
  FREE_FIRE_SPECIAL_PRODUCTS, 
  FREE_FIRE_DIAMOND_PRODUCTS, 
  FREE_FIRE_GIFT_PRODUCTS, 
  formatRupiah 
} from '../data/products';
import { 
  ArrowLeft, 
  Check, 
  Flame, 
  Crown, 
  Gift, 
  Gem, 
  AlertTriangle 
} from 'lucide-react';

interface FreeFireViewProps {
  selectedProduct: ProductItem | null;
  onSelectProduct: (product: ProductItem) => void;
  onBackToHome: () => void;
  promoStock: number;
}

export const FreeFireView: React.FC<FreeFireViewProps> = ({
  selectedProduct,
  onSelectProduct,
  onBackToHome,
  promoStock,
}) => {
  return (
    <div className="pb-32 pt-3 max-w-4xl mx-auto px-4 sm:px-6 animate-in fade-in duration-200">
      {/* Top Banner & Header */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md mb-6">
        <div className="relative aspect-[24/7] max-h-44 w-full overflow-hidden bg-slate-950">
          <img
            src={STORE_ASSETS.freefireBanner}
            alt="Free Fire Banner"
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
                  Free Fire Top Up
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  Resmi & Legal
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Pilih Diamond, Membership, atau Jasa Gift in-game dengan harga terbaik.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-md bg-indigo-600 text-white font-black text-xs flex items-center justify-center">
          1
        </div>
        <h2 className="text-lg font-black text-white dark:text-white light:text-slate-900 tracking-tight">
          Pilih Produk
        </h2>
      </div>

      {/* CATEGORY A: Special Item / Membership */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2.5">
          <Crown className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-800">
            A. Special Item / Membership
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {FREE_FIRE_SPECIAL_PRODUCTS.map((product) => {
            const isSelected = selectedProduct?.id === product.id;
            const isSoldOut = product.isSoldOut;

            if (isSoldOut) {
              return (
                <div
                  key={product.id}
                  className="relative opacity-50 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100 border border-slate-800/80 rounded-xl p-3 flex items-center gap-3 cursor-not-allowed select-none"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center filter grayscale">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-slate-400 truncate">
                        {product.name}
                      </h4>
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-rose-600 text-white">
                        SOLD OUT
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {formatRupiah(product.price)}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={product.id}
                type="button"
                onClick={() => onSelectProduct(product)}
                className={`relative group p-3 rounded-xl border text-left transition-all duration-150 flex items-center gap-3 ${
                  isSelected
                    ? 'bg-indigo-950/60 border-indigo-500 shadow-md ring-1 ring-indigo-500'
                    : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-12 h-12 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain drop-shadow"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900 truncate">
                    {product.name}
                  </h4>
                  <div className="text-xs font-extrabold text-indigo-400 dark:text-indigo-400 light:text-indigo-600 mt-0.5">
                    {formatRupiah(product.price)}
                  </div>
                </div>

                {isSelected && (
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* CATEGORY B: Diamond Free Fire */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <Gem className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-800">
              B. Diamond Free Fire
            </h3>
          </div>
          <span className="text-[11px] text-slate-400">Proses 1-3 Menit</span>
        </div>

        {/* PROMO COMPACT CARD: 1000 Diamond */}
        {(() => {
          const promoItem = FREE_FIRE_DIAMOND_PRODUCTS.find((p) => p.isPromo);
          if (!promoItem) return null;
          const isSelected = selectedProduct?.id === promoItem.id;

          return (
            <div
              onClick={() => onSelectProduct(promoItem)}
              className={`cursor-pointer mb-3 relative overflow-hidden rounded-xl border transition-all duration-200 p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isSelected
                  ? 'border-orange-500 bg-gradient-to-r from-orange-950/80 via-slate-900 to-slate-900 shadow-lg ring-1 ring-orange-500'
                  : 'border-orange-500/70 bg-gradient-to-r from-orange-950/30 via-slate-900/90 to-slate-900/90 hover:border-orange-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 p-1 flex items-center justify-center shrink-0 border border-orange-500/20">
                  <img
                    src={promoItem.image}
                    alt={promoItem.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-white">
                      {promoItem.name}
                    </span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-black bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      <Flame className="w-3 h-3 fill-amber-200" />
                      PROMO
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-sm font-black text-orange-400">
                      {formatRupiah(promoItem.price)}
                    </span>
                    {promoItem.originalPrice && (
                      <span className="text-[10px] text-slate-500 line-through">
                        {formatRupiah(promoItem.originalPrice)}
                      </span>
                    )}
                  </div>

                  <p className="text-[10px] text-orange-200/80 mt-1">
                    "Stok promo terbatas! Segera pesan sebelum kehabisan."
                  </p>
                </div>
              </div>

              {/* Progress & Selection Action */}
              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-bold text-orange-300 block">
                    Sisa Stok: <strong className="text-white">{promoStock}</strong> / 20
                  </span>
                  <div className="w-24 h-1.5 rounded-full bg-slate-800 overflow-hidden mt-1">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      style={{ width: `${Math.min(100, (promoStock / 20) * 100)}%` }}
                    />
                  </div>
                </div>

                <div className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                  isSelected 
                    ? 'bg-orange-500 text-slate-950' 
                    : 'bg-slate-800 text-orange-300 border border-orange-500/30'
                }`}>
                  {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Flame className="w-3.5 h-3.5" />}
                  <span>{isSelected ? 'Terpilih' : 'Pilih'}</span>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Regular Diamonds - Compact Grid (3 cols mobile, 5 cols desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {FREE_FIRE_DIAMOND_PRODUCTS.filter((p) => !p.isPromo).map((product) => {
            const isSelected = selectedProduct?.id === product.id;

            return (
              <button
                key={product.id}
                type="button"
                onClick={() => onSelectProduct(product)}
                className={`relative group p-2.5 rounded-xl border text-center transition-all duration-150 flex flex-col items-center justify-between ${
                  isSelected
                    ? 'bg-cyan-950/60 border-cyan-400 shadow-md ring-1 ring-cyan-400'
                    : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border-slate-800 hover:border-slate-700'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                )}

                <div className="w-10 h-10 mb-1 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="w-full">
                  <h4 className="text-xs font-bold text-white dark:text-white light:text-slate-900">
                    {product.name}
                  </h4>
                  <div className="text-xs font-extrabold text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mt-0.5">
                    {formatRupiah(product.price)}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* CATEGORY C: Jasa Gift In Game */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2.5">
          <Gift className="w-4 h-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-white dark:text-white light:text-slate-800">
            C. Jasa Gift In Game
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {FREE_FIRE_GIFT_PRODUCTS.map((product) => {
            const isSelected = selectedProduct?.id === product.id;

            return (
              <button
                key={product.id}
                type="button"
                onClick={() => onSelectProduct(product)}
                className={`relative group p-2.5 rounded-xl border text-center transition-all duration-150 flex flex-col items-center justify-between ${
                  isSelected
                    ? 'bg-indigo-950/60 border-indigo-400 shadow-md ring-1 ring-indigo-400'
                    : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border-slate-800 hover:border-slate-700'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                )}

                <div className="w-12 h-12 mb-1 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="w-full">
                  <h4 className="text-[11px] font-bold text-white dark:text-white light:text-slate-900 truncate">
                    {product.name}
                  </h4>
                  <div className="text-xs font-extrabold text-indigo-400 dark:text-indigo-400 light:text-indigo-600 mt-0.5">
                    {formatRupiah(product.price)}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
