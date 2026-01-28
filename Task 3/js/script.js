/**
 * CLOCKWERK - Luxury Watch Store
 * JavaScript File - Main functionality
 * Includes: Product management, Shopping cart, Search functionality
 */

// ============================================
// IMAGE ASSETS - UNSPLASH & PEXELS
// ============================================

const images = {
    // Hero Section - Home Page
    hero: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=85&crop=entropy&cs=tinysrgb&fit=max',
    
    // Features Section Detail Shots
    features: {
        materials: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=85&crop=entropy&cs=tinysrgb&fit=max',
        waterResistance: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85&crop=entropy&cs=tinysrgb&fit=max',
        warranty: 'https://images.unsplash.com/photo-1554072823-6278166a4a00?w=600&q=85&crop=entropy&cs=tinysrgb&fit=max',
        technology: 'https://images.unsplash.com/photo-1612817288484-53efc42cfdb8?w=600&q=85&crop=entropy&cs=tinysrgb&fit=max'
    },
    
    // About Page - Lifestyle Images
    about: {
        story: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=85&crop=entropy&cs=tinysrgb&fit=max',
        mission: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&q=85&crop=entropy&cs=tinysrgb&fit=max'
    }
};

// ============================================
// PRODUCT DATABASE
// ============================================

const products = [
    {
        id: 1,
        name: 'Elegant Chronograph',
        price: 299.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Professional chronograph with precision timing'
    },
    {
        id: 2,
        name: 'Classic Dress Watch',
        price: 199.99,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Elegant dress watch for formal occasions'
    },
    {
        id: 3,
        name: 'Sports Diver Pro',
        price: 349.99,
        category: 'sports',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Water-resistant sports watch for adventure'
    },
    {
        id: 4,
        name: 'Diamond Luxury Collection',
        price: 599.99,
        category: 'luxury',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Luxury timepiece with diamond accents'
    },
    {
        id: 5,
        name: 'Minimalist Black',
        price: 249.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Sleek minimalist design with premium materials'
    },
    {
        id: 6,
        name: 'Rose Gold Elegance',
        price: 399.99,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1579377366822-fd0952bb46d4?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Beautiful rose gold finish with sapphire crystal'
    },
    {
        id: 7,
        name: 'Swiss Precision',
        price: 749.99,
        category: 'luxury',
        image: 'https://images.unsplash.com/photo-1612817288484-53efc42cfdb8?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Authentic Swiss-made luxury timepiece'
    },
    {
        id: 8,
        name: 'Active Fitness Tracker',
        price: 179.99,
        category: 'sports',
        image: 'https://images.unsplash.com/photo-1579364848330-63ddba42ec38?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Multi-functional sports watch with fitness tracking'
    },
    {
        id: 9,
        name: 'Platinum Executive',
        price: 899.99,
        category: 'luxury',
        image: 'https://images.unsplash.com/photo-1539874754049-725a6678684d?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Premium platinum watch for executives'
    },
    {
        id: 10,
        name: 'Vintage Classic',
        price: 279.99,
        category: 'men',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Timeless design inspired by vintage watches'
    },
    {
        id: 11,
        name: 'Sapphire Crystal Diamond',
        price: 529.99,
        category: 'women',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Premium sapphire crystal with diamond bezel'
    },
    {
        id: 12,
        name: 'Marathon Explorer',
        price: 449.99,
        category: 'sports',
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&q=85&crop=entropy&cs=tinysrgb&fit=max',
        description: 'Adventure watch built for explorers'
    }
];

// ============================================
// SHOPPING CART FUNCTIONALITY
// ============================================

let cart = JSON.parse(localStorage.getItem('clockwerkCart')) || [];

/**
 * Add item to cart
 * @param {number} productId - Product ID to add
 * @param {number} quantity - Quantity to add
 */
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image
        });
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

/**
 * Remove item from cart
 * @param {number} productId - Product ID to remove
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

/**
 * Update quantity of item in cart
 * @param {number} productId - Product ID
 * @param {number} quantity - New quantity
 */
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, parseInt(quantity));
        saveCart();
        updateCartCount();
        renderCart();
    }
}

/**
 * Save cart to localStorage
 */
function saveCart() {
    localStorage.setItem('clockwerkCart', JSON.stringify(cart));
}

/**
 * Get cart total
 */
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Get cart items count
 */
function getCartItemsCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Update cart count badge
 */
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cartCount');
    const count = getCartItemsCount();
    cartCountElements.forEach(el => {
        el.textContent = count;
    });
}

/**
 * Render cart modal content
 */
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartSummary = document.getElementById('cartSummary');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCartMessage.style.display = 'block';
        cartSummary.innerHTML = '';
        return;
    }

    emptyCartMessage.style.display = 'none';

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
            </div>
            <div class="quantity-control">
                <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <input type="number" value="${item.quantity}" onchange="updateCartQuantity(${item.id}, this.value)" min="1">
                <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div class="text-end">
                <div class="fw-bold">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="remove-btn mt-2" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    const total = getCartTotal();
    cartSummary.innerHTML = `
        <div class="row">
            <div class="col-8 fw-bold fs-5">Total:</div>
            <div class="col-4 text-end fw-bold fs-5" style="color: var(--accent-color);">$${total.toFixed(2)}</div>
        </div>
        <button class="btn btn-warning btn-sm w-100 mt-3">Proceed to Checkout</button>
    `;
}

/**
 * Show notification toast
 * @param {string} message - Message to display
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'position-fixed bottom-0 end-0 m-3 alert alert-success alert-dismissible fade show';
    notification.style.zIndex = '9999';
    notification.innerHTML = `
        <strong><i class="fas fa-check-circle"></i></strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ============================================
// PRODUCT DISPLAY FUNCTIONALITY
// ============================================

/**
 * Render product grid
 * @param {array} productsToShow - Products to display
 */
function renderProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<div class="col-12"><p class="text-center">No products found.</p></div>';
        return;
    }

    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card product-card h-100">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="card-img-top">
                </div>
                <div class="product-info">
                    <span class="product-category">${capitalizeCategory(product.category)}</span>
                    <h5 class="product-name">${product.name}</h5>
                    <p class="text-muted" style="font-size: 0.9rem;">${product.description}</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}, 1)">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Render featured products on home page
 */
function renderFeaturedProducts() {
    const featuredWatches = document.getElementById('featuredWatches');
    if (!featuredWatches) return;

    const featured = products.slice(0, 3);

    featuredWatches.innerHTML = featured.map(product => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card product-card h-100">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="card-img-top">
                </div>
                <div class="product-info">
                    <span class="product-category">${capitalizeCategory(product.category)}</span>
                    <h5 class="product-name">${product.name}</h5>
                    <p class="text-muted" style="font-size: 0.9rem;">${product.description}</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}, 1)">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Capitalize category name
 * @param {string} category - Category name
 */
function capitalizeCategory(category) {
    const categoryMap = {
        'men': "Men's",
        'women': "Women's",
        'luxury': 'Luxury',
        'sports': 'Sports'
    };
    return categoryMap[category] || category;
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

/**
 * Search products by name
 * @param {string} query - Search query
 */
function searchProducts(query) {
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    renderProducts(filtered);
}

/**
 * Filter products by category
 * @param {string} category - Category to filter
 */
function filterByCategory(category) {
    const filtered = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    renderProducts(filtered);
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    updateCartCount();

    // Render featured products on home page
    if (document.getElementById('featuredWatches')) {
        renderFeaturedProducts();
    }

    // Render all products on shop page
    if (document.getElementById('productsGrid')) {
        renderProducts(products);
    }

    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query.length > 0) {
                searchProducts(query);
                // Scroll to products
                const productsGrid = document.getElementById('productsGrid');
                if (productsGrid) {
                    productsGrid.scrollIntoView({ behavior: 'smooth' });
                }
                searchInput.value = '';
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // Category filter
    const categoryRadios = document.querySelectorAll('input[name="category"]');
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            filterByCategory(this.value);
        });
    });

    // Cart modal functionality
    const cartButtons = document.querySelectorAll('[data-bs-target="#cartModal"]');
    const cartLink = document.querySelector('a[href="shop.html"] .fa-shopping-cart');

    if (cartLink && cartLink.closest('a')) {
        cartLink.closest('a').addEventListener('click', function(e) {
            if (this.href === 'shop.html' && getCartItemsCount() > 0) {
                e.preventDefault();
                const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
                renderCart();
                cartModal.show();
            }
        });
    }

    // Render cart when cart link is clicked with items
    const cartLink2 = document.querySelector('a[href="shop.html"]');
    if (cartLink2) {
        cartLink2.addEventListener('click', function(e) {
            const cartModal = document.getElementById('cartModal');
            if (cartModal) {
                renderCart();
            }
        });
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Format currency
 * @param {number} value - Value to format
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}

/**
 * Smooth scroll to element
 * @param {string} elementId - Element ID to scroll to
 */
function smoothScroll(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// CONSOLE LOG FOR DEBUGGING
// ============================================

console.log('CLOCKWERK - Luxury Watch Store');
console.log('Product Database Loaded:', products.length, 'products');
console.log('Shopping Cart System Active');
