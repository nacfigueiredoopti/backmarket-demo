import React, { useState, useEffect } from 'react';
import { OptimizelyProvider as OptimizelyReactProvider, createInstance } from '@optimizely/react-sdk';
import { OPTIMIZELY_SDK_KEY } from '../config/optimizely';

// Create Optimizely instance
const optimizely = createInstance({
  sdkKey: OPTIMIZELY_SDK_KEY,
});

const OptimizelyProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    console.log('Optimizely Provider mounted with SDK Key:', OPTIMIZELY_SDK_KEY);

    // Wait for SDK to be ready
    optimizely.onReady().then(() => {
      console.log('✅ Optimizely SDK Ready');
      const config = optimizely.getOptimizelyConfig();
      console.log('Optimizely Config:', config);

      // Log all available flags
      if (config) {
        console.log('Available Flags:', Object.keys(config.featuresMap || {}));

        // Log the shop_button_color flag details
        const flagConfig = config.featuresMap?.shop_button_color;
        if (flagConfig) {
          console.log('shop_button_color flag config:', flagConfig);
        }
      }

      setIsReady(true);
    }).catch(error => {
      console.error('❌ Optimizely SDK Error:', error);
      setIsReady(true); // Render anyway with defaults
    });
  }, []);

  // Show loading state while SDK initializes
  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <OptimizelyReactProvider
      optimizely={optimizely}
      user={{ id: 'user123' }}
      timeout={3000}
    >
      {children}
    </OptimizelyReactProvider>
  );
};

export default OptimizelyProvider;
