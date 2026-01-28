# CLOCKWERK - Luxury Watch Store Website

A modern, responsive online watch store website built with HTML5, CSS3, JavaScript, and Bootstrap 5.

## Project Overview

**CLOCKWERK** is a premium luxury watch and clock e-commerce platform featuring:
- Professional, minimalist design with gold accent colors
- Fully responsive layout for all devices
- Shopping cart system with localStorage persistence
- Product search and filtering functionality
- Multiple product categories (Men's, Women's, Luxury, Sports)
- Contact form with validation
- Comprehensive product information pages

## File Structure

```
CLOCKWERK/
│
├── index.html              # Home page with featured products
├── shop.html               # Product catalog with filtering
├── features.html           # Watch features and specifications
├── about.html              # Brand story and mission
├── contact.html            # Contact form and information
│
├── css/
│   └── style.css           # Main stylesheet (customized Bootstrap)
│
├── js/
│   └── script.js           # Main JavaScript with all functionality
│
└── README.md               # This file
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with animations and transitions
- **JavaScript (ES6)** - Modern JavaScript with no dependencies
- **Bootstrap 5** - Responsive grid and components (via CDN)
- **Font Awesome 6** - Icon library (via CDN)

## Features

### 1. Product Management
- 12 pre-loaded watch products with details
- Product categories: Men's, Women's, Luxury, Sports
- Product cards with images, names, prices, and descriptions
- Placeholder images using via.placeholder.com service

### 2. Shopping Cart
- **Add to Cart** - Add products with quantity control
- **Remove from Cart** - Remove unwanted items
- **Update Quantity** - Change product quantities
- **Cart Summary** - Display total price and item count
- **LocalStorage Persistence** - Cart data persists across sessions
- **Cart Badge** - Shows number of items in cart (navbar)

### 3. Search Functionality
- Real-time product search by name and description
- Search results displayed in product grid
- Keyboard support (Enter key to search)

### 4. Category Filtering
- Filter products by category (All, Men's, Women's, Luxury, Sports)
- Radio button selection on shop page
- Instant filtering without page reload

### 5. Navigation
- Sticky navbar with responsive hamburger menu
- Active page indication
- Quick access to cart
- Search bar in navbar

### 6. Contact System
- Bootstrap form validation
- Name, email, subject, message fields
- Success message display
- Email links with proper formatting

### 7. Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 992px, 1200px
- Optimized for all screen sizes
- Touch-friendly buttons and inputs

## Color Scheme

- **Primary Color**: #1a1a1a (Black)
- **Secondary Color**: #4a4a4a (Dark Gray)
- **Accent Color**: #d4af37 (Gold)
- **Light Background**: #f5f5f5
- **Text Dark**: #2c3e50
- **Border Color**: #e0e0e0

## Pages Description

### 1. Home (index.html)
- Hero section with call-to-action
- Featured products showcase (first 3 products)
- Promotional banner with special offer
- Full navigation and footer

### 2. Shop (shop.html)
- Category filter sidebar
- Product grid (4 columns on desktop, responsive)
- Product cards with quick add-to-cart
- Product information display

### 3. Features (features.html)
- Premium Materials information
- Water Resistance specifications
- Warranty & Support details
- Smart Technology features
- Visual icons and descriptions

### 4. About (about.html)
- Brand story section
- Mission & Vision statements
- Why Choose CLOCKWERK section
- 6 reason cards with icons

### 5. Contact (contact.html)
- Contact form with validation
- Contact information cards
- Location, email, phone details
- Business hours display
- Form success message

## JavaScript Functions

### Cart Management
```javascript
addToCart(productId, quantity)      // Add product to cart
removeFromCart(productId)            // Remove product from cart
updateCartQuantity(productId, qty)   // Update product quantity
saveCart()                           // Save cart to localStorage
getCartTotal()                       // Get total cart price
getCartItemsCount()                  // Get total items count
updateCartCount()                    // Update navbar badge
renderCart()                         // Render cart modal content
```

### Product Management
```javascript
renderProducts(productsToShow)       // Render product grid
renderFeaturedProducts()             // Render featured products
searchProducts(query)                // Search by name/description
filterByCategory(category)           // Filter by category
```

### Utility Functions
```javascript
showNotification(message)            // Show toast notification
formatCurrency(value)                // Format number as currency
smoothScroll(elementId)              // Scroll to element smoothly
```

## How to Use

### 1. Running the Website
1. Open `index.html` in a web browser
2. Navigate through pages using the navbar
3. Click on watch products to add to cart
4. Use search bar to find specific watches
5. Filter by category in shop page

### 2. Adding Products to Cart
1. Click "Add to Cart" button on any product
2. View notification confirmation
3. Cart count updates in navbar
4. View cart by clicking cart icon (if items present)

### 3. Managing Cart
1. Open cart modal from navbar cart icon
2. Adjust quantities using +/- buttons or input field
3. Remove items using "Remove" button
4. View total price at bottom

### 4. Searching
1. Enter product name in search bar (navbar)
2. Click search button or press Enter
3. Results display in product grid
4. Clear and search again

### 5. Filtering
1. Go to Shop page
2. Select category from filter sidebar
3. Products automatically filter
4. Click different categories to update

## Product Database

Products are stored in `js/script.js` as a JavaScript array with:
- id: Unique identifier
- name: Product name
- price: Product price (USD)
- category: Product category (men/women/luxury/sports)
- image: Product image URL
- description: Short product description

Example:
```javascript
{
    id: 1,
    name: 'Elegant Chronograph',
    price: 299.99,
    category: 'men',
    image: 'https://via.placeholder.com/300x300',
    description: 'Professional chronograph with precision timing'
}
```

## LocalStorage

Cart data is automatically saved to browser's localStorage:
- **Key**: `clockwerkCart`
- **Data**: JSON string of cart array
- **Persistence**: Data persists across browser sessions
- **Size**: Typical cart ~5-10 KB

## Styling Features

### Animations & Transitions
- Smooth hover effects on buttons and cards
- Floating animation on hero section icon
- Slide transitions on navigation
- Scale effects on product cards
- Color transitions on interactive elements

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, Sans-serif
- Font Weights: 400, 500, 600, 700
- Responsive font sizes
- Letter spacing for elegant look

### Effects
- Box shadows on cards and buttons
- Gradient backgrounds
- Border effects
- Icon animations
- Smooth scroll behavior

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- ARIA labels where applicable
- Keyboard navigation support
- Form validation and error messages
- Focus states for interactive elements
- Color contrast compliance

## Performance Optimization

- Minimized CSS file
- Optimized JavaScript
- CDN-hosted libraries (Bootstrap, Font Awesome)
- Placeholder images (fast loading)
- Efficient DOM queries
- Event delegation where appropriate

## Future Enhancements

1. **Backend Integration**
   - Connect to payment gateway (Stripe, PayPal)
   - Database for product management
   - User account system
   - Order history

2. **Features**
   - Wishlist functionality
   - Product reviews and ratings
   - Multiple currency support
   - Newsletter subscription
   - Email notifications

3. **Admin Panel**
   - Product management
   - Order management
   - Customer analytics
   - Inventory tracking

4. **Mobile App**
   - React Native mobile app
   - Push notifications
   - Biometric login

## Code Quality

- **Comments**: Comprehensive code comments
- **Naming**: Clear, descriptive variable and function names
- **Organization**: Modular code structure
- **Standards**: Follows HTML5, CSS3, ES6 conventions
- **DRY Principle**: Reusable functions and components

## Testing Recommendations

1. **Functional Testing**
   - Add/remove products from cart
   - Search and filter functionality
   - Form validation
   - Navigation between pages

2. **Responsive Testing**
   - Mobile devices (< 576px)
   - Tablets (576px - 768px)
   - Desktops (> 768px)
   - Landscape and portrait modes

3. **Cross-Browser Testing**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers

4. **Performance Testing**
   - Page load time
   - Interaction responsiveness
   - LocalStorage efficiency

## Troubleshooting

### Cart not showing items
- Check browser's localStorage is enabled
- Clear browser cache and reload
- Check console for JavaScript errors

### Search not working
- Ensure JavaScript is enabled
- Check product names in database
- Verify search input has text

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check Bootstrap CDN is loading
- Verify CSS file path is correct

### Images not loading
- Check internet connection (CDN dependent)
- Verify image URLs are valid
- Use browser dev tools to check network

## Contact & Support

For issues or questions about CLOCKWERK:
- Email: support@clockwerk.com
- Phone: +1 (555) 123-4567
- Website: localhost (when running locally)

## License

This project is for educational and commercial use.

## Credits

- **Bootstrap 5**: https://getbootstrap.com
- **Font Awesome**: https://fontawesome.com
- **Placeholder Images**: https://via.placeholder.com

---

**CLOCKWERK - Luxury Watch Store**
© 2024 All Rights Reserved
