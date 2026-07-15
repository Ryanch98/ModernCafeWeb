import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

/**
 * Cart slice for managing shopping cart state
 * Handles adding, removing, and updating cart items
 */
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * Add item to cart or increment quantity if already exists
     */
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const item = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    /**
     * Remove item from cart by id
     */
    removeFromCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    /**
     * Update quantity of item in cart
     * Removes item if quantity is 0 or less
     */
    updateQuantity: (state, action: PayloadAction<{ id: string | number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((cartItem) => cartItem.id === id);
      if (!item) return;
      if (quantity <= 0) {
        state.items = state.items.filter((cartItem) => cartItem.id !== id);
      } else {
        item.quantity = quantity;
      }
    },

    /**
     * Clear all items from cart
     */
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
