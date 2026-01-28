# Sanasya Bakery Catalogue

A production-ready, mobile-first enquiry-based static menu catalogue website for a premium bakery.

## Features

- **Mobile-First Design**: Fully responsive layout optimised for all device sizes
- **Static Content**: No backend required, perfect for Vercel deployment
- **Smooth Animations**: Framer Motion for subtle, performant interactions
- **Type-Safe**: Full TypeScript support
- **Modern Stack**: Next.js 14, React 18, Tailwind CSS 3
- **Accessibility**: WCAG compliance with focus on keyboard navigation and screen readers
- **Enquiry-Based Model**: Multiple contact channels (WhatsApp, Phone, Email, Instagram)
- **No Pricing Display**: Encourages user engagement through contact

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Visit `http://localhost:3000` to see the website.

## Project Structure

```
.
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   └── not-found.tsx        # 404 page
├── components/              # Reusable React components
│   ├── Header.tsx           # Navigation header with mobile menu
│   ├── Hero.tsx             # Hero section with CTA
│   ├── MenuCard.tsx         # Individual menu item card
│   ├── CategorySection.tsx  # Category wrapper with animations
│   ├── ContactButtons.tsx   # Contact action buttons
│   ├── ContactSection.tsx   # Contact & enquiry section
│   └── Footer.tsx           # Footer with links
├── data/                    # Static content
│   └── menu.ts              # Menu items and categories
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Configuration

### Environment Variables

Create a `.env.local` file based on `.env.local.example`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
NEXT_PUBLIC_PHONE_NUMBER=your_phone_number
NEXT_PUBLIC_EMAIL=your_email
NEXT_PUBLIC_INSTAGRAM_URL=your_instagram_url
```

### Adding Menu Items

Edit `data/menu.ts` to add, remove, or modify menu items:

```typescript
export const menuItems: MenuItem[] = [
  {
    id: 'unique-id',
    title: 'Item Title',
    description: 'Item description',
    category: 'Biscuit' | 'Cake' | 'Dessert',
  },
  // ... more items
]
```

## Design System

### Colour Palette
- **Cream**: `#FBF8F3` - Primary background
- **Chocolate**: `#3E2723` - Primary text
- **Caramel**: `#D4A574` - Accent/CTA
- **Sage**: `#8B9B8E` - Secondary accent
- **Blush**: `#F0E6E1` - Secondary background

### Typography
- **Serif**: Georgia (headings)
- **Sans**: Inter (body text)

## Animations

All animations respect user preferences:
- Uses `prefers-reduced-motion` media query
- Framer Motion for performant transitions
- Smooth scroll behavior on navigation

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy with a single click

```bash
# Or deploy via CLI
npx vercel
```

### Other Platforms

This is a static Next.js site with no server-side dependencies. It can be deployed to:
- Netlify
- GitHub Pages (with `next export`)
- Any static hosting service

## Performance

- **Core Web Vitals**: Optimised for all metrics
- **Image Optimisation**: Next.js Image component ready
- **Code Splitting**: Automatic with Next.js
- **Minification**: Built-in with production builds
- **Caching**: Static content caching strategies

## SEO

- Meta tags and Open Graph support
- Semantic HTML structure
- Clean URL structure
- Mobile-friendly design
- Sitemap-ready structure

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- ARIA labels where appropriate
- Keyboard navigation support
- Focus states on interactive elements
- Semantic HTML
- Sufficient colour contrast
- Text alternatives for interactive elements

## License

This project is proprietary and confidential.

## Support

For issues or feature requests, please contact the development team.
