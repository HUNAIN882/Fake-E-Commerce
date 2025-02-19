document.getElementById('images/product1.jpg');
document.getElementById('images/product1.jpg');

function Purchase() {
    alert("Thank You For Shopping With Us You have added the product to the cart!");
}
function confirmPurchase() {
    alert("Thank You For Shopping With Us! Redirecting to payment...");
}


// document.getElementById('productName').textContent = localStorage.getItem('productName');

function confirmPurchase() {
    alert("Your product is confirmed! Redirecting to payment...");
    window.location.href = "payment.html";
}


function changeColor(imageSrc) {
    document.getElementById("productImage").src = imageSrc;
}



// Buttons

let quantity = 1;
const quantityDisplay = document.getElementById("quantity");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

// Increase Quantity
increaseBtn.addEventListener("click", function () {
    quantity++;
    quantityDisplay.textContent = quantity;
    decreaseBtn.disabled = false; // Enable decrease button
});

// Decrease Quantity
decreaseBtn.addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
    if (quantity === 1) {
        decreaseBtn.disabled = true; // Disable decrease button when quantity is 1
    }
});

// Disable "-" button initially
decreaseBtn.disabled = true;


//  Dropdown

function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function selectOption(option) {
    document.getElementById("dropdownButton").innerText = option;
    document.getElementById("dropdownContent").style.display = "none";
}

// Message

function toggleChat() {
    let chatBox = document.getElementById("chatBox");

    if (chatBox.style.bottom === "-350px") {
        chatBox.style.bottom = "20px"; // Show modal
    } else {
        chatBox.style.bottom = "-350px"; // Hide modal
    }
}

function hideChat() {
    document.getElementById("chatBox").style.bottom = "-350px"; // Move modal down
}

function sendMessage() {
    let message = document.getElementById("userMessage").value;

    if (message.trim() === "") {
        alert("Please enter a message before sending.");
    } else {
        alert("Your message is sent to our seller.");
        document.getElementById("userMessage").value = "";
    }
}