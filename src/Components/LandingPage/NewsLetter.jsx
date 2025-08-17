import toast from 'react-hot-toast';
import {useState} from 'react';

export const NewsLetter = () => {
    const[email,setEmail]=useState(null);

const handleEmailSubmit = (e) => {
e.preventDefault();
email?
(toast.success(`Thank you for subscribing! Welcome email sent to ${email}`,{
    duration: 4000,
    position: 'top-center',
    style: {
    background: '#333',
    color: '#fff',
    fontSize: '16px',
    padding: '16px',
    borderRadius: '8px',
    }
})):(toast.error('Please enter a valid email address',{
    duration: 4000,
    position: 'top-center',
    style: {
    background: '#333',
    color: '#fff',
    fontSize: '16px',
    padding: '16px',
    borderRadius: '8px',
    }
}));
setEmail('');
};
return (
<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Get 10% Off Your First Order
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and style tips
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
            <input
            type="email"
            value={email??""}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button
            onClick={handleEmailSubmit}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
            Subscribe
            </button>
        </div>
        
        <p className="text-blue-100 text-sm">
            * No spam, unsubscribe at any time
        </p>
        </div>
    </div>
    </section>
)
}
