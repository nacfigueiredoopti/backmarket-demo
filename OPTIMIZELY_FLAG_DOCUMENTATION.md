# Optimizely Feature Flag Documentation

## Flag: `shop_button_color`

This feature flag controls the styling and appearance of the "Shop nu" primary CTA button on the homepage.

### Variables

#### 1. `button_color` (String)
Controls the background color of the button.

**Type:** String
**Default:** `#9E3B64` (purple)

**Accepted Values:**
- Any valid CSS color format:
  - **Hex colors:** `#06A77D`, `#FF5733`, `#000000`
  - **RGB/RGBA:** `rgb(255, 0, 0)`, `rgba(0, 255, 0, 0.5)`
  - **HSL/HSLA:** `hsl(120, 100%, 50%)`, `hsla(120, 100%, 50%, 0.5)`
  - **Named colors:** `red`, `blue`, `green`, `orange`

**Examples:**
```
#06A77D  → Teal/green (Back Market brand color)
#FF5733  → Orange-red
#2E86DE  → Blue
rgba(255, 0, 0, 0.8)  → Semi-transparent red
```

---

#### 2. `button_text` (String)
Controls the text label displayed on the button.

**Type:** String
**Default:** `Shop nu`

**Accepted Values:**
- Any string value (text will be displayed as-is)

**Examples:**
```
"Shop nu"           → Default Dutch text
"Koop nu"           → Alternative Dutch text
"Bekijk aanbod"     → "View offer" in Dutch
"Start shopping"    → English text
"Shop now"          → English alternative
"Découvrir"         → French text
```

**Recommendations:**
- Keep text short (1-3 words) for best mobile display
- Consider button width when using longer text
- Test different lengths across devices

---

#### 3. `button_shape` (String)
Controls the border radius style of the button.

**Type:** String (enum)
**Default:** `rounded`

**Accepted Values:**

| Value | Description | Border Radius | Visual |
|-------|-------------|---------------|--------|
| `rounded` | Standard rounded corners | 8px | ![rounded](https://via.placeholder.com/150x50/9E3B64/FFFFFF?text=Shop+nu) |
| `pill` | Fully rounded ends (capsule) | 999px | ![pill](https://via.placeholder.com/150x50/9E3B64/FFFFFF?text=Shop+nu) |
| `square` | Sharp corners, no rounding | 0px | ![square](https://via.placeholder.com/150x50/9E3B64/FFFFFF?text=Shop+nu) |
| `slight` | Subtle rounding | 4px | ![slight](https://via.placeholder.com/150x50/9E3B64/FFFFFF?text=Shop+nu) |

**Examples:**
```
"rounded"  → Standard rounded corners (default)
"pill"     → Fully rounded capsule shape
"square"   → No rounding (sharp corners)
"slight"   → Subtle 4px rounding
```

**Recommendations:**
- `rounded` - Best for modern, friendly design (default)
- `pill` - Good for maximum visual softness
- `square` - Use for more formal, corporate feel
- `slight` - Subtle alternative to default

---

#### 4. `button_effect` (String)
Controls the hover/interaction effect when users interact with the button.

**Type:** String (enum)
**Default:** `scale`

**Accepted Values:**

| Value | Description | Behavior |
|-------|-------------|----------|
| `scale` | Scales up on hover/press | Desktop: `transform: scale(1.05)`<br/>Mobile: `activeOpacity: 0.8` |
| `shadow` | Adds shadow on hover/press | Desktop: Enhanced shadow on hover<br/>Mobile: `activeOpacity: 0.9` |
| `lift` | Lifts up on hover | Desktop: `translateY(-2px)`<br/>Mobile: `activeOpacity: 0.9` |
| `none` | No effect | Desktop: No hover effect<br/>Mobile: `activeOpacity: 1` |

**Examples:**
```
"scale"   → Button scales up 5% on hover (default)
"shadow"  → Button shadow intensifies on hover
"lift"    → Button lifts up slightly on hover
"none"    → No hover/press effect
```

**Recommendations:**
- `scale` - Most engaging, works well for primary CTAs (default)
- `shadow` - Subtle, professional effect
- `lift` - Creates depth, good for floating designs
- `none` - Use for minimal/flat design systems

---

## Implementation Details

### React Web (Vite + Tailwind)
- Location: `src/hooks/useShopButtonColor.js`
- Used in: `src/components/Hero.jsx`
- Effects are CSS-based (hover states)

### React Native (Expo)
- Location: `src/hooks/useShopButtonColor.js`
- Used in: `src/components/Hero.js`
- Effects use `activeOpacity` for touch feedback

---

## Example Configurations

### Configuration 1: Bold & Energetic
```json
{
  "button_color": "#FF5733",
  "button_text": "Shop now",
  "button_shape": "pill",
  "button_effect": "scale"
}
```

### Configuration 2: Professional & Minimal
```json
{
  "button_color": "#2E86DE",
  "button_text": "View catalog",
  "button_shape": "slight",
  "button_effect": "shadow"
}
```

### Configuration 3: Back Market Brand
```json
{
  "button_color": "#06A77D",
  "button_text": "Bekijk aanbod",
  "button_shape": "rounded",
  "button_effect": "scale"
}
```

### Configuration 4: Flat Design
```json
{
  "button_color": "#34495E",
  "button_text": "Start",
  "button_shape": "square",
  "button_effect": "none"
}
```

---

## Testing Recommendations

1. **Color Contrast**: Ensure sufficient contrast between `button_color` and white text (WCAG AA standard: 4.5:1)
2. **Text Length**: Test long button text strings on mobile devices
3. **Shape Combinations**: Test all shape options with different button widths
4. **Effect Performance**: Verify smooth animations across all devices
5. **A/B Testing**: Use different variations to optimize conversion rates

---

## Technical Notes

- All changes update in real-time (1-second polling interval)
- Invalid variable values fall back to defaults
- Changes are logged to browser/device console for debugging
- Variables work independently (can mix and match any combination)

---

## Support

For questions or issues with this flag:
- Check browser console for debug logs
- Verify flag is enabled in Optimizely dashboard
- Ensure SDK key is correct: `TEqVM469y9a7r2kEoByoE`
- Project ID: `5659953105469440`
