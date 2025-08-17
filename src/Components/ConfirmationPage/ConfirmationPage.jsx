
import { useContext } from 'react';
import RingLoaders from '../Loader/ScaleLoader';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import Button from '../../ReusableComponents/Button';
import { CartContext } from '../../Context/CartContext/CartContext';
import { Helmet } from 'react-helmet';

export default function ConfirmationPage() {
  const { cartProduct, isLoading, isError, total, shipping, tax, subtotal, numOfCartItems, UpdateCount, deleteProduct, clearProducts } = useContext(CartContext);
  const navigate = useNavigate();
  function handleUpdateCount(id, newcount) {
    UpdateCount(id, newcount);
  }

  async function handleDeleteProduct(id) {
    await deleteProduct(id);
  }


  async function handleClearProducts() {
    await clearProducts();
  }




  return <>
    <Helmet><title>Confirmation</title></Helmet>
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cart */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Order Confirmation</h1>
        {isError && (<div className="text-red-500 mb-4">Error loading cart data</div>)}
        {cartProduct?.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Button onClick={() => navigate('/products')}>
              Continue Shopping
            </Button>
          </div>
        ) : isLoading ? (<RingLoaders />) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-900">Order Items</h2>
                <Button
                  variant="danger"
                  onClick={handleClearProducts}
                  className="flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear order
                </Button>
              </div>
              {cartProduct?.map((item) => (
                <div key={item.product._id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.product.imageCover}
                      alt={item.product.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">{item.product.title.split(' ').slice(0, 3).join(' ')}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleUpdateCount(item.product._id, item.count - 1)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 border border-gray-300 rounded">{item.count}</span>
                      <button
                        onClick={() => handleUpdateCount(item.product._id, item.count + 1)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">${(item.price * item.count).toFixed(2)}</p>
                      <button
                        onClick={() => handleDeleteProduct(item.product._id)}
                        className="text-red-500 hover:text-red-700 transition-colors mt-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({numOfCartItems} items)</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'Free' : `${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => navigate('/checkOut')}
                className="w-full"
                size="lg"
              >
                Proceed to Checkout
              </Button>
              <Link
                to={'/products'}
                className="w-full mt-4 text-blue-600 hover:text-blue-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>

  </>

}