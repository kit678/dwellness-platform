import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#6B4E71] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Dwellness</h2>
            <p className="text-sm">Empowering your journey to wellness, one step at a time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#F7F4EF] transition-colors">Home</Link></li>
              <li><Link href="/classes" className="hover:text-[#F7F4EF] transition-colors">Classes</Link></li>
              <li><Link href="/quizzes" className="hover:text-[#F7F4EF] transition-colors">Quizzes</Link></li>
              <li><Link href="/community" className="hover:text-[#F7F4EF] transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-[#F7F4EF] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#F7F4EF] transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-[#F7F4EF] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#F7F4EF] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7F4EF] transition-colors">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7F4EF] transition-colors">
                <Twitter />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7F4EF] transition-colors">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7F4EF] transition-colors">
                <Linkedin />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-white text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F7F4EF]"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#F7F4EF] text-[#6B4E71] rounded-r-md hover:bg-[#9D8AA5] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#9D8AA5] text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Dwellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}