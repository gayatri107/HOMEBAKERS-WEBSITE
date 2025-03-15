// Initialize empty cart
let cart = [];

// Get references to elements
const viewCartButton = document.getElementById('view-cart');
const cartSection = document.getElementById('cart-section');
const cartItemsList = document.getElementById('cart-items');
const clearCartButton = document.getElementById('clear-cart');
const checkoutButton = document.getElementById('checkout');
const orderButtons = document.querySelectorAll('.order-btn');

// Toggle visibility of cart
viewCartButton.addEventListener('click', () => {
    cartSection.classList.toggle('hidden');
});

// Add item to cart
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const productPrice = button.getAttribute('data-price');
        addItemToCart(productName, productPrice);
    });
});

// Add item to cart
function addItemToCart(name, price) {
    cart.push({ name, price });
    displayCart();
}

// Display cart items
function displayCart() {
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });
}

// Clear cart
clearCartButton.addEventListener('click', () => {
    cart = [];
    displayCart();
});

// Checkout (placeholder)
checkoutButton.addEventListener('click', () => {
    alert('Checkout functionality not implemented yet!');
});
