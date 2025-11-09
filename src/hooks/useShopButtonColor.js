import { useDecision } from '@optimizely/react-sdk';

/**
 * Custom hook to get the Shop Nu button color from Optimizely
 * Feature flag key: 'shop_button_color'
 * Variable key: 'button_color'
 *
 * Default color: #9E3B64
 *
 * Usage:
 * const buttonColor = useShopButtonColor();
 */
export const useShopButtonColor = () => {
  const [decision] = useDecision('shop_button_color', {
    autoUpdate: true,
  });

  // Debug logging
  console.log('Optimizely Decision:', {
    enabled: decision.enabled,
    variationKey: decision.variationKey,
    variables: decision.variables,
    flagKey: decision.flagKey,
  });

  // Get the button color from the feature variable
  const buttonColor = decision.variables?.button_color || '#9E3B64';

  console.log('Button Color:', buttonColor);

  return {
    buttonColor,
    enabled: decision.enabled,
    variationKey: decision.variationKey,
  };
};

export default useShopButtonColor;
