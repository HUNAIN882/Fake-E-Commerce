function selectPayment(method) {
    alert("You selected " + method + " as your payment method. Your order is being processed!");
}
function selectPayment(method) {
alert("You selected " + method + " as your payment method. Your order is being processed!");
setTimeout(function() {
    window.location.href = "order-confirmation.html";
}, 1000); // 2-second delay before redirect
}