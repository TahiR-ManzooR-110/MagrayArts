# 🏺 MagrayArts - Authentic Kashmiri Handicrafts Ecommerce Platform

A modern, feature-rich ecommerce website built with the latest technologies, showcasing exquisite Kashmiri handicrafts. This platform combines traditional artistry with cutting-edge web development.

![MagrayArts Banner](https://via.placeholder.com/1200x300/F59E0B/FFFFFF?text=MagrayArts+-+Kashmiri+Heritage)

## ✨ Features

### 🛍️ **Customer Features**
- **Beautiful Product Catalog** - Browse authentic Kashmiri handicrafts with stunning visuals
- **Advanced Search & Filters** - Find products by category, price, rating, and more
- **Shopping Cart & Wishlist** - Add items to cart and save favorites
- **User Authentication** - Secure login/signup with NextAuth.js
- **Responsive Design** - Perfect experience on all devices
- **Animated UI** - Smooth animations powered by Framer Motion
- **Multi-Currency Support** - Prices reflect user's country currency
- **Secure Checkout** - Multiple payment options including Stripe and COD
- **Order Tracking** - Complete order management system

### 🔧 **Admin Features**
- **Secure Admin Dashboard** - Role-based access control
- **Product Management** - Full CRUD operations for products
- **Category Management** - Organize products efficiently
- **Order Management** - Track and update order statuses
- **User Management** - Manage customer accounts
- **Analytics Dashboard** - Key metrics and insights
- **Inventory Tracking** - Stock management and alerts

### 🎨 **Design Features**
- **Kashmiri-Inspired Theme** - Warm amber and orange color palette
- **Custom Animations** - Floating elements and hover effects
- **Pattern Backgrounds** - Traditional Kashmiri motifs
- **Modern Typography** - Clean, readable fonts
- **Gradient Text Effects** - Eye-catching headers
- **Custom Scrollbars** - Branded UI elements

## 🚀 Technology Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Beautiful icon library
- **Zustand** - State management

### **Backend & Database**
- **Prisma ORM** - Database toolkit with SQLite
- **NextAuth.js** - Authentication solution
- **bcryptjs** - Password hashing
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### **Payment & Features**
- **Stripe** - Payment processing
- **React Hot Toast** - Notifications
- **Embla Carousel** - Product image carousels
- **@tanstack/react-query** - Data fetching

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd magray-arts
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Environment Setup**
Copy the `.env` file and update the variables:
```bash
cp .env .env.local
```

Update the following variables in `.env.local`:
```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Stripe (Optional for demo)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
STRIPE_SECRET_KEY="your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"

# App Settings
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="MagrayArts"
```

### **4. Database Setup**
```bash
# Generate Prisma client
npx prisma generate

# Create database and tables
npx prisma db push

# Seed database with sample data
npx tsx prisma/seed.ts
```

### **5. Start Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🔑 Demo Credentials

### **Admin Access**
- **Email:** admin@magrayarts.com
- **Password:** admin123

### **Customer Access**
- **Email:** customer@example.com  
- **Password:** customer123

## 📁 Project Structure

```
magray-arts/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── admin/             # Admin dashboard pages
│   │   ├── auth/              # Authentication pages
│   │   ├── products/          # Product pages
│   │   └── api/               # API routes
│   ├── components/            # Reusable components
│   │   ├── ui/                # Base UI components
│   │   ├── layout/            # Layout components
│   │   └── providers/         # Context providers
│   ├── lib/                   # Utility libraries
│   │   ├── auth.ts            # Authentication config
│   │   ├── prisma.ts          # Database client
│   │   ├── store.ts           # State management
│   │   └── utils.ts           # Helper functions
│   └── types/                 # TypeScript type definitions
├── prisma/                    # Database schema and migrations
├── public/                    # Static assets
└── tailwind.config.ts         # Tailwind configuration
```

## 🎯 Key Features Implementation

### **State Management**
- **Zustand Store** - Cart, favorites, and UI state
- **Persistent Storage** - Cart and preferences saved locally
- **Real-time Updates** - Instant UI updates

### **Security**
- **Role-based Access** - Admin vs Customer permissions
- **Protected Routes** - Authentication middleware
- **Input Validation** - Zod schema validation
- **SQL Injection Prevention** - Prisma ORM protection

### **Performance**
- **Image Optimization** - Next.js automatic optimization
- **Code Splitting** - Automatic route-based splitting
- **Caching** - Next.js built-in caching
- **Lazy Loading** - Components loaded on demand

### **Accessibility**
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - Proper ARIA labels
- **Color Contrast** - WCAG compliant colors
- **Focus Management** - Visible focus indicators

## 🛒 Ecommerce Features

### **Product Management**
- Product catalog with categories
- Image galleries and zoom
- Stock management
- SEO optimization
- Product reviews and ratings

### **Shopping Experience**
- Advanced search and filtering
- Product comparison
- Wishlist functionality
- Recently viewed products
- Related product suggestions

### **Checkout Process**
- Guest checkout option
- Multiple payment methods
- Address management
- Order confirmation
- Email notifications

### **Order Management**
- Order tracking
- Status updates
- Return/refund process
- Order history
- Invoice generation

## 🎨 Customization

### **Colors & Branding**
The Kashmiri theme uses warm colors inspired by traditional handicrafts:
- **Primary:** Amber (#F59E0B)
- **Secondary:** Orange (#EA580C)
- **Accent:** Red (#DC2626)

### **Typography**
- **Font:** Inter (Google Fonts)
- **Headings:** Bold with gradient effects
- **Body:** Regular weight for readability

### **Animations**
- **Hover Effects** - Subtle scale and color transitions
- **Page Transitions** - Smooth enter/exit animations
- **Loading States** - Skeleton screens and spinners
- **Micro-interactions** - Button clicks and form interactions

## 🔧 Development

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### **Database Commands**
```bash
npx prisma studio           # Open Prisma Studio
npx prisma generate         # Generate Prisma client
npx prisma db push          # Push schema changes
npx prisma db pull          # Pull schema from database
npx prisma migrate dev      # Create and apply migration
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### **Manual Deployment**
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Kashmir Artisans** - For inspiring this beautiful craft tradition
- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Prisma** - For the excellent database toolkit
- **Framer Motion** - For smooth animations

## 📞 Support

For support, email info@magrayarts.com or join our Discord community.

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Multi-vendor support
- [ ] AR product preview
- [ ] International shipping calculator
- [ ] Subscription products
- [ ] Loyalty program
- [ ] Social commerce integration

---

**Built with ❤️ for preserving Kashmiri heritage through modern technology**
