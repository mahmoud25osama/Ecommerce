import ScaleLoading from '../Loader/ScaleLoader';
import useAllProduct from '../../CustomHooks/useAllProduct';
import { Eye, ShoppingCart, Star } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import { useDispatch } from 'react-redux';
import { openCart } from "../../Redux/ToggleCartSlice"
import { ProductCard } from '../ProductDetails/ProductCard';
import { useNavigate } from 'react-router-dom';

export const FeaturedProducts = () => {
    const { addProduct } = useContext(CartContext);
    const { data, isError, isLoading } = useAllProduct();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlAddProduct = async (id) => {
        await addProduct(id,
            {
                onSuccess: () => {
                    dispatch(openCart());
                }
            }
        )

    }

    let AllProducts = data?.data?.data || [];


    return (
        <section className="py-20 bg-gray-50" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Featured Products</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Handpicked items that combine style, quality, and innovation
                    </p>
                </div>
                {/* Highest Sold Product */}
                {AllProducts.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-700 mb-4 text-left">🔥 Highest Sold Product</h3>
                        {(() => {
                            const highestSold = [...AllProducts].sort((a, b) => (b.sold || 0) - (a.sold || 0))[0];
                            if (!highestSold) return null;
                            return (
                                <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg p-6 mb-8">
                                    <img
                                        src={highestSold.imageCover}
                                        alt={highestSold.title}
                                        className="w-48 h-48 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-8"
                                    />
                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{highestSold.title}</h4>
                                        <div className="flex items-center mb-2">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(highestSold.ratingsAverage) ? 'fill-current' : ''}`} />
                                                ))}
                                            </div>
                                            <span className="text-gray-600 text-sm ml-2">({highestSold.ratingsQuantity})</span>
                                        </div>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <span className="text-2xl font-bold text-gray-900">${highestSold.price}</span>
                                            {highestSold.price > highestSold.priceAfterDiscount && (
                                                <span className="text-xl text-gray-500 line-through">${highestSold.price}</span>
                                            )}
                                        </div>
                                        <div className="text-gray-600 mb-2">
                                            Sold: <span className="font-bold text-blue-600">{highestSold.sold || 0}</span>
                                        </div>
                                        <button
                                            onClick={() => handlAddProduct(highestSold._id)}
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-6 rounded-xl font-semibold transition-all duration-300 mt-2"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}
                {/* Featured Products */}
                <div >
                    {isError ? (
                        <div >
                            <ScaleLoading />
                        </div>
                    ) : isLoading ? (
                        <ScaleLoading />
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[...AllProducts].sort(() => Math.random()).slice(0, 8).map((product) => (
                                    <ProductCard
                                        key={product._id}
                                        product={product}
                                        onQuickView={() => navigate(`/productDetails/${product._id}`)}
                                        onAddToCart={() => handlAddProduct(product._id)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
