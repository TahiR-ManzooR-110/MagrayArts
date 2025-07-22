'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Package, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Eye,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Mock data - in a real app, this would come from APIs
const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    name: 'Total Orders',
    value: '2,345',
    change: '+15.3%',
    changeType: 'positive',
    icon: ShoppingCart,
  },
  {
    name: 'Total Products',
    value: '156',
    change: '+5.2%',
    changeType: 'positive',
    icon: Package,
  },
  {
    name: 'Total Customers',
    value: '1,234',
    change: '+12.5%',
    changeType: 'positive',
    icon: Users,
  },
]

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'Sarah Johnson',
    product: 'Royal Pashmina Shawl',
    amount: '$299.99',
    status: 'Processing',
    date: '2024-01-15',
  },
  {
    id: 'ORD-002',
    customer: 'Michael Chen',
    product: 'Kashmir Silk Carpet',
    amount: '$1,299.99',
    status: 'Shipped',
    date: '2024-01-14',
  },
  {
    id: 'ORD-003',
    customer: 'Emily Davis',
    product: 'Walnut Wood Elephant',
    amount: '$149.99',
    status: 'Delivered',
    date: '2024-01-13',
  },
  {
    id: 'ORD-004',
    customer: 'Robert Wilson',
    product: 'Papier Mâché Box',
    amount: '$79.99',
    status: 'Pending',
    date: '2024-01-12',
  },
]

const topProducts = [
  {
    name: 'Royal Pashmina Shawl',
    sales: 45,
    revenue: '$13,495',
    image: '/api/placeholder/60/60',
  },
  {
    name: 'Kashmir Silk Carpet',
    sales: 23,
    revenue: '$29,899',
    image: '/api/placeholder/60/60',
  },
  {
    name: 'Walnut Wood Elephant',
    sales: 67,
    revenue: '$10,049',
    image: '/api/placeholder/60/60',
  },
  {
    name: 'Papier Mâché Box',
    sales: 89,
    revenue: '$7,119',
    image: '/api/placeholder/60/60',
  },
]

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg shadow-lg p-6 text-white"
      >
        <h1 className="text-2xl font-bold mb-2">Welcome to MagrayArts Admin Dashboard</h1>
        <p className="opacity-90">Manage your Kashmiri handicraft business with ease and efficiency.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="text-lg font-medium text-gray-900">{stat.value}</dd>
                  </dl>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm">
                  {stat.changeType === 'positive' ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`ml-1 ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white shadow rounded-lg p-6"
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/admin/products/new">
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </Link>
          <Link href="/admin/categories/new">
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
          </Link>
          <Link href="/admin/orders">
            <Button variant="outline" className="w-full">
              <Eye className="h-4 w-4 mr-2" />
              View Orders
            </Button>
          </Link>
          <Link href="/admin/analytics">
            <Button variant="outline" className="w-full">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Recent Orders and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white shadow rounded-lg"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <div key={order.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {order.customer}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {order.product}
                    </p>
                    <p className="text-xs text-gray-400">
                      {order.date} • {order.id}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-3 border-t border-gray-200">
            <Link href="/admin/orders">
              <Button variant="ghost" size="sm" className="w-full">
                View all orders
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white shadow rounded-lg"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Top Products</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {topProducts.map((product, index) => (
              <div key={index} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {product.sales} sales
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-3 border-t border-gray-200">
            <Link href="/admin/products">
              <Button variant="ghost" size="sm" className="w-full">
                View all products
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}