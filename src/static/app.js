window.addEventListener("DOMContentLoaded", setup);

// Sort products by price low to high

// If time allows, make UI components interactive (e.g. hovering over possible clickable items)

let productData

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
			const sortedProductData = data.sort((a, b) => a.price - b.price);
			console.log(sortedProductData);
		}
	}).catch(err => console.error(err))
}

// const Card = (...productData) => {
// 	return (
// 	  <article className="card">
// 		<img src={url} className="card-img"/>
// 		<div className="card-content">
// 		<h1 className="card-name">{name}</h1>
// 		<h2 className="card-breed-age">{breed} • {age} {age > 1 ? "years" : "year"}</h2>
// 		<p>{description}</p>
// 		</div>
// 	  </article>
// 	)
//   }