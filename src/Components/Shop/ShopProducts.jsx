import Loader from '../Loader/ScaleLoader';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Package, Search } from 'lucide-react';
import Input from '../../ReusableComponents/Input';
import { ProductCard } from '../ProductDetails/ProductCard';
import useAllProduct from '../../CustomHooks/useAllProduct';
import { CartContext } from '../../Context/CartContext/CartContext';
import { useDispatch } from 'react-redux';
import { openCart } from "../../Redux/ToggleCartSlice"
import { Helmet } from 'react-helmet';
import Error from '../Error/Error';


export default function ShopProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addProduct } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data, isError, isLoading } = useAllProduct();

  if (isError) {
    return (
      <Error />
    );
  }

  if (isLoading) {
    return (
      <Loader />
    );
  }

  function handlAddProduct(id) {
    addProduct(id,
      {
        onSuccess: () => {
          dispatch(openCart());
        }
      }
    );
  }

  let AllProducts = data?.data?.data || [];

  // Filtering Product
  const getFilteredProducts = () => {
    let filtered = AllProducts;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category.name && product.category.name === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.category && product.category.name && product.category.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.ratingsAverage - a.ratingsAverage;
        default:
          if (!a.name && !b.name) return 0;
          if (!a.name) return 1;
          if (!b.name) return -1;
          return a.name.localeCompare(b.name);
      }
    });
    return filtered;
  };

  const categories = ['all', ...Array.from(new Set(AllProducts.map(p => p.category.name && p.category.name ? p.category.name : ''))).filter(Boolean)];

  const filteredProducts = getFilteredProducts();

  return (
    <>
      <Helmet><title>Shop Products</title></Helmet>
      <div className="py-8 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop All Products</h1>

          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories SideBar */}
            <div className="lg:w-64 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              {/* Product Items & Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    onQuickView={() => navigate(`/productDetails/${product._id}`)}
                    onAddToCart={() => handlAddProduct(product._id)}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>


        </div>
      </div>
    </>);
};