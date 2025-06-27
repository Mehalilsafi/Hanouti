'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  Globe,
  BarChart3,
  TrendingUp,
  Truck,
  Grid3X3,
} from 'lucide-react'

export default function Sidebar({ onClose }) {
  const pathname = usePathname()

  const menuItems = [
    {
      href: '/',
      label: 'Home',
      icon: Home
    },
    {
      href: '/orders',
      label: 'Orders',
      icon: ShoppingCart
    },
    {
      href: '/products',
      label: 'Products',
      icon: Package
    },
    {
      href: '/leads',
      label: 'Leads',
      icon: Users
    },
    {
      href: '/landing',
      label: 'Landing Page',
      icon: Globe
    },
    {
      href: '/analytics',
      label: 'Analytics',
      icon: BarChart3
    },
    {
      href: '/sales-boosters',
      label: 'Sales Boosters',
      icon: TrendingUp
    },
    {
      href: '/delivery-pricing',
      label: 'Delivery Pricing',
      icon: Truck
    },
    {
      href: '/apps',
      label: 'Apps',
      icon: Grid3X3
    }
  ]

  const handleLinkClick = () => {
    
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className='flex flex-col h-full'>
      {/* Logo Section */}
      

      {/* Navigation Menu */}
      <nav className='flex-1 p-4'>
        <ul className='space-y-2'>
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
                    ${isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                    }
                  `}
                >
                  <Icon 
                    size={20} 
                    className={`
                      transition-colors
                      ${isActive 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                      }
                    `}
                  />
                  <span className='font-medium'>
                    {item.label}
                  </span>
                  {isActive && (
                    <div className='ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full'></div>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className='p-4 border-t border-gray-200 dark:border-gray-700'>
        <div className='text-xs text-gray-500 dark:text-gray-400 text-center'>
          <p>&copy; 2025 Hanouti</p>
          <p>Dashboard v1.0</p>
        </div>
      </div>
    </div>
  )
}