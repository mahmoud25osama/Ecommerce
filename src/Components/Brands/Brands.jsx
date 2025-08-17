import { useQuery } from '@tanstack/react-query';
import ScaleLoader from '../Loader/ScaleLoader';
import axios from 'axios';
import Error from '../Error/Error';
import { Helmet } from 'react-helmet';

export default function Brands() {
  function getBrands() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands');
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['allBrands'],
    queryFn: getBrands,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isError) {
    return (
      <Error />
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <ScaleLoader />
      </div>
    );
  }

  return (
    <>
      <Helmet><title>Collections - Discover Amazing Brands</title></Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-4">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
              Our Brands
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Discover top-quality brands that we're proud to partner with
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {data.data.data.map((brand) => (
              <div
                key={brand._id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white">
                  <div className="aspect-square flex items-center justify-center">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 bg-white">
                  <h3 className="text-center text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 bg-gradient-to-r from-blue-50 to-indigo-50 py-2 px-3 rounded-lg border border-blue-100">
                    {brand.name}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">
                {data.data.data.length} premium brands available
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}