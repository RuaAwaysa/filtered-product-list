const products = [
    { name: "Smartphone", category: "Electronics", price: 699, image: "https://th.bing.com/th/id/OIP.ssa4JAZEBz4k7zl7-JCCggHaFj?rs=1&pid=ImgDetMain" },
    { name: "Laptop", category: "Electronics", price: 999, image: "https://th.bing.com/th/id/OIP.pEoFcD0zW4S9i1pBtSIrKQHaE8?rs=1&pid=ImgDetMain" },
    { name: "T-Shirt", category: "Clothing", price: 20, image: "https://www.filmyvastra.com/wp-content/uploads/2019/06/Black-Wide-tshirt-without-hanger-Recovered-scaled.jpg" },
    { name: "Jeans", category: "Clothing", price: 40, image: "https://lsco.scene7.com/is/image/lsco/125010373-front-pdp-ld?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,0&op_usm=1.25,0.6,8&wid=2000&hei=1800" },
    { name: "The man and the sea Novel", category: "Books", price: 15, image: "https://goodoldboat.com/wp-content/uploads/2014/06/Man-and-the-Sea-768x994.jpg" },
    { name: "Clean Code Book", category: "Books", price: 25, image: "https://th.bing.com/th/id/R.b36a3bcccb2e3f4d3d321a45903a1011?rik=d51REfGZ5%2bbhlQ&pid=ImgRaw&r=0" }
];

// Function to display products
function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: <span>$${product.price}</span></p>
            <div class="actions">
                <i class="fas fa-heart" id="likeIcon"></i>
                <button class="add-to-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        
        productList.appendChild(productItem);
    });
}

// Initial display of all products
displayProducts(products);

// Filter function
function filterProducts(category) {
    if (category === 'All') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Add event listeners to filter buttons
document.querySelectorAll('#filter button').forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.getAttribute('data-category');
        filterProducts(category);
    });
});
