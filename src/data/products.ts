import { ProductItem, PaymentMethodId } from '../types';

// Direct asset imports so Vite compiles and bundles them safely into production build without broken paths
import bannerTokoImg from '../assets/images/banner_toko.png';
import bannerFreefireImg from '../assets/images/freefire/banner_freefire.png';
import cardFreefireImg from '../assets/images/freefire/card_freefire.jpg';
import bpCardImg from '../assets/images/freefire/bp_card.webp';
import diamondFreefireImg from '../assets/images/freefire/diamond_freefire.png';
import memberBulananImg from '../assets/images/freefire/member_bulanan.png';
import memberMingguanImg from '../assets/images/freefire/member_mingguan.png';
import ffwsThroneImg from '../assets/images/freefire/ffws_throne.png';
import permaisuriCahayaImg from '../assets/images/freefire/permaisuri_cahaya_bundle.png';
import scarCahayaBulanImg from '../assets/images/freefire/scar_cahaya_bulan.png';
import sultanCahayaImg from '../assets/images/freefire/sultan_cahaya_bundle.png';
import supergamerBundleImg from '../assets/images/freefire/supergamer_bundle.png';

import robloxBannerImg from '../assets/images/roblox/roblox_banner.png';
import robloxCardImg from '../assets/images/roblox/roblox_card.png';
import robuxImg from '../assets/images/roblox/robux.jpg';

import danaImg from '../assets/images/payment/dana.webp';
import gopayImg from '../assets/images/payment/gopay.png';
import qrVrenaStoreImg from '../assets/images/payment/qr_vrena_store.jpeg';
import qrisImg from '../assets/images/payment/qris.png';

export const STORE_ASSETS = {
  storeBanner: bannerTokoImg,
  freefireBanner: bannerFreefireImg,
  freefireCard: cardFreefireImg,
  robloxBanner: robloxBannerImg,
  robloxCard: robloxCardImg,
  qrCodeImage: qrVrenaStoreImg,
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
    image: qrisImg,
    description: 'Scan QRIS menggunakan aplikasi pembayaran apa saja yang mendukung QRIS (BCA, Mandiri, BRI, GoPay, OVO, DANA, dll).',
  },
  {
    id: 'dana',
    name: 'DANA',
    image: danaImg,
    description: 'Transfer menggunakan aplikasi DANA ke nomor resmi Kenos Store.',
    targetNumber: '0851-1736-4018',
  },
  {
    id: 'gopay',
    name: 'GoPay',
    image: gopayImg,
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
    image: bpCardImg,
    isSoldOut: true,
    badge: 'SOLD OUT',
  },
  {
    id: 'ff-member-mingguan',
    gameId: 'freefire',
    category: 'special',
    name: 'Member Mingguan',
    price: 10000,
    image: memberMingguanImg,
    badge: 'Tersedia',
  },
  {
    id: 'ff-member-bulanan',
    gameId: 'freefire',
    category: 'special',
    name: 'Member Bulanan',
    price: 30000,
    image: memberBulananImg,
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
    image: diamondFreefireImg,
  },
  {
    id: 'ff-dm-140',
    gameId: 'freefire',
    category: 'diamond',
    name: '140 Diamond',
    price: 10000,
    image: diamondFreefireImg,
  },
  {
    id: 'ff-dm-210',
    gameId: 'freefire',
    category: 'diamond',
    name: '210 Diamond',
    price: 15000,
    image: diamondFreefireImg,
  },
  {
    id: 'ff-dm-355',
    gameId: 'freefire',
    category: 'diamond',
    name: '355 Diamond',
    price: 23000,
    image: diamondFreefireImg,
  },
  {
    id: 'ff-dm-720',
    gameId: 'freefire',
    category: 'diamond',
    name: '720 Diamond',
    price: 32000,
    image: diamondFreefireImg,
  },
  {
    id: 'ff-dm-1000-promo',
    gameId: 'freefire',
    category: 'diamond',
    name: '1000 Diamond',
    price: 20000,
    originalPrice: 45000,
    image: diamondFreefireImg,
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
    image: ffwsThroneImg,
    badge: 'Paling Banyak Dibeli',
    isOrangeBundle: true,
  },
  {
    id: 'ff-gift-supergamer',
    gameId: 'freefire',
    category: 'gift',
    name: 'Supergamer Bundle',
    price: 25000,
    image: supergamerBundleImg,
    badge: 'Paling Banyak Dibeli',
    isOrangeBundle: true,
  },
  {
    id: 'ff-gift-scar',
    gameId: 'freefire',
    category: 'gift',
    name: 'SCAR Cahaya Bulan',
    price: 15000,
    image: scarCahayaBulanImg,
  },
  {
    id: 'ff-gift-sultan',
    gameId: 'freefire',
    category: 'gift',
    name: 'Sultan Cahaya Bundle',
    price: 5000,
    image: sultanCahayaImg,
  },
  {
    id: 'ff-gift-permaisuri',
    gameId: 'freefire',
    category: 'gift',
    name: 'Permaisuri Cahaya Bundle',
    price: 5000,
    image: permaisuriCahayaImg,
  },
];

export const ROBLOX_PRODUCTS: ProductItem[] = [
  {
    id: 'rbx-80',
    gameId: 'roblox',
    category: 'robux',
    name: '80 Robux',
    price: 5000,
    image: robuxImg,
  },
  {
    id: 'rbx-160',
    gameId: 'roblox',
    category: 'robux',
    name: '160 Robux',
    price: 10000,
    image: robuxImg,
  },
  {
    id: 'rbx-220',
    gameId: 'roblox',
    category: 'robux',
    name: '220 Robux',
    price: 15000,
    image: robuxImg,
  },
  {
    id: 'rbx-350',
    gameId: 'roblox',
    category: 'robux',
    name: '350 Robux',
    price: 20000,
    image: robuxImg,
  },
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount).replace('Rp', 'Rp ');
}
