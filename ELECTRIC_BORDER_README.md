# Electric Border Card Component

A stunning card component with animated electric border effects, available for both web applications and Power Apps.

## Features

- **Multi-layered glow effect** - Creates depth with multiple border layers
- **Animated pulsing** - Electric pulse animation on border layers
- **Background glow** - Rotating gradient background for extra dimension
- **Customizable colors** - Easy color theming
- **Responsive design** - Works on all screen sizes

## Web Implementation

### 1. Include the CSS

Add the electric border CSS to your project:

```html
<link rel="stylesheet" href="electric-border.css">
```

### 2. HTML Structure

```html
<div class="electric-border" style="border-radius: 16px;" data-color="cyan">
  <div class="eb-layers">
    <div class="eb-stroke"></div>
    <div class="eb-glow-1"></div>
    <div class="eb-glow-2"></div>
    <div class="eb-background-glow"></div>
  </div>

  <div class="eb-content">
    <div class="electric-card">
      <img src="your-image.jpg" class="electric-card-image" alt="Card image">

      <h2 class="electric-card-header">Electric Border Card</h2>
      <p class="electric-card-subheader">$3,200 budget</p>
      <p class="electric-card-body">
        A glowing, animated border wrapper with electric cyan effects.
      </p>

      <div class="electric-card-stats">
        <div class="electric-card-stat">
          <div class="electric-card-stat-label">Days left</div>
          <div class="electric-card-stat-value">14</div>
        </div>
        <div class="electric-card-stat">
          <div class="electric-card-stat-label">Progress</div>
          <div class="electric-card-stat-value">82%</div>
        </div>
      </div>

      <button class="electric-card-button">Update</button>
    </div>
  </div>
</div>
```

### 3. React Component Example

```jsx
import React from 'react';
import './electric-border.css';

const ElectricBorderCard = ({
  color = "cyan",
  children,
  borderRadius = 16,
  style = {}
}) => {
  return (
    <div
      className="electric-border"
      data-color={color}
      style={{ borderRadius: `${borderRadius}px`, ...style }}
    >
      <div className="eb-layers">
        <div className="eb-stroke"></div>
        <div className="eb-glow-1"></div>
        <div className="eb-glow-2"></div>
        <div className="eb-background-glow"></div>
      </div>

      <div className="eb-content">
        {children}
      </div>
    </div>
  );
};

// Usage
<ElectricBorderCard color="cyan" borderRadius={16}>
  <div className="electric-card">
    <h2 className="electric-card-header">Electric Border Card</h2>
    <p className="electric-card-body">
      A glowing, animated border wrapper.
    </p>
  </div>
</ElectricBorderCard>
```

## Power Apps Implementation

### 1. Import the Component

Import the `ElectricBorderCard.pa.yaml` file into your Power Apps project.

### 2. Component Structure

The Power Apps version includes:
- **conElectricBorderCard** - Main container
- **conBackgroundGlow** - Outermost glow layer (8% larger, semi-transparent cyan)
- **conOuterGlow2** - Second glow layer with thicker border
- **conOuterGlow1** - First glow layer
- **conMainCard** - Main card with electric cyan border (2px, #7df9ff)
- **conInnerGradient** - Inner overlay for subtle electric effect

### 3. Customization

To customize the electric border color, modify these properties in the YAML:

```yaml
# Main border color
BorderColor: =RGBA(125, 249, 255, 1)  # Electric cyan

# Glow layers (adjust opacity for intensity)
BorderColor: =RGBA(125, 249, 255, 0.6)  # 60% opacity
BorderColor: =RGBA(125, 249, 255, 0.4)  # 40% opacity

# Background glow
Fill: =RGBA(125, 249, 255, 0.15)  # 15% opacity
```

### 4. Alternative Colors

**Electric Blue:**
```
RGBA(59, 130, 246, 1)  # #3b82f6
```

**Electric Green:**
```
RGBA(16, 185, 129, 1)  # #10b981
```

**Electric Purple:**
```
RGBA(168, 85, 247, 1)  # #a855f7
```

**Electric Pink:**
```
RGBA(236, 72, 153, 1)  # #ec4899
```

## Customization Options

### Border Thickness

**Web:**
```css
.electric-border {
  --eb-border-width: 3px; /* Increase for thicker border */
}
```

**Power Apps:**
```yaml
BorderThickness: =3
```

### Animation Speed

**Web:**
```css
.eb-stroke {
  animation: electricPulse 1s ease-in-out infinite; /* Faster pulse */
}

.eb-background-glow {
  animation: electricRotate 4s linear infinite; /* Faster rotation */
}
```

### Glow Intensity

**Web:**
```css
.eb-glow-1 {
  opacity: 0.8; /* Stronger glow */
}

.eb-background-glow {
  opacity: 0.5; /* Stronger background glow */
}
```

**Power Apps:**
```yaml
# Adjust RGBA alpha values
Fill: =RGBA(125, 249, 255, 0.25)  # Stronger glow (0.25 instead of 0.15)
```

## Browser Support

- Chrome, Edge, Safari, Firefox (latest versions)
- Requires support for `oklch()` color function for optimal results
- Fallback colors provided for older browsers

## Performance Notes

- Uses CSS animations and transforms (GPU accelerated)
- Multiple layers may impact performance on low-end devices
- Consider reducing glow layers for better performance if needed

## Power Apps Limitations

Due to Power Apps limitations, the following differences exist:

1. **No blur filters** - Glow effect approximated with semi-transparent borders and drop shadows
2. **No CSS animations** - Static design (consider using Power Apps Timer control for animation)
3. **Limited gradient support** - Background glow simplified
4. **No SVG filters** - Complex effects not available

## License

Free to use for personal and commercial projects.

## Credits

Electric border effect inspired by modern UI design trends and neon aesthetics.
