import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const adminEmail = 'admin@magrayarts.com'
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail }
  })

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin User',
        role: 'ADMIN',
        phone: '+1-555-0123',
        address: '123 Admin Street',
        city: 'Srinagar',
        country: 'India',
        postalCode: '190001'
      }
    })
    console.log('✅ Admin user created')
  }

  // Create categories
  const categories = [
    {
      name: 'Pashmina Shawls',
      description: 'Luxurious handwoven Pashmina shawls from Kashmir',
      slug: 'pashmina-shawls',
      image: '/images/categories/pashmina.jpg'
    },
    {
      name: 'Carpets & Rugs',
      description: 'Exquisite hand-knotted Kashmir carpets and rugs',
      slug: 'carpets-rugs',
      image: '/images/categories/carpets.jpg'
    },
    {
      name: 'Wood Carvings',
      description: 'Traditional walnut wood carvings and sculptures',
      slug: 'wood-carvings',
      image: '/images/categories/wood.jpg'
    },
    {
      name: 'Papier Mâché',
      description: 'Colorful papier mâché decorative items',
      slug: 'papier-mache',
      image: '/images/categories/papier.jpg'
    },
    {
      name: 'Jewelry',
      description: 'Traditional Kashmiri jewelry and accessories',
      slug: 'jewelry',
      image: '/images/categories/jewelry.jpg'
    }
  ]

  const createdCategories = []
  for (const category of categories) {
    const existing = await prisma.category.findUnique({
      where: { slug: category.slug }
    })
    
    if (!existing) {
      const created = await prisma.category.create({ data: category })
      createdCategories.push(created)
    } else {
      createdCategories.push(existing)
    }
  }
  console.log('✅ Categories created')

  // Create products
  const products = [
    {
      name: 'Royal Pashmina Shawl - Burgundy',
      description: 'Exquisite handwoven Pashmina shawl made from the finest goat wool. This burgundy masterpiece features intricate paisley patterns and represents centuries of Kashmiri craftsmanship.',
      price: 299.99,
      comparePrice: 399.99,
      images: JSON.stringify(['/images/products/pashmina1-1.jpg', '/images/products/pashmina1-2.jpg']),
      slug: 'royal-pashmina-shawl-burgundy',
      sku: 'PS-ROY-BUR-001',
      stock: 15,
      isFeatured: true,
      materials: '100% Pure Pashmina Wool',
      dimensions: '200cm x 70cm',
      weight: 0.2,
      categoryId: createdCategories[0].id,
      metaTitle: 'Royal Burgundy Pashmina Shawl | Authentic Kashmir',
      metaDescription: 'Luxury Pashmina shawl in burgundy with paisley patterns. Handwoven by master artisans in Kashmir.'
    },
    {
      name: 'Kashmir Silk Carpet - 4x6 ft',
      description: 'Hand-knotted silk carpet featuring traditional Kashmiri motifs. Each knot is carefully placed by skilled artisans, creating a timeless piece of art for your home.',
      price: 1299.99,
      comparePrice: 1599.99,
      images: JSON.stringify(['/images/products/carpet1-1.jpg', '/images/products/carpet1-2.jpg']),
      slug: 'kashmir-silk-carpet-4x6',
      sku: 'CP-SLK-46-001',
      stock: 8,
      isFeatured: true,
      materials: '100% Pure Silk',
      dimensions: '4ft x 6ft',
      weight: 5.5,
      categoryId: createdCategories[1].id,
      metaTitle: 'Kashmir Silk Carpet 4x6 ft | Hand-knotted Luxury',
      metaDescription: 'Authentic hand-knotted Kashmir silk carpet with traditional motifs. Premium quality and craftsmanship.'
    },
    {
      name: 'Walnut Wood Elephant Sculpture',
      description: 'Beautifully carved walnut wood elephant sculpture showcasing the intricate woodworking skills of Kashmiri artisans. Perfect as a decorative piece or gift.',
      price: 149.99,
      comparePrice: 199.99,
      images: JSON.stringify(['/images/products/wood1-1.jpg', '/images/products/wood1-2.jpg']),
      slug: 'walnut-wood-elephant-sculpture',
      sku: 'WD-ELE-WAL-001',
      stock: 25,
      isFeatured: true,
      materials: 'Premium Walnut Wood',
      dimensions: '15cm x 10cm x 8cm',
      weight: 0.8,
      categoryId: createdCategories[2].id,
      metaTitle: 'Walnut Wood Elephant Sculpture | Kashmir Handicraft',
      metaDescription: 'Hand-carved walnut wood elephant sculpture from Kashmir. Exquisite detail and craftsmanship.'
    },
    {
      name: 'Papier Mâché Decorative Box',
      description: 'Vibrant papier mâché decorative box with traditional Kashmiri floral patterns. Hand-painted with natural colors and finished with gold accents.',
      price: 79.99,
      comparePrice: 99.99,
      images: JSON.stringify(['/images/products/papier1-1.jpg', '/images/products/papier1-2.jpg']),
      slug: 'papier-mache-decorative-box',
      sku: 'PM-BOX-DEC-001',
      stock: 30,
      isFeatured: true,
      materials: 'Papier Mâché, Natural Colors',
      dimensions: '20cm x 15cm x 8cm',
      weight: 0.3,
      categoryId: createdCategories[3].id,
      metaTitle: 'Papier Mâché Decorative Box | Traditional Kashmir Art',
      metaDescription: 'Hand-painted papier mâché decorative box with floral patterns. Authentic Kashmiri craftsmanship.'
    },
    {
      name: 'Pashmina Shawl - Cream with Gold Border',
      description: 'Elegant cream-colored Pashmina shawl with hand-embroidered gold border. Perfect for special occasions and formal wear.',
      price: 249.99,
      comparePrice: 329.99,
      images: JSON.stringify(['/images/products/pashmina2-1.jpg', '/images/products/pashmina2-2.jpg']),
      slug: 'pashmina-shawl-cream-gold-border',
      sku: 'PS-CRM-GLD-002',
      stock: 20,
      isFeatured: false,
      materials: '100% Pure Pashmina Wool, Gold Thread',
      dimensions: '200cm x 70cm',
      weight: 0.25,
      categoryId: createdCategories[0].id,
      metaTitle: 'Cream Pashmina Shawl with Gold Border | Luxury Kashmir',
      metaDescription: 'Elegant cream Pashmina shawl with hand-embroidered gold border. Perfect for special occasions.'
    },
    {
      name: 'Traditional Kashmiri Silver Jewelry Set',
      description: 'Complete silver jewelry set including necklace, earrings, and bracelet. Features traditional Kashmiri designs with semi-precious stones.',
      price: 189.99,
      comparePrice: 249.99,
      images: JSON.stringify(['/images/products/jewelry1-1.jpg', '/images/products/jewelry1-2.jpg']),
      slug: 'traditional-kashmiri-silver-jewelry-set',
      sku: 'JW-SLV-SET-001',
      stock: 12,
      isFeatured: false,
      materials: '925 Sterling Silver, Semi-precious Stones',
      dimensions: 'Necklace: 45cm, Earrings: 3cm',
      weight: 0.1,
      categoryId: createdCategories[4].id,
      metaTitle: 'Traditional Kashmiri Silver Jewelry Set | Authentic Design',
      metaDescription: 'Complete silver jewelry set with traditional Kashmiri designs and semi-precious stones.'
    }
  ]

  for (const product of products) {
    const existing = await prisma.product.findUnique({
      where: { slug: product.slug }
    })
    
    if (!existing) {
      await prisma.product.create({ data: product })
    }
  }
  console.log('✅ Products created')

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })