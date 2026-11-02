export type GameId = 'freefire' | 'roblox';

export type PaymentMethodId = 'qris' | 'dana' | 'gopay';

export type ViewState =
  | 'home'
  | 'freefire'
  | 'roblox'
  | 'checkout-account'
  | 'checkout-payment'
  | 'payment-qris'
  | 'payment-transfer'
  | 'payment-success'
  | 'payment-expired'
  | 'order-history';

export interface ProductItem {
  id: string;
  gameId: GameId;
  category: 'special' | 'diamond' | 'gift' | 'robux';
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isSoldOut?: boolean;
  isPromo?: boolean;
  promoStock?: number;
  badge?: string;
}

export interface OrderAccountData {
  gameId: GameId;
  uid?: string;
  nickname?: string;
  username?: string;
}

export interface OrderRecord {
  orderId: string;
  gameId: GameId;
  gameName: string;
  productId: string;
  productName: string;
  price: number;
  accountData: OrderAccountData;
  paymentMethod: PaymentMethodId;
  paymentMethodName: string;
  paymentProofUrl?: string;
  paymentProofName?: string;
  createdAt: string;
  status: 'Menunggu Proses Pesanan';
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}
