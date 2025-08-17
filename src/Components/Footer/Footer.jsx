import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Github, MessageCircleCode, } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ShopFlow
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Where Shopping Flows Naturally
              </p>
              <div className="flex space-x-4">
                <Link to="https://www.facebook.com/mahmoud.osama.550367" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link to="https://www.linkedin.com/in/ma252002/" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link to="https://wa.me/+201016074277" className="text-gray-400 hover:text-green-600/80 transition-colors">
                  <MessageCircleCode className="w-6 h-6" />
                </Link>
                <Link to="https://www.github.com/mahmoud25osama" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Shop</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">New Arrivals</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Best Sellers</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Sale</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Gift Cards</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Pages</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/products" className="hover:text-white transition-colors">Collections</Link></li>
                <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
                <li><Link to="/brands" className="hover:text-white transition-colors">Brands</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Other Sites</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="https://ali-dynasty-chronicles.vercel.app/" className="hover:text-white transition-colors">Ali-dynasty-chronicles</Link></li>
                <li><Link to="https://mahmoud25osama.github.io/HTML_And_CSS_Template_Three/" className="hover:text-white transition-colors">Elrouby World</Link></li>
                <li><Link to="https://mahmoud25osama.github.io/HTML_CSS_Template_Two/" className="hover:text-white transition-colors">Kasper - One Page</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-gray-400">
                © Mahmoud Osama. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-gray-400">We accept:</span>
                <div className="flex space-x-3">
                  <div className="bg-white rounded px-2 py-1">
                    <span className="text-blue-600 font-bold text-sm">VISA</span>
                  </div>
                  <div className="bg-white rounded px-2 py-1">
                    <span className="text-orange-600 font-bold text-sm">MC</span>
                  </div>
                  <div className="bg-white rounded px-2 py-1">
                    <span className="text-blue-800 font-bold text-sm">AMEX</span>
                  </div>
                  <div className="bg-white rounded px-2 py-1">
                    <span className="text-yellow-600 font-bold text-sm">PP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
