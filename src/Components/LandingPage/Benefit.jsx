import { Headphones, RotateCcw, Shield, Truck } from "lucide-react";

const benefits = [
{
    icon: <Truck className="w-8 h-8" />,
    title: "Free Shipping",
    description: "On orders over $50"
},
{
    icon: <Headphones className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Always here to help"
},
{
    icon: <RotateCcw className="w-8 h-8" />,
    title: "Easy Returns",
    description: "30-day return policy"
},
{
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Checkout",
    description: "100% secure payments"
}
];
export const Benefit = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Shop With Us</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Experience the difference with our commitment to excellence
                </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}
