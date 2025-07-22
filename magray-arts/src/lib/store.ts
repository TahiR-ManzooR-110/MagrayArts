import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  slug: string
}

export interface Favorite {
  id: string
  name: string
  price: number
  image: string
  slug: string
}

interface Store {
  // Cart
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string) => void
  updateCartItemQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartItemsCount: () => number

  // Favorites
  favorites: Favorite[]
  addToFavorites: (item: Favorite) => void
  removeFromFavorites: (id: string) => void
  isFavorite: (id: string) => boolean

  // Currency
  currency: string
  setCurrency: (currency: string) => void

  // UI State
  isCartOpen: boolean
  setCartOpen: (open: boolean) => void
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      // Cart
      cartItems: [],
      addToCart: (item) => {
        const items = get().cartItems
        const existingItem = items.find(i => i.id === item.id)
        
        if (existingItem) {
          set({
            cartItems: items.map(i => 
              i.id === item.id 
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          })
        } else {
          set({
            cartItems: [...items, { ...item, quantity: 1 }]
          })
        }
      },
      removeFromCart: (id) => {
        set({
          cartItems: get().cartItems.filter(item => item.id !== id)
        })
      },
      updateCartItemQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id)
          return
        }
        
        set({
          cartItems: get().cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        })
      },
      clearCart: () => set({ cartItems: [] }),
      getCartTotal: () => {
        return get().cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      },
      getCartItemsCount: () => {
        return get().cartItems.reduce(
          (count, item) => count + item.quantity,
          0
        )
      },

      // Favorites
      favorites: [],
      addToFavorites: (item) => {
        const favorites = get().favorites
        if (!favorites.find(f => f.id === item.id)) {
          set({ favorites: [...favorites, item] })
        }
      },
      removeFromFavorites: (id) => {
        set({
          favorites: get().favorites.filter(item => item.id !== id)
        })
      },
      isFavorite: (id) => {
        return get().favorites.some(item => item.id === id)
      },

      // Currency
      currency: 'USD',
      setCurrency: (currency) => set({ currency }),

      // UI State
      isCartOpen: false,
      setCartOpen: (open) => set({ isCartOpen: open }),
      isMobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
    }),
    {
      name: 'magray-arts-store',
      partialize: (state) => ({
        cartItems: state.cartItems,
        favorites: state.favorites,
        currency: state.currency,
      }),
    }
  )
)