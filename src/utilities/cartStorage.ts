const CART_KEY = 'cart';

type CartItem = {
  itemId: string;
  quantity: number;
};

export const getCart = (): CartItem[] => {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
};

export const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (itemId: string) => {
  console.log(itemId);
  const cart = getCart();
  const existing = cart.find((i) => i.itemId === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ itemId, quantity: 1 });
  }
  saveCart(cart);
};

export const removeFromCart = (itemId: string) => {
  const cart = getCart();
  const existing = cart.find((i) => i.itemId === itemId);
  if (!existing) return;

  if (existing.quantity > 1) {
    existing.quantity -= 1;
  } else {
    // удаляем товар полностью, если quantity == 1
    const index = cart.findIndex((i) => i.itemId === itemId);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }

  saveCart(cart);
};
