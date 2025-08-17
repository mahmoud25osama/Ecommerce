import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Trash2, ShoppingCart, ShoppingBag, Plus, Minus, ArrowRight, Package } from "lucide-react"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeCart, openCart } from "../../Redux/ToggleCartSlice"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext/CartContext"

export default function CartSheet() {
    const { total, cartProduct, deleteProduct } = useContext(CartContext)
    const { isOpen } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    async function handleDeleteProduct(id) {
        await deleteProduct(id);
    }

    return (
        <Sheet open={isOpen} onOpenChange={(open) => open ? dispatch(openCart()) : dispatch(closeCart())}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative group border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300">
                    <ShoppingCart className="h-5 w-5 text-purple-600 group-hover:text-purple-700" />
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-[450px] sm:w-[450px] bg-gradient-to-br from-white via-purple-50/90 to-indigo-50/30 border-l border-purple-100 overflow-auto"
            >
                {/* Header */}
                <SheetHeader className="pb-6 border-b border-purple-100">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                            <ShoppingBag className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
                                Your Cart
                            </SheetTitle>
                            <p className="text-sm text-gray-600 mt-1">
                                {cartProduct?.length || 0} {cartProduct?.length === 1 ? 'item' : 'items'}
                            </p>
                        </div>
                    </div>
                </SheetHeader>

                {/* Cart Content */}
                <div className="flex-1  py-6">
                    {cartProduct?.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-96 text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6">
                                <Package className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
                            <p className="text-gray-500 mb-6">Looks like you haven't added any items yet</p>
                            <Button
                                onClick={() => {
                                    dispatch(closeCart());
                                    navigate('/products');
                                }}
                                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Start Shopping
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartProduct.map((item, index) => (
                                <div
                                    key={item._id}
                                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Product Image */}
                                        <div className="relative">
                                            <img
                                                src={item.product.imageCover}
                                                alt={item.product.title}
                                                className="w-20 h-20 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-gray-800 mb-1 truncate">
                                                {item.product.title.split(" ").slice(0, 3).join(" ")}
                                            </h3>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-lg font-bold text-purple-600">
                                                    ${item.price.toFixed(2)}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    × {item.count}
                                                </span>
                                            </div>
                                            <div className="text-sm font-semibold text-gray-700 bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full inline-block">
                                                Total: ${(item.price * item.count).toFixed(2)}
                                            </div>
                                        </div>

                                        {/* Delete Button */}
                                        <Button
                                            onClick={() => handleDeleteProduct(item.product._id)}
                                            size="icon"
                                            className="w-10 h-10 bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 text-red-500 hover:text-red-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartProduct?.length > 0 && (
                    <div className="border-t border-purple-100 pt-6 mt-6 space-y-4">
                        {/* Summary */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-lg font-semibold text-gray-700">Subtotal:</span>
                                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                    ${total}
                                </span>
                            </div>

                            <div className="space-y-1 text-sm text-gray-600 mb-4">
                                <div className="flex justify-between">
                                    <span>Items ({cartProduct?.length})</span>
                                    <span>${total}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-semibold">Free</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-gray-800">Total:</span>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                        ${total}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <Button
                                onClick={() => {
                                    dispatch(closeCart());
                                    navigate('/cart');
                                }}
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg group"
                            >
                                <span>Proceed to Checkout</span>
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>

                            <Button
                                onClick={() => dispatch(closeCart())}
                                variant="outline"
                                className="w-full border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-600 hover:text-purple-700 py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                Continue Shopping
                            </Button>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}