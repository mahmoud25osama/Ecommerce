import heroImg from '../../assets/img/mainabout.334f9a75.webp';
import storyImg from '../../assets/img/aboutteemwork2.webp';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>
      <Helmet><title>About Us</title></Helmet>
      <div className="bg-white pb-5">
        {/* Hero Section */}
        <div className="relative w-full h-[340px] md:h-[450px] flex items-center justify-center mb-12">
          <img src={heroImg} alt="About Us Banner" className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">About Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium tracking-wide">Style meets simplicity</p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 mb-16 px-4">
          <div className="md:w-1/2 w-full">
            <img src={storyImg} alt="Our Story" className="rounded-xl shadow-lg w-full object-cover h-[320px] md:h-[400px]" />
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded with a passion for effortless style, our brand was born from the belief that fashion should be both inspiring and accessible. We started as a small team of dreamers, united by a love for design and a desire to make everyday dressing joyful and easy.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to empower you to express your individuality with confidence. Every piece is thoughtfully crafted, blending timeless elegance with modern simplicity—so you can look and feel your best, always.
            </p>
            <p className="text-lg text-gray-700">
              What sets us apart? A relentless focus on quality, sustainability, and you—our community. Thank you for being part of our journey.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-blue-50 py-12 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <span className="text-blue-500 text-4xl mb-3"><i className="fas fa-gem"></i></span>
                <h3 className="font-semibold text-lg mb-2">Quality Materials</h3>
                <p className="text-gray-600">We source only the finest fabrics and materials for lasting comfort and style.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-blue-500 text-4xl mb-3"><i className="fas fa-lightbulb"></i></span>
                <h3 className="font-semibold text-lg mb-2">Thoughtful Design</h3>
                <p className="text-gray-600">Every detail is considered, from fit to finish, for pieces you'll love to wear.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-blue-500 text-4xl mb-3"><i className="fas fa-leaf"></i></span>
                <h3 className="font-semibold text-lg mb-2">Sustainable Practices</h3>
                <p className="text-gray-600">We care for the planet with eco-friendly processes and mindful production.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-blue-500 text-4xl mb-3"><i className="fas fa-users"></i></span>
                <h3 className="font-semibold text-lg mb-2">Customer First</h3>
                <p className="text-gray-600">Your happiness is our priority. We're here to support you every step of the way.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team/Philosophy Section */}
        <div className="container mx-auto mb-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-700 mb-2">Our founder, Alex Morgan, leads with a vision for authentic, effortless style. Together, our team is dedicated to creating pieces that inspire confidence and celebrate individuality.</p>
            <p className="text-lg text-gray-700">We believe in building a community where everyone feels seen, valued, and empowered to express themselves.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center mb-20">
          <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition text-lg">Shop Now</a>
        </div>
      </div>
    </>
  );
}
