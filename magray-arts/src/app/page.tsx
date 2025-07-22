'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  ArrowRight, 
  Truck, 
  Shield, 
  RotateCcw, 
  Award,
  MapPin,
  Palette
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useStore } from '@/lib/store'
import { formatPrice } from '@/lib/utils'

// Mock data for demonstration
const featuredProducts = [
  {
    id: '1',
    name: 'Handwoven Pashmina Shawl',
    price: 299.99,
    image: '/api/placeholder/400/400',
    rating: 4.9,
    reviews: 127,
    slug: 'handwoven-pashmina-shawl',
    isNew: true
  },
  {
    id: '2',
    name: 'Kashmir Silk Carpet',
    price: 1299.99,
    image: '/api/placeholder/400/400',
    rating: 4.8,
    reviews: 89,
    slug: 'kashmir-silk-carpet',
    isNew: false
  },
  {
    id: '3',
    name: 'Walnut Wood Carving',
    price: 149.99,
    image: '/api/placeholder/400/400',
    rating: 4.7,
    reviews: 203,
    slug: 'walnut-wood-carving',
    isNew: true
  },
  {
    id: '4',
    name: 'Papier Mâché Box',
    price: 79.99,
    image: '/api/placeholder/400/400',
    rating: 4.6,
    reviews: 156,
    slug: 'papier-mache-box',
    isNew: false
  }
]

const categories = [
  {
    name: 'Pashmina Shawls',
    image: '/api/placeholder/300/200',
    count: 45,
    href: '/categories/pashmina'
  },
  {
    name: 'Carpets & Rugs',
    image: '/api/placeholder/300/200',
    count: 32,
    href: '/categories/carpets'
  },
  {
    name: 'Wood Carvings',
    image: '/api/placeholder/300/200',
    count: 28,
    href: '/categories/wood-carvings'
  },
  {
    name: 'Papier Mâché',
    image: '/api/placeholder/300/200',
    count: 37,
    href: '/categories/papier-mache'
  }
]

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free shipping on orders over $100 worldwide'
  },
  {
    icon: Shield,
    title: 'Authentic Products',
    description: '100% authentic Kashmiri handicrafts'
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Easy returns within 30 days'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'Handpicked by artisan experts'
  }
]

const stats = [
  { number: '500+', label: 'Artisan Partners' },
  { number: '10,000+', label: 'Happy Customers' },
  { number: '50+', label: 'Years of Heritage' },
  { number: '25+', label: 'Countries Shipped' }
]

export default function HomePage() {
  const { addToCart, addToFavorites, isFavorite } = useStore()

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug
    })
  }

  const handleToggleFavorite = (product: typeof featuredProducts[0]) => {
    if (isFavorite(product.id)) {
      // Remove from favorites logic would go here
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 kashmiri-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">Authentic</span>
                <br />
                <span className="text-amber-800">Kashmiri</span>
                <br />
                <span className="text-orange-700">Handicrafts</span>
              </h1>
              <p className="text-xl text-amber-700 mb-8 leading-relaxed">
                Discover the timeless beauty of Kashmir through our exquisite collection 
                of handcrafted treasures. Each piece tells a story of heritage, artistry, 
                and generations of skilled craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/products">
                  <Button size="lg" className="btn-kashmiri text-lg px-8 py-4">
                    Explore Collection
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-amber-300 text-amber-800 hover:bg-amber-50">
                    Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative float-animation">
                <img
                  src="/api/placeholder/600/600"
                  alt="Kashmiri Handicraft"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Palette className="w-8 h-8 text-amber-600" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <MapPin className="w-8 h-8 text-red-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-amber-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked masterpieces that showcase the finest Kashmiri artistry. 
              Each piece is carefully selected for its exceptional quality and authentic heritage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="product-card bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                  <button
                    onClick={() => handleToggleFavorite(product)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <Heart 
                      className={`w-5 h-5 ${isFavorite(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
                    />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  
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
                    <span className="text-2xl font-bold text-amber-700">
                      {formatPrice(product.price)}
                    </span>
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button variant="outline" size="lg" className="border-amber-300 text-amber-800 hover:bg-amber-50">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of authentic Kashmiri crafts, 
              each category representing centuries of artistic tradition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={category.href} className="group block">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count} items</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:bg-amber-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Stay Connected with Kashmir
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter for exclusive offers, new arrivals, 
              and stories from our artisan community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-800"
              />
              <Button className="bg-white text-amber-800 hover:bg-gray-100 px-8 py-3">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
