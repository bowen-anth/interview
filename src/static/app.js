window.addEventListener("DOMContentLoaded", setup);

// Sort products by price low to high

// If time allows, make UI components interactive (e.g. hovering over possible clickable items)

async function setup() {
	// START HERE
	// PRODUCTS CAN BE FETCHED USING: GET /products

	// thx google for fetch. rusty on this
	fetch("./products")
	.then(response => {
		if(response.ok) {
			return response.json()
		}
	}).then(data => {
		if(data) {
			const productData = data
			console.log(productData)
		}
	}).catch(err => console.error(err))
}
