import { useContext, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ScaleLoader from '../Loader/ScaleLoader';
import Button from '../../ReusableComponents/Button';
import useAllProduct from '../../CustomHooks/useAllProduct';
import { Minus, Plus, Star } from 'lucide-react';
import Badge from '../../ReusableComponents/Badge';
import { ProductCard } from './ProductCard';
import { CartContext } from '../../Context/CartContext/CartContext';

export default function ProductDetails() {
  const { data, isLoading, isError } = useAllProduct();
  const { addProduct, UpdateCount } = useContext(CartContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const products = data?.data?.data;
  const currentProduct = products?.find((p) => p._id === id);


  function handleUpdateCount({ id, newcount }) {
    UpdateCount(id, newcount);
  }

  function handleAddProduct(id) {
    addProduct(id);
  }



  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <ScaleLoader />
      </div>
    );
  }

  if (isLoading || !currentProduct) {
    return <ScaleLoader />;
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/products')} className="hover:text-blue-600">Shop</button>
          <span>/</span>
          <span className="text-gray-900">{currentProduct.title}</span>
        </div>

        {/* Current Product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={currentProduct.images?.[currentImageIndex] || currentProduct.imageCover}
                alt={currentProduct.title}
                className="w-full h-full object-cover"
              />
            </div>
            {currentProduct.images && currentProduct.images.length > 1 && (
              <div className="flex space-x-2">
                {currentProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${index === currentImageIndex ? 'border-blue-500' : 'border-gray-200'
                      }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {currentProduct.title}
              </h1>
              {/* Product Ratings & Reviews */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(currentProduct.ratingsAverage) ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <span className="text-gray-600">({currentProduct.ratingsQuantity} reviews)</span>
              </div>
              {/* Product Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">${currentProduct.price}</span>
                {currentProduct.price > currentProduct.priceAfterDiscount && (
                  <span className="text-xl text-gray-500 line-through">${currentProduct.price}</span>
                )}
                {currentProduct.price > currentProduct.priceAfterDiscount && (
                  <Badge variant="sale">
                    {Math.round((1 - currentProduct.priceAfterDiscount / currentProduct.price) * 100)}% OFF
                  </Badge>
                )}
              </div>
            </div>
            {/* Product Description */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 mb-4">{currentProduct.slug}</p>
              <p className="text-gray-600">{currentProduct.description}</p>
            </div>
            {/* Product Brands */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Brands</h3>
              <span>
                <Badge key={currentProduct.brand._id}>{currentProduct.brand.name}</Badge>
              </span>
            </div>
            {/* Product Counts */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleUpdateCount({ id: currentProduct.currentProduct._id, count: currentProduct.count - 1 })}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{currentProduct.count}</span>
                <button
                  onClick={() => handleUpdateCount({ id: currentProduct.currentProduct._id, count: currentProduct.count + 1 })}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button
                size="lg"
                onClick={() => handleAddProduct(currentProduct.currentProduct._id)}
                className="flex-1"
              >
                Add to Cart - ${(currentProduct.price * currentProduct.quantity).toFixed(2)}
              </Button>
            </div>
            {/* Product Categories */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Category:</span>
                  <span className="ml-2 font-medium">{currentProduct.category.name}</span>
                </div>
                <div>
                  <span className="text-gray-600">{currentProduct.quantity}:</span>
                  <span className="ml-2 font-medium text-green-600">In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}












// "data"= [
//   {
//     "sold": 18672,
//     "images": [
//       "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg",
//       "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg",
//       "https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg",
//       "https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg"
//     ],
//     "subcategory": [
//       {
//         "_id": "6407f1bcb575d3b90bf95797",
//         "name": "Women's Clothing",
//         "slug": "women's-clothing",
//         "category": "6439d58a0049ad0b52b9003f"
//       }
//     ],
//     "ratingsQuantity": 18,
//     "_id": "6428ebc6dc1175abc65ca0b9",
//     "title": "Woman Shawl",
//     "slug": "woman-shawl",
//     "description":
//     "quantity": 225,
//     "price": 191,
//     "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
//     "category": {
//       "_id": "6439d58a0049ad0b52b9003f",
//       "name": "Women's Fashion",
//       "slug": "women's-fashion",
//       "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
//     },
//     "brand": {
//       "_id": "64089bbe24b25627a253158b",
//       "name": "DeFacto",
//       "slug": "defacto",
//       "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
//     },
//     "ratingsAverage": 4.8,
//     "createdAt": "2023-04-02T02:43:18.400Z",
//     "updatedAt": "2025-08-05T18:55:36.632Z",
//     "id": "6428ebc6dc1175abc65ca0b9"
//   },

// ]














