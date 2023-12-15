window.addEventListener("DOMContentLoaded", setup);

// Sort products by price low to high

// If time allows, make UI components interactive (e.g. hovering over possible clickable items)

const productContainer = document.querySelector('.product-container');
let sortedProductData

async function setup() {
	// START HERE
	// PRODUCTS CAN BE FETCHED USING: GET /products

	//fetch product data
	fetch("./products")
	.then(response => {
		if(response.ok) {
			return response.json()
		}
	}).then(data => {
		if(data) {
			productData = data
			// Sort by price low to high
			sortedProductData = data.sort((a, b) => a.price - b.price)
			console.log(sortedProductData)
			// Call renderProducts function with sorted data
			renderProducts(sortedProductData)
		}
	}).catch(err => console.error(err))
}

// convert price to dollars.cents X.yy
function formatPrice(price) {
    const dollars = Math.floor(price / 100);
    const cents = price % 100;
    return `${dollars}.${cents.toString().padStart(2, '0')}`;
}

// Rendering the products as HTML
function renderProducts(products) {
    productContainer.innerHTML = ''

    products.forEach(product => {
		const formattedPrice = formatPrice(product.price)
        const productHTML = `
            <div class="product-item-container">
				<img src="${product.images[0]?.src}" alt="${product.title}" class="product-image">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price-paragraph">$${formattedPrice}</p>
            </div>
        `

        productContainer.innerHTML += productHTML
    })
}