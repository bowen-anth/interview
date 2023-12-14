window.addEventListener("DOMContentLoaded", setup);

// Sort products by price low to high

// If time allows, make UI components interactive (e.g. hovering over possible clickable items)

const productsContainer = document.getElementById('products-container');
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
			sortedProductData = data.sort((a, b) => a.price - b.price);
			console.log(sortedProductData);
		}
	}).catch(err => console.error(err))
}

// Rendering the products as HTML
function renderProducts(products) {
    productsContainer.innerHTML = ''

    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <img src="${product.images[0]?.src}" alt="${product.title}">
            </div>
        `

        productsContainer.innerHTML += productHTML
    })
}

// Call renderProducts function with sorted data
renderProducts(sortedProductData)