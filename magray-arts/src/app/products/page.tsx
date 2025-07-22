'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Grid, 
  List, 
  Star, 
  Heart, 
  ShoppingCart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useStore } from '@/lib/store'
import { formatPrice } from '@/lib/utils'

// Mock products data - in a real app, this would come from an API
const allProducts = [
  {
    id: '1',
    name: 'Royal Pashmina Shawl - Burgundy',
    description: 'Exquisite handwoven Pashmina shawl made from the finest goat wool.',
    price: 299.99,
    comparePrice: 399.99,
    image: '/api/placeholder/400/400',
    rating: 4.9,
    reviews: 127,
    slug: 'royal-pashmina-shawl-burgundy',
    category: 'Pashmina Shawls',
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Kashmir Silk Carpet - 4x6 ft',
    description: 'Hand-knotted silk carpet featuring traditional Kashmiri motifs.',
    price: 1299.99,
    comparePrice: 1599.99,
    image: '/api/placeholder/400/400',
    rating: 4.8,
    reviews: 89,
    slug: 'kashmir-silk-carpet-4x6',
    category: 'Carpets & Rugs',
    isNew: false,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Walnut Wood Elephant Sculpture',
    description: 'Beautifully carved walnut wood elephant sculpture.',
    price: 149.99,
    comparePrice: 199.99,
    image: '/api/placeholder/400/400',
    rating: 4.7,
    reviews: 203,
    slug: 'walnut-wood-elephant-sculpture',
    category: 'Wood Carvings',
    isNew: true,
    isFeatured: true
  },
  {
    id: '4',
    name: 'Papier Mâché Decorative Box',
    description: 'Vibrant papier mâché decorative box with traditional patterns.',
    price: 79.99,
    comparePrice: 99.99,
    image: '/api/placeholder/400/400',
    rating: 4.6,
    reviews: 156,
    slug: 'papier-mache-decorative-box',
    category: 'Papier Mâché',
    isNew: false,
    isFeatured: true
  },
  {
    id: '5',
    name: 'Pashmina Shawl - Cream with Gold Border',
    description: 'Elegant cream-colored Pashmina shawl with hand-embroidered gold border.',
    price: 249.99,
    comparePrice: 329.99,
    image: '/api/placeholder/400/400',
    rating: 4.8,
    reviews: 95,
    slug: 'pashmina-shawl-cream-gold-border',
    category: 'Pashmina Shawls',
    isNew: false,
    isFeatured: false
  },
  {
    id: '6',
    name: 'Traditional Kashmiri Silver Jewelry Set',
    description: 'Complete silver jewelry set with traditional Kashmiri designs.',
    price: 189.99,
    comparePrice: 249.99,
    image: '/api/placeholder/400/400',
    rating: 4.5,
    reviews: 78,
    slug: 'traditional-kashmiri-silver-jewelry-set',
    category: 'Jewelry',
    isNew: true,
    isFeatured: false
  }
]

const categories = [
  'All Categories',
  'Pashmina Shawls',
  'Carpets & Rugs',
  'Wood Carvings',
  'Papier Mâché',
  'Jewelry'
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Best Rating', value: 'rating' }
]

export default function ProductsPage() {
  const [products, setProducts] = useState(allProducts)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  const { addToCart, addToFavorites, removeFromFavorites, isFavorite } = useStore()

  // Filter and sort products
  useEffect(() => {
    let filtered = allProducts

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'featured':
      default:
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
        break
    }

    setProducts(filtered)
  }, [searchQuery, selectedCategory, sortBy])

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug
    })
  }

  const handleToggleFavorite = (product: typeof allProducts[0]) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        slug: product.slug
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our exquisite collection of authentic Kashmiri handicrafts, 
            each piece telling a story of tradition and artistry.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="bg-amber-600 hover:bg-amber-700"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="bg-amber-600 hover:bg-amber-700"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {products.length} product{products.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`product-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                      viewMode === 'list' ? 'w-48 h-48' : 'w-full h-64'
                    }`}
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                  {product.comparePrice && (
                    <span className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}% OFF
                    </span>
                  )}
                  <button
                    onClick={() => handleToggleFavorite(product)}
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <Heart 
                      className={`w-5 h-5 ${isFavorite(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
                    />
                  </button>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="mb-2">
                    <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-amber-700">
                        {formatPrice(product.price)}
                      </span>
                      {product.comparePrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.comparePrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full btn-kashmiri"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}