import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";


interface CartItem {
  sku: string;  
  name: string;
  price: number;
  quantity: number;
}


export const cartAtom = atomWithStorage<CartItem[]>("cart", []);

export const cartItemCountAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce((total, item) => total + item.quantity, 0);
});

export const cartTotalAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
});


export const addToCart = atom(
  null,
  (get, set, newItem: Omit<CartItem, "quantity">) => {
    const cart = get(cartAtom);
    const existingItem = cart.find((item) => item.sku === newItem.sku);

    if (existingItem) {
      set(
        cartAtom,
        cart.map((item) =>
          item.sku === newItem.sku
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      set(cartAtom, [...cart, { ...newItem, quantity: 1 }]);
    }
  }
);


export const removeFromCart = atom(null, (get, set, sku: string) => {
  const cart = get(cartAtom);
  set(cartAtom, cart.filter((item) => item.sku !== sku));
});


export const updateCartItemQuantity = atom(
  null,
  (get, set, sku: string, quantity: number) => {
    const cart = get(cartAtom);
    set(
      cartAtom,
      cart.map((item) =>
        item.sku === sku ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  }
);

export const clearCart = atom(null, (get, set) => {
  set(cartAtom, []);
});


export const JordanProductsAtom = atom<any[]>([]);
export const OpenModalAtom = atom<boolean>(false);
export const OpenCartAtom = atom<boolean>(false);