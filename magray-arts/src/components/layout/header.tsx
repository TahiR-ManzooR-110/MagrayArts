'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  Menu, 
  User, 
  LogOut,
  Settings,
  Package
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useStore } from '@/lib/store'
import { cn } from '@/lib/utils'

const Header = () => {
  const { data: session } = useSession()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { 
    cartItems, 
    favorites, 
    isMobileMenuOpen, 
    setMobileMenuOpen,
    setCartOpen,
    getCartItemsCount 
  } = useStore()

  const cartItemsCount = getCartItemsCount()
  const favoritesCount = favorites.length

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 border-b border-amber-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-700 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>✨ Authentic Kashmiri Handicrafts</span>
            <span>🚚 Free Shipping on Orders Over $100</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>📞 +1 (555) 123-4567</span>
            <span>📧 info@magrayarts.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-xl">M</span>
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-amber-800">MagrayArts</h1>
              <p className="text-sm text-amber-600">Kashmiri Heritage</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-amber-800 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4" />
              <Input
                placeholder="Search for handicrafts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-amber-200 focus:border-orange-400 bg-white/80"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden text-amber-800 hover:text-orange-600"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Favorites */}
            <Link href="/favorites" className="relative group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="w-6 h-6 text-amber-800 group-hover:text-red-500 transition-colors" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {favoritesCount}
                  </span>
                )}
              </motion.div>
            </Link>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart className="w-6 h-6 text-amber-800 group-hover:text-orange-600 transition-colors" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </motion.div>
            </button>

            {/* User Menu */}
            <div className="relative group">
              {session ? (
                <div className="flex items-center space-x-2">
                  <img
                    src={session.user?.image || '/placeholder-avatar.png'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-amber-300"
                  />
                  <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-amber-200 py-2 z-50">
                    <Link href="/profile" className="flex items-center px-4 py-2 text-amber-800 hover:bg-amber-50">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    <Link href="/orders" className="flex items-center px-4 py-2 text-amber-800 hover:bg-amber-50">
                      <Package className="w-4 h-4 mr-2" />
                      Orders
                    </Link>
                    {session.user?.role === 'ADMIN' && (
                      <Link href="/admin" className="flex items-center px-4 py-2 text-amber-800 hover:bg-amber-50">
                        <Settings className="w-4 h-4 mr-2" />
                        Admin
                      </Link>
                    )}
                    <button
                      onClick={() => signOut()}
                      className="flex items-center w-full px-4 py-2 text-amber-800 hover:bg-amber-50"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link href="/auth/signin">
                    <Button variant="outline" size="sm" className="border-amber-300 text-amber-800 hover:bg-amber-50">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-amber-800"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4" />
                <Input
                  placeholder="Search for handicrafts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-amber-200 focus:border-orange-400"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-amber-200"
          >
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-amber-800 hover:text-orange-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header