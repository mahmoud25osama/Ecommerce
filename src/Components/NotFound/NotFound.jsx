import React from 'react'
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  const handleGoBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <Helmet><title>Not Found!</title></Helmet>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-indigo-900 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full text-center">
          {/* Animated 404 Text */}
          <div className="mb-8">
            <h1 className="text-9xl sm:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-pulse leading-none">
              404
            </h1>
          </div>

          {/* Main Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-white animate-bounce" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">
                Oops! Page Not Found
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                The page you're looking for seems to have wandered off into the digital void.
                Don't worry, it happens to the best of us!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to='/' className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Home className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Go Home
              </Link>

              <button onClick={handleGoBack} className="group inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute bottom-20 left-16 w-3 h-3 bg-indigo-400 rounded-full animate-bounce opacity-70"></div>
          <div className="absolute bottom-32 right-12 w-5 h-5 bg-blue-400 rounded-full animate-ping opacity-50"></div>
        </div>
      </div>
    </>
  );
}
