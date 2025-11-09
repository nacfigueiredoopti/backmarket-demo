const FeaturedProducts = () => {
  const products = [
    {
      name: 'iPhone 13 Pro',
      price: '€649',
      originalPrice: '€1159',
      discount: '-44%',
      condition: 'Uitstekend',
      rating: 4.8,
      reviews: 2341
    },
    {
      name: 'MacBook Air M1',
      price: '€699',
      originalPrice: '€1129',
      discount: '-38%',
      condition: 'Als nieuw',
      rating: 4.9,
      reviews: 1567
    },
    {
      name: 'iPad Pro 11"',
      price: '€479',
      originalPrice: '€899',
      discount: '-47%',
      condition: 'Goed',
      rating: 4.7,
      reviews: 892
    },
    {
      name: 'AirPods Pro',
      price: '€159',
      originalPrice: '€279',
      discount: '-43%',
      condition: 'Uitstekend',
      rating: 4.6,
      reviews: 3241
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Populaire producten
            </h2>
            <p className="text-lg text-gray-600">
              De meest gekozen refurbished devices
            </p>
          </div>
          <button className="hidden md:block text-primary font-semibold hover:underline">
            Bekijk alles →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Product image placeholder */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>

                {/* Discount badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {product.discount}
                </div>

                {/* Condition badge */}
                <div className="absolute top-3 right-3 bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full border border-gray-300">
                  {product.condition}
                </div>

                {/* Wishlist icon */}
                <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Product info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                {/* Add to cart button */}
                <button className="w-full mt-4 bg-bm-dark text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition">
                  In winkelwagen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
