const CategoryGrid = () => {
  const categories = [
    {
      name: 'iPhone',
      image: '📱',
      discount: 'Tot -40%',
      description: 'Refurbished iPhones',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Samsung',
      image: '📱',
      discount: 'Tot -50%',
      description: 'Samsung smartphones',
      color: 'from-gray-700 to-gray-800'
    },
    {
      name: 'MacBook',
      image: '💻',
      discount: 'Tot -60%',
      description: 'Apple MacBooks',
      color: 'from-slate-600 to-slate-700'
    },
    {
      name: 'iPad',
      image: '📱',
      discount: 'Tot -45%',
      description: 'Refurbished iPads',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'AirPods',
      image: '🎧',
      discount: 'Tot -35%',
      description: 'Apple AirPods',
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Apple Watch',
      image: '⌚',
      discount: 'Tot -55%',
      description: 'Refurbished watches',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Gaming',
      image: '🎮',
      discount: 'Tot -40%',
      description: 'Consoles & more',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Laptops',
      image: '💻',
      discount: 'Tot -65%',
      description: 'Windows laptops',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop op categorie
          </h2>
          <p className="text-lg text-gray-600">
            Ontdek refurbished tech voor elke behoefte
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Discount badge */}
              <div className="absolute top-3 right-3 bg-bm-dark text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                {category.discount}
              </div>

              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative p-6 flex flex-col items-center justify-center min-h-[200px]">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-3 right-3 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
