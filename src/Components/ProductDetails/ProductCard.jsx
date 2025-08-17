import {
    ShoppingCart, Star, Eye,
    Package,
} from 'lucide-react';
import Button from '../../ReusableComponents/Button';

export const ProductCard = ({ product, onQuickView, onAddToCart }) => {
    return (
        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            {/* Card Image  */}
            <div className="relative overflow-hidden">
                <img
                    src={product.imageCover}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.price > product.priceAfterDiscount && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Sale
                        </span>
                    </div>)}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                        <button
                            onClick={onQuickView}
                            className="bg-white text-gray-900 p-3 rounded-full  hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            <Eye className="w-5 h-5" />
                        </button>
                        <button
                            onClick={onAddToCart}
                            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Card Info */}
            <div className="p-6">
                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.ratingsAverage) ? 'fill-current' : ''}`} />
                        ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({product.ratingsQuantity})</span>
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {product.title.split(' ').slice(0, 3).join(' ')}
                </h3>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        {product.price > product.priceAfterDiscount && (
                            <>
                                <span className="text-2xl font-bold text-gray-900">${product.priceAfterDiscount}</span>
                            </>
                        )}
                        <span className={`${product.price > product.priceAfterDiscount ? "text-gray-500 line-through" : "text-2xl font-bold text-gray-900"}`}>${product.price}</span>
                    </div>
                </div>

                <Button
                    onClick={onAddToCart}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-colors"
                >
                    Add to Cart
                </Button>
            </div>
            {/* Empty state */}
            {product?.length === 0 && (
                <div className="text-center py-12">
                    <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">No Products available</p>
                </div>
            )}
        </div>
    );
};
