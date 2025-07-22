import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(price)
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function generateOrderNumber(): string {
  const timestamp = Date.now().toString()
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `MA-${timestamp.slice(-6)}-${random}`
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

export function calculateTax(subtotal: number, taxRate: number = 0.1): number {
  return subtotal * taxRate
}

export function calculateShipping(weight: number = 0, country: string = 'US'): number {
  const baseShipping = 10
  const weightMultiplier = 0.5
  const internationalMultiplier = country === 'US' ? 1 : 2
  
  return (baseShipping + (weight * weightMultiplier)) * internationalMultiplier
}