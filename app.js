fetch('https://fakestoreapi.com/products')
const products = [
    { id: 1, name: "Mens Pure Black Color Full Sleeves Tshirt For Winter and Summer Soft Stuff", price: "20.99", image: "images/polo.webp" },
    { id: 2, name: "Brown Jacket Men For Winter New Arrival 2025", price: "15.49", image: "images/product2.jpg" },
    { id: 3, name: "White And Black T-Shirt", price: "35.99", image: "images/product3.jpg" },
    { id: 4, name: "Tution Bag", price: "10.99", image: "images/product4.jpg" },
    { id: 5, name: "Plan Basic T-Shirts", price: "25.00", image: "images/polo3.webp" },
    { id: 6, name: "Blue And White Half Sleeve Tshirt", price: "18.75", image: "images/polo4.webp" },
    { id: 7, name: "Pakistan Champions Trophy 2025 T-Shirt", price: "22.50", image: "images/product7.jpg" },
    { id: 8, name: "US POLO ASSN Single Jersey Long Sleeve Tee Shirt For Kids-Blue & Charcoal Melange-BE1156", price: "30.99", image: "images/polo6.webp" },
    { id: 9, name: "Maxx Crew Neck Long Sleeve Single Jersey Tee Shirt For Kids-Navy Melange-SP212", price: "40.00", image: "images/polo5.jpg" },
    { id: 10, name: "Black Shirt", price: "27.49", image: "images/product10.jpg" },
    { id: 11, name: "Ronaldo Shirt", price: "27.49", image: "images/product11.jpg" },
    { id: 12, name: "Messi Shirt", price: "27.49", image: "images/product12.jpg" },
    { id: 13, name: "Elite Smartwatch", price: ".9,899", image: "images/smart watch.webp" },
    { id: 14, name: "Apple Watch Series 10", price: "27.49", image: "images/apple watch.png" },
    { id: 15, name: "Apple Watch SE", price: "27.49", image: "images/watch.jpeg" },
    { id: 16, name: "England Team Shirt Of Champions Trophy 2025", price: "27.49", image: "images/product16.jpg" },
    { id: 17, name: "Adidas Shirt", price: "27.49", image: "images/product17.jpg" },
    { id: 18, name: "Adidas Original Men's Half Sleeve T-Shirt", price: "27.49", image: "images/product18.jpg" },
    { id: 19, name: "Branded Shoes 2025 New Arrival", price: "27.49", image: "images/shoes.webp" },
    { id: 20, name: "Karachi King Shirt 2024 ", price: "27.49", image: "images/Karachi-Kings-PSL-Shirt-2024_jpg.webp" }

];

const productList = document.getElementById("product-list");
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button class="cart-btn" onclick="cartBtn(${product.id})">Add to Cart</button>
        <button class="buy-btn" onclick="buyNow(${product.id})">Buy Now</button>
    `;
    productList.appendChild(productDiv);
});
function cartBtn (productId) {
    alert("You have added the product to the cart!");
  
}
function buyNow(productId) {
    alert("You have purchased the product!");
    // 
    setTimeout(() => {
        window.location.href = "buy-now.html";
        setTimeout(() => {
            alert("Your products will be delivered in 3 to 4 days!");
        }, 1000);
    }, 500);
}


// Log In Sign Up 
let users = {};
function signUp() {
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    
    if (name && email && password) {
        users[email] = { name, password };
        alert('Sign Up Successful!');
        closeModal('signup-form');
    } else {
        alert('Please fill all fields!');
    }
}

function logIn() {
    let name = document.getElementById('login-name').value;
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    
    if (users[email] && users[email].password === password && users[email].name === name) {
        alert('Welcome to the Shop Xpress website!');
        closeModal('login-form');
    } else {
        alert('Your name, email, or password is incorrect. Please try again!');
    }
}

function toggleDropdown() {
    document.querySelector('.nav-icon').classList.toggle('active');
}

function openModal(id) {
    let modal = document.getElementById(id);
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 50);
}

function closeModal(id) {
    let modal = document.getElementById(id);
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 500);
}

const colors = ["#00FFFF", "#39FF14", "#9D00FF", "#FF10F0", "#FF5F1F"];
const container = document.querySelector(".product-container");

