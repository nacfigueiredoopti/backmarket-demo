import { useDecision } from '@optimizely/react-sdk';

/**
 * Custom hook to get the Shop Nu button styling from Optimizely
 * Feature flag key: 'shop_button_color'
 *
 * Variables and Possible Values:
 *
 * 1. button_color (string) - Button background color
 *    - Default: '#9E3B64'
 *    - Accepts: Any valid CSS color (hex, rgb, rgba, named colors, hsl, hsla)
 *    - Examples: '#06A77D', '#FF5733', 'blue', 'rgb(255, 0, 0)', 'rgba(0, 255, 0, 0.5)'
 *
 * 2. button_text (string) - Button label text
 *    - Default: 'Shop nu'
 *    - Accepts: Any string
 *    - Examples: 'Koop nu', 'Bekijk aanbod', 'Start shopping', 'Shop now'
 *
 * 3. button_shape (string) - Button border radius style
 *    - Default: 'rounded'
 *    - Possible values:
 *      - 'rounded': Standard rounded corners (8px border-radius)
 *      - 'pill': Fully rounded ends (999px border-radius)
 *      - 'square': No rounding (0px border-radius)
 *      - 'slight': Slight rounding (4px border-radius)
 *
 * 4. button_effect (string) - Button hover/interaction effect
 *    - Default: 'scale'
 *    - Possible values:
 *      - 'scale': Scales up on hover (transform: scale(1.05))
 *      - 'shadow': Adds shadow on hover
 *      - 'lift': Lifts up on hover (translateY(-2px))
 *      - 'none': No hover effect
 *
 * Usage:
 * const { buttonColor, buttonText, buttonShape, buttonEffect } = useShopButtonColor();
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

  // Get all button styling variables with defaults
  const buttonColor = decision.variables?.button_color || '#9E3B64';
  const buttonText = decision.variables?.button_text || 'Shop nu';
  const buttonShape = decision.variables?.button_shape || 'rounded';
  const buttonEffect = decision.variables?.button_effect || 'scale';

  console.log('Button Styles:', {
    buttonColor,
    buttonText,
    buttonShape,
    buttonEffect
  });

  return {
    buttonColor,
    buttonText,
    buttonShape,
    buttonEffect,
    enabled: decision.enabled,
    variationKey: decision.variationKey,
  };
};

export default useShopButtonColor;
