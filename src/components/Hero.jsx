import useShopButtonColor from '../hooks/useShopButtonColor';

const Hero = () => {
  const { buttonColor } = useShopButtonColor();

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bm-dark leading-tight">
              De refurbished
              <span className="block text-bm-dark">supermarkt</span>
            </h1>
            <p className="text-lg md:text-xl text-bm-gray">
              Refurbished tech, tot 70% goedkoper dan nieuw.
              Minimaal 1 jaar garantie. Duurzaam en betrouwbaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="text-white px-8 py-4 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-transform"
                style={{ backgroundColor: buttonColor }}
              >
                Shop nu
              </button>
              <button className="border-2 border-bm-dark text-bm-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                Hoe het werkt
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-bm-light-gray">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-bm-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-bm-dark font-medium">Min. 1 jaar garantie</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-bm-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-bm-dark font-medium">Gratis verzending</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-bm-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-bm-dark font-medium">30 dagen retourrecht</span>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  {/* iPhone illustration */}
                  <svg className="w-40 h-40 mx-auto mb-4" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* iPhone body */}
                    <rect x="20" y="10" width="160" height="380" rx="30" fill="#0e1016" stroke="#2f3137" strokeWidth="2"/>

                    {/* Screen */}
                    <rect x="30" y="40" width="140" height="280" rx="10" fill="#1a1a2e"/>

                    {/* Dynamic Island */}
                    <rect x="70" y="50" width="60" height="20" rx="10" fill="#000"/>

                    {/* App icons grid */}
                    <circle cx="60" cy="100" r="12" fill="#ff7b00"/>
                    <circle cx="90" cy="100" r="12" fill="#008a55"/>
                    <circle cx="120" cy="100" r="12" fill="#a164e8"/>
                    <circle cx="150" cy="100" r="12" fill="#ff7b00"/>

                    <circle cx="60" cy="130" r="12" fill="#008a55"/>
                    <circle cx="90" cy="130" r="12" fill="#a164e8"/>
                    <circle cx="120" cy="130" r="12" fill="#ff7b00"/>
                    <circle cx="150" cy="130" r="12" fill="#008a55"/>

                    <circle cx="60" cy="160" r="12" fill="#a164e8"/>
                    <circle cx="90" cy="160" r="12" fill="#ff7b00"/>
                    <circle cx="120" cy="160" r="12" fill="#008a55"/>
                    <circle cx="150" cy="160" r="12" fill="#a164e8"/>

                    {/* Dock background */}
                    <rect x="40" y="270" width="120" height="40" rx="15" fill="#2f3137" opacity="0.5"/>

                    {/* Dock icons */}
                    <circle cx="60" cy="290" r="12" fill="#ff7b00"/>
                    <circle cx="90" cy="290" r="12" fill="#008a55"/>
                    <circle cx="120" cy="290" r="12" fill="#a164e8"/>
                    <circle cx="150" cy="290" r="12" fill="#ff7b00"/>

                    {/* Home indicator */}
                    <rect x="75" y="340" width="50" height="5" rx="2.5" fill="#fff" opacity="0.3"/>

                    {/* Side buttons */}
                    <rect x="10" y="120" width="8" height="40" rx="2" fill="#2f3137"/>
                    <rect x="182" y="100" width="8" height="60" rx="2" fill="#2f3137"/>
                  </svg>
                  <p className="text-bm-dark font-bold text-lg">iPhone</p>
                  <p className="text-bm-gray text-sm">Refurbished</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-bm-green text-black px-6 py-3 rounded-full shadow-lg font-bold z-10">
              Tot -70%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
