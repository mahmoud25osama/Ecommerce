import { useContext, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { openCart } from "../../Redux/ToggleCartSlice";
import { Link, NavLink } from 'react-router-dom'
import { Home, LibraryBig, LogOut, Menu, Phone, ShoppingBag, ShoppingCart, Store, Users, X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { CartContext } from '../../Context/CartContext/CartContext';
import { AuthContext } from '@/Context/AuthContext/AuthContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { token, setToken } = useContext(AuthContext);
  const { numOfCartItems } = useContext(CartContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('tkn');
    setToken(null);
    navigate('/login');
    setMobileMenuOpen(false);
  }


  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/products', label: 'Shop', icon: ShoppingBag },
    { to: '/categories', label: 'Collections', icon: LibraryBig },
    { to: '/brands', label: 'Brands', icon: Store },
    { to: '/about', label: 'About', icon: Users },
    { to: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md shadow-xl fixed w-full z-50 top-0 left-0 border-b border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div className="flex items-center">
              <Link
                to=""
                className="group flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  ShopFlow
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 ">
              {token && (
                <ul className="flex items-center space-x-1">
                  {navItems.map(({ to, label, icon: Icon }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 font-semibold ${isActive
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600'
                          }`
                        }
                      >
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>{label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">

              {/* Cart Button */}
              <button
                onClick={() => dispatch(openCart())}
                className="group relative p-3 bg-gradient-to-r from-purple-100 to-indigo-100 hover:from-purple-200 hover:to-indigo-200 rounded-xl transition-all duration-300 transform hover:scale-110"
              >
                <ShoppingCart className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
                {numOfCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
                    {numOfCartItems > 99 ? '99+' : numOfCartItems}
                  </span>
                )}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              {/* Auth Actions */}
              <div className="hidden lg:flex items-center space-x-3">
                {token ? (
                  <button
                    onClick={handleLogout}
                    className="group flex flex-col items-center space-y-1 px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-xl transition-all duration-300 cursor-pointer"
                  >
                    <LogOut className="w-5 h-5 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                    <span className="text-xs font-semibold text-red-600 group-hover:text-red-700">Logout</span>
                  </button>
                ) : (
                  <div className="flex items-center space-x-2">
                    <NavLink
                      to="/login"
                      className="px-6 py-2 text-purple-600 hover:text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-xl transition-all duration-300 transform hover:scale-110"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Mobile Menu */}
          <div className="fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-6">

              {/* Mobile Navigation Links */}
              {token && (
                <div className="space-y-2 mb-8">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Navigation</h3>
                  {navItems.map(({ to, label, icon: Icon }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 ${isActive
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600'
                        }`
                      }
                    >
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-lg">{label}</span>
                    </NavLink>
                  ))}
                </div>
              )}

              {/* Mobile Auth Actions */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Account</h3>

                {token ? (
                  <button
                    onClick={handleLogout}
                    className="w-full group flex items-center space-x-4 px-4 py-4 bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-2xl transition-all duration-300"
                  >
                    <div className="p-2 bg-red-100 rounded-lg">
                      <LogOut className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="font-semibold text-lg text-red-600">Logout</span>
                  </button>
                ) : (
                  <div className="space-y-3">
                    <NavLink
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center py-3 text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:bg-purple-50 transition-all duration-300"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Mobile Cart Info */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Items in Cart</span>
                  <span className="text-2xl font-bold text-purple-600">
                    {numOfCartItems || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}