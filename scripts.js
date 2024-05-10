const cartButton = document.querySelector('.cart-button');

// Get the cart element
const cart = document.querySelector('.cart');

// Function to toggle the visibility of the cart
function toggleCart() {
    // Toggle the visibility of the cart
    cart.classList.toggle('show-cart');
}
const productPrices = document.querySelectorAll('.product-price');

// Convert NodeList to array for easier manipulation
const pricesArray = Array.from(productPrices);

// Function to sort products by price
function sortProductsByPrice(order) {
    // Get all product price elements
    const productPrices = document.querySelectorAll('.product-price');

    // Convert NodeList to array for easier manipulation
    const pricesArray = Array.from(productPrices);

    // Sort pricesArray based on the price value and order
    pricesArray.sort((a, b) => {
        const priceA = parseInt(a.textContent.split('₹ ')[1]);
        const priceB = parseInt(b.textContent.split('₹ ')[1]);
        if (order === 'ascending') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });

    // Remove existing product sections
    const main = document.querySelector('main');
    main.innerHTML = '';

    // Append product sections in sorted order
    pricesArray.forEach(priceElement => {
        const section = priceElement.parentElement;
        main.appendChild(section);
    });
}
const searchInput = document.getElementById('searchInput');

// Function to filter products based on search input
function filterProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase(); // Get the search term and normalize it

    // Get all product sections
    const productSections = document.querySelectorAll('.product');

    // Filter product sections based on the search term
    productSections.forEach(section => {
        const productName = section.querySelector('h3').textContent.toLowerCase(); // Get the product name
        const isVisible = productName.includes(searchTerm); // Check if product name contains the search term

        // Toggle visibility based on search result
        section.style.display = isVisible ? 'block' : 'none';
    });

    // Show a message if no products match the search term
    const noResultsMessage = document.getElementById('noResultsMessage');
    noResultsMessage.style.display = productSections.length === 0 ? 'block' : 'none';
}

// Add event listener to the search input
searchInput.addEventListener('input', filterProducts);
