import { ProductItem, PaymentMethodId } from '../types';

export const STORE_ASSETS = {
  storeBanner: '/PROJECT SHOP/banner toko/banner toko.png',
  freefireBanner: '/PROJECT SHOP/freefire/MISC/banner freefire.png',
  freefireCard: '/PROJECT SHOP/freefire/MISC/card freefire.jpg',
  robloxBanner: '/PROJECT SHOP/roblox/roblox banner.png',
  robloxCard: '/PROJECT SHOP/roblox/roblox card.png',
  qrCodeImage: '/PROJECT SHOP/payment/qr vrena store.jpeg',
};

export const PAYMENT_METHODS: {
  id: PaymentMethodId;
  name: string;
  image: string;
  description: string;
  targetNumber?: string;
}[] = [
  {
    id: 'qris',
    name: 'QRIS',
    image: '/PROJECT SHOP/payment/qris.png',
    description: 'Scan QRIS menggunakan aplikasi pembayaran apa saja yang mendukung QRIS (BCA, Mandiri, BRI, GoPay, OVO, DANA, dll).',
  },
  {
    id: 'dana',
    name: 'DANA',
    image: '/PROJECT SHOP/payment/dana.webp',
    description: 'Transfer menggunakan aplikasi DANA ke nomor resmi Kenos Store.',
    targetNumber: '0851-1736-4018',
  },
  {
    id: 'gopay',
    name: 'GoPay',
    image: '/PROJECT SHOP/payment/gopay.png',
    description: 'Transfer menggunakan aplikasi GoPay ke nomor resmi Kenos Store.',
    targetNumber: '0851-1736-4018',
  },
];

export const FREE_FIRE_SPECIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'ff-bp-card',
    gameId: 'freefire',
    category: 'special',
    name: 'BP Card',
    price: 15500,
    image: '/PROJECT SHOP/freefire/TOP UP/bp card.webp',
    isSoldOut: true,
    badge: 'SOLD OUT',
  },
  {
    id: 'ff-member-mingguan',
    gameId: 'freefire',
    category: 'special',
    name: 'Member Mingguan',
    price: 10000,
    image: '/PROJECT SHOP/freefire/TOP UP/member mingguan.png',
    badge: 'Tersedia',
  },
  {
    id: 'ff-member-bulanan',
    gameId: 'freefire',
    category: 'special',
    name: 'Member Bulanan',
    price: 30000,
    image: '/PROJECT SHOP/freefire/TOP UP/member bulanan.png',
    badge: 'Tersedia',
  },
];

export const FREE_FIRE_DIAMOND_PRODUCTS: ProductItem[] = [
  {
    id: 'ff-dm-70',
    gameId: 'freefire',
    category: 'diamond',
    name: '70 Diamond',
    price: 5000,
    image: '/PROJECT SHOP/freefire/TOP UP/diamond freefire.png',
  },
  {
    id: 'ff-dm-140',
    gameId: 'freefire',
    category: 'diamond',
    name: '140 Diamond',
    price: 10000,
    image: '/PROJECT SHOP/freefire/TOP UP/diamond freefire.png',
  },
  {
    id: 'ff-dm-210',
    gameId: 'freefire',
    category: 'diamond',
    name: '210 Diamond',
    price: 15000,
    image: '/PROJECT SHOP/freefire/TOP UP/diamond freefire.png',
  },
  {
    id: 'ff-dm-355',
    gameId: 'freefire',
    category: 'diamond',
    name: '355 Diamond',
    price: 23000,
    image: '/PROJECT SHOP/freefire/TOP UP/diamond freefire.png',
  },
  {
    id: 'ff-dm-720',
    gameId: 'freefire',
    category: 'diamond',
    name: '720 Diamond',
    price: 32000,
    image: '/PROJECT SHOP/freefire/TOP UP/diamond freefire.png',
  },
  {
    id: 'ff-dm-1000-promo',
    gameId: 'freefire',
    category: 'diamond',
    name: '1000 Diamond',
    price: 20000,
    originalPrice: 45000,
    image: '/PROJECT SHOP/freefire/TOP UP/diamond freefire.png',
    isPromo: true,
    promoStock: 12,
    badge: 'PROMO SPESIAL',
  },
];

export const FREE_FIRE_GIFT_PRODUCTS: ProductItem[] = [
  {
    id: 'ff-gift-ffws',
    gameId: 'freefire',
    category: 'gift',
    name: 'FFWS Throne',
    price: 30000,
    image: '/PROJECT SHOP/freefire/JASA GIFT IN GAME/ffws throne.png',
  },
  {
    id: 'ff-gift-scar',
    gameId: 'freefire',
    category: 'gift',
    name: 'SCAR Cahaya Bulan',
    price: 15000,
    image: '/PROJECT SHOP/freefire/JASA GIFT IN GAME/scar cahaya bulan.png',
  },
  {
    id: 'ff-gift-supergamer',
    gameId: 'freefire',
    category: 'gift',
    name: 'Supergamer Bundle',
    price: 25000,
    image: '/PROJECT SHOP/freefire/JASA GIFT IN GAME/supergamer bundle.png',
  },
  {
    id: 'ff-gift-sultan',
    gameId: 'freefire',
    category: 'gift',
    name: 'Sultan Cahaya Bundle',
    price: 5000,
    image: '/PROJECT SHOP/freefire/JASA GIFT IN GAME/sultan cahaya bundle.png',
  },
  {
    id: 'ff-gift-permaisuri',
    gameId: 'freefire',
    category: 'gift',
    name: 'Permaisuri Cahaya Bundle',
    price: 5000,
    image: '/PROJECT SHOP/freefire/JASA GIFT IN GAME/permaisuri cahaya bundle.png',
  },
];

export const ROBLOX_PRODUCTS: ProductItem[] = [
  {
    id: 'rbx-80',
    gameId: 'roblox',
    category: 'robux',
    name: '80 Robux',
    price: 5000,
    image: '/PROJECT SHOP/roblox/robux.jpg',
  },
  {
    id: 'rbx-160',
    gameId: 'roblox',
    category: 'robux',
    name: '160 Robux',
    price: 10000,
    image: '/PROJECT SHOP/roblox/robux.jpg',
  },
  {
    id: 'rbx-220',
    gameId: 'roblox',
    category: 'robux',
    name: '220 Robux',
    price: 15000,
    image: '/PROJECT SHOP/roblox/robux.jpg',
  },
  {
    id: 'rbx-350',
    gameId: 'roblox',
    category: 'robux',
    name: '350 Robux',
    price: 20000,
    image: '/PROJECT SHOP/roblox/robux.jpg',
  },
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount).replace('Rp', 'Rp ');
}
