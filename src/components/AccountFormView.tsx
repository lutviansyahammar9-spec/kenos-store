import React, { useState } from 'react';
import { ProductItem, OrderAccountData, GameId } from '../types';
import { formatRupiah } from '../data/products';
import { 
  ArrowLeft, 
  ArrowRight, 
  User, 
  Hash, 
  AlertCircle, 
  ShieldCheck, 
  AlertTriangle 
} from 'lucide-react';

interface AccountFormViewProps {
  gameId: GameId;
  product: ProductItem;
  initialAccountData: OrderAccountData;
  onSubmit: (data: OrderAccountData) => void;
  onBack: () => void;
}

export const AccountFormView: React.FC<AccountFormViewProps> = ({
  gameId,
  product,
  initialAccountData,
  onSubmit,
  onBack,
}) => {
  const [uid, setUid] = useState(initialAccountData.uid || '');
  const [nickname, setNickname] = useState(initialAccountData.nickname || '');
  const [username, setUsername] = useState(initialAccountData.username || '');
  const [errorMessage, setErrorMessage] = useState('');

  const isFreeFire = gameId === 'freefire';

  const handleUidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits for Free Fire UID
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 15);
    setUid(numericValue);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (isFreeFire) {
      const cleanUid = uid.trim();
      if (!cleanUid) {
        setErrorMessage('User ID / UID Free Fire wajib diisi.');
        return;
      }
      if (!/^\d+$/.test(cleanUid)) {
        setErrorMessage('UID Free Fire harus berupa angka saja.');
        return;
      }
      if (cleanUid.length < 8 || cleanUid.length > 15) {
        setErrorMessage(`UID Free Fire harus terdiri dari 8 hingga 15 angka (saat ini ${cleanUid.length} digit).`);
        return;
      }

      onSubmit({
        gameId: 'freefire',
        uid: cleanUid,
        nickname: nickname.trim() || undefined,
      });
    } else {
      const cleanUsername = username.trim();
      if (!cleanUsername) {
        setErrorMessage('Username Roblox wajib diisi.');
        return;
      }
      if (cleanUsername.length < 3) {
        setErrorMessage('Username Roblox minimal 3 karakter.');
        return;
      }

      onSubmit({
        gameId: 'roblox',
        username: cleanUsername,
      });
    }
  };

  return (
    <div className="py-6 max-w-xl mx-auto px-4 sm:px-6 animate-in fade-in duration-200">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/80 backdrop-blur-md mb-4 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Ganti Produk</span>
      </button>

      {/* Main Form Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white light:border-slate-200 shadow-xl p-5 sm:p-6">
        {/* Selected Product Summary Header */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center p-1 shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                {isFreeFire ? 'Free Fire' : 'Roblox'}
              </span>
              <h3 className="text-sm font-extrabold text-white dark:text-white light:text-slate-900">
                {product.name}
              </h3>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block font-medium">Harga</span>
            <span className="text-sm sm:text-base font-black text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
              {formatRupiah(product.price)}
            </span>
          </div>
        </div>

        {/* Title & Info */}
        <div className="mb-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 text-white font-black text-xs flex items-center justify-center">
              2
            </div>
            <h2 className="text-base sm:text-lg font-black text-white dark:text-white light:text-slate-900 tracking-tight">
              {isFreeFire ? 'Masukkan Data Akun Free Fire' : 'Masukkan Username Roblox'}
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {isFreeFire
              ? 'Masukkan UID akun Free Fire tujuan (8-15 digit angka).'
              : 'Masukkan Username Roblox tujuan (tanpa password).'}
          </p>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs flex items-start gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {isFreeFire ? (
            <>
              {/* Free Fire UID */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700">
                    User ID / UID Free Fire <span className="text-rose-400">*</span>
                  </label>
                  <span className="text-[10px] text-slate-400">
                    {uid.length}/15 digit (min. 8)
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <Hash className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    value={uid}
                    onChange={handleUidChange}
                    placeholder="Contoh: 1234567890 (8-15 angka)"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm font-medium transition-all"
                  />
                </div>
                <p className="mt-1 text-[11px] text-slate-400">
                  Hanya angka diperbolehkan, minimal 8 digit dan maksimal 15 digit.
                </p>
              </div>

              {/* Free Fire Nickname (Optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Nickname Free Fire <span className="text-slate-500 text-[10px] lowercase">(opsional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="Contoh: KenosPro99"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm font-medium transition-all"
                  />
                </div>
              </div>
            </>
          ) : (
            /* Roblox Username */
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                Username Roblox <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="Contoh: RobloxGamer2024"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-sm font-medium transition-all"
                />
              </div>
            </div>
          )}

          {/* Explicit Warning Note requested by user */}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2.5 text-xs text-amber-300">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-amber-200">Catatan Penting:</strong>
              Pastikan jangan sampai salah memasukkan {isFreeFire ? 'UID Free Fire' : 'Username Roblox'}! Kesalahan pengisian data di luar tanggung jawab pihak toko dan pesanan yang salah kirim tidak dapat dibatalkan.
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              <span>Lanjutkan ke Pembayaran</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
