import { useContext } from 'react';
import Button from '../../ReusableComponents/Button';
import Input from '../../ReusableComponents/Input';
import { useFormik } from 'formik';
import axios from 'axios';
import { CartContext } from '../../Context/CartContext/CartContext';


const CheckoutPage = () => {
    const { cartId, cartProduct, total, shipping, tax, subtotal, clearProducts } = useContext(CartContext);

    function onlinePayment(values) {
        const BackRequest = {
            shippingAddress: values,
        }
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`, BackRequest, {
            headers: {
                token: localStorage.getItem('tkn'),
            },
            params: {
                url: "http://localhost:8080"
            }
        }).then((r) => {
            window.open(r.data.session.url, '_self');
            clearProducts();
        }).catch((e) => {
            console.log("error", e);
        });
    }



    const paymentFormik = useFormik(
        {
            initialValues: {
                email: '',
                FullName: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                phone: '',
                paymentMethod: 'card'
            },
            onSubmit: onlinePayment,
        }
    );

    return (<>
        <form onSubmit={paymentFormik.handleSubmit}>
            <div className="pt-16 min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Checkout Form */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shipping Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        type="text"
                                        placeholder="Full Name"
                                        name="FullName"
                                        id="FullName"
                                        required={true}
                                        value={paymentFormik.values.FullName}
                                        onBlur={paymentFormik.handleBlur}
                                        onChange={paymentFormik.handleChange}
                                    />

                                    <div className="md:col-span-2">
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            id="email"
                                            required={true}
                                            value={paymentFormik.values.email}
                                            onBlur={paymentFormik.handleBlur}
                                            onChange={paymentFormik.handleChange}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <Input
                                            placeholder="Address"
                                            name="address"
                                            id="address"
                                            required={true}
                                            value={paymentFormik.values.address}
                                            onBlur={paymentFormik.handleBlur}
                                            onChange={paymentFormik.handleChange}
                                        />
                                    </div>
                                    <Input
                                        placeholder="City"
                                        name="city"
                                        id='city'
                                        value={paymentFormik.values.city}
                                        onBlur={paymentFormik.handleBlur}
                                        onChange={paymentFormik.handleChange}
                                    />
                                    <Input
                                        placeholder="State"
                                        name="state"
                                        id="state"
                                        value={paymentFormik.values.state}
                                        onBlur={paymentFormik.handleBlur}
                                        onChange={paymentFormik.handleChange}
                                    />
                                    <Input
                                        placeholder="ZIP Code"
                                        name="zipCode"
                                        id="zipCode"
                                        value={paymentFormik.values.zipCode}
                                        onBlur={paymentFormik.handleBlur}
                                        onChange={paymentFormik.handleChange}
                                    />
                                    <Input
                                        type='phone'
                                        placeholder="Phone"
                                        name="phone"
                                        id="phone"
                                        required={true}
                                        value={paymentFormik.values.phone}
                                        onBlur={paymentFormik.handleBlur}
                                        onChange={paymentFormik.handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                {cartProduct.map((item) => (
                                    <div key={item._id} className="flex items-center space-x-3">
                                        <img
                                            src={item.product.imageCover}
                                            alt={item.product.title}
                                            className="w-12 h-12 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <p className="font-medium text-sm">{item.title}</p>
                                            <p className="text-gray-500 text-sm">Qty: {item.count}</p>
                                        </div>
                                        <span className="font-semibold">${(item.price * item.count).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 border-t pt-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
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
                                    <span className="font-semibold">${tax.toFixed(2)}</span>
                                </div>
                                <div className="border-t pt-3">
                                    <div className="flex justify-between text-lg font-bold">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <Button
                                onSubmit={paymentFormik.handleSubmit}
                                type='submit'
                                className="w-full mt-6"
                                size="lg"
                            >
                                Place Order
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
    );
};

export default CheckoutPage;