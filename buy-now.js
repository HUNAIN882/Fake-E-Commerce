document.getElementById('images/product1.jpg');
document.getElementById('images/product1.jpg');

function Purchase() {
    alert("Thank You For Shopping With Us You have added the product to the cart!");
}
function confirmPurchase() {
    alert("Thank You For Shopping With Us! Redirecting to payment...");
}

document.getElementById('productImage').src = localStorage.getItem('productImage');
document.getElementById('productName').textContent = localStorage.getItem('productName');

function confirmPurchase() {
    alert("Your product is confirmed! Redirecting to payment...");
    window.location.href = "payment.html";
}


function changeColor(imageSrc) {
    document.getElementById("productImage").src = imageSrc;
}