import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Smartphone, 
  Mail, 
  MapPin,
  CreditCard,
  Shield,
  Truck,
  Headphones
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Company Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-gray-900 text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/about" className="hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base">About Hanouti</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base">Contact us</Link></li>     
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-gray-900 text-base sm:text-lg font-semibold mb-3 sm:mb-4">Customer Service</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/returns" className="hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base">Return and refund policy</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base">pricing info</Link></li>
              <li><Link href="/report-activity" className="hover:text-blue-600 transition-colors duration-200 flex items-center text-sm sm:text-base">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0 text-gray-600" />
                <span>Report suspicious activity</span>
              </Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-gray-900 text-base sm:text-lg font-semibold mb-3 sm:mb-4">Help</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/support" className="hover:text-blue-600 transition-colors duration-200 flex items-center text-sm sm:text-base">
                <Headphones className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0 text-gray-600" />
                <span>Support center & FAQ</span>
              </Link></li>
            
            
            
              
            </ul>
          </div>

          {/* Download App & Social Section */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-gray-900 text-base sm:text-lg font-semibold mb-3 sm:mb-4">Download hanouti App</h3>
              <div className="space-y-2 sm:space-y-3">
                <Link href="/app-store" className="flex items-center bg-gray-900 hover:bg-gray-800 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2 border border-gray-300 w-full sm:w-auto">
                  <div className="mr-3 flex-shrink-0">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-black text-xs font-bold">A</span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </Link>
                <Link href="/google-play" className="flex items-center bg-gray-900 hover:bg-gray-800 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2 border border-gray-300 w-full sm:w-auto">
                  <div className="mr-3 flex-shrink-0">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs">▶</span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 text-base sm:text-lg font-semibold mb-3 sm:mb-4">Stay Connected</h3>
              <div className="flex space-x-3 sm:space-x-4">
                <Link href="/instagram" className="bg-gray-100 hover:bg-pink-100 hover:text-pink-600 transition-colors duration-200 p-2 sm:p-2.5 rounded-full border border-gray-200">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link href="/twitter" className="bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 p-2 sm:p-2.5 rounded-full border border-gray-200">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link href="/youtube" className="bg-gray-100 hover:bg-red-100 hover:text-red-600 transition-colors duration-200 p-2 sm:p-2.5 rounded-full border border-gray-200">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 gap-4">
            
            {/* Payment Methods */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">We accept:</span>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                <div className="bg-blue-600 rounded px-2 py-1">
                  <span className="text-white font-bold text-xs">VISA</span>
                </div>
                <div className="bg-red-600 rounded px-2 py-1">
                  <span className="text-white font-bold text-xs">MC</span>
                </div>
                <div className="bg-blue-600 rounded px-2 py-1">
                  <span className="text-white font-bold text-xs">AMEX</span>
                </div>
                <div className="bg-blue-800 rounded px-2 py-1">
                  <span className="text-white font-bold text-xs">PP</span>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-gray-600">
            
              <div className="flex items-center whitespace-nowrap">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0 text-blue-600" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <Headphones className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0 text-purple-600" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              © 2025 Hanouti. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">Terms and Conditions</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;