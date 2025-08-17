import { Star } from 'lucide-react';
import { Testimonial } from './Testimonial';
import SimpleSlider from '../HomeSlick/HomeSlick';
import { Benefit } from './Benefit';
import { FeaturedProducts } from './FeaturedProducts';
import { NewsLetter } from './NewsLetter';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EcommerceLanding = () => {


  return (
    <>
      <Helmet><title>Ecommerce</title></Helmet>
      <div className="min-h-screen bg-white">

        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-700 to-indigo-900 min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white  space-y-8">
                <div className="space-y-6 ">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Elevate Your
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Style
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                    Discover premium products that define modern elegance and exceptional quality
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row  gap-4">
                  <Link to={'/products'} className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    Shop Now
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                  <Link to={'/categories'} className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                    Explore Collection
                  </Link>
                </div>

                <div className="flex items-center space-x-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-gray-400">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">1M+</div>
                    <div className="text-gray-400">Products Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">4.9</div>
                    <div className="flex text-yellow-400 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:inline">
                <div className="relative z-10">
                  <SimpleSlider />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedProducts />
        <Benefit />
        <Testimonial />
        <NewsLetter />

      </div>
    </>
  );
};

export default EcommerceLanding;


