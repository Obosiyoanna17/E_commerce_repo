// Selects all elements with the class (".add-to-cart-btn"). This returns a NodeList of all buttons with this class.
const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");

// Adds an event listener to each button for the click event
addToCartBtn.forEach (function (btn) {
    // When a button is clicked, it triggers the handleAddToCart function, passing the event object e as an argument.
    btn.addEventListener("click", function(e){
        handleAddToCart(e);
    })
})
// This function is executed whenever a button is clicked. The event object e provides details about the event, such as the button clicked (e.target).
function handleAddToCart(e){
    // alert(e.target.parentNode.dataset.name)
    // alert(e.target.parentNode.dataset.price)

    // Create element
    const newProductName = document.createElement('p')
    const newProductPrice = document.createElement('p')
    const removeButton = document.createElement('button')
    const newDiv = document.createElement('div')

    newProductName.textContent = e.target.parentNode.dataset.name
    newProductPrice.innerHTML = "&#x020a6;" + e.target.parentNode.dataset.price
    removeButton.textContent = "Remove"
    
    // Append the created element unto the new div
    newDiv.appendChild (newProductName)
    newDiv.appendChild (newProductPrice)
    newDiv.appendChild (removeButton)

    const cartItems = document.querySelector('.cart-items')
    cartItems.appendChild(newDiv)

    // Remove Button : Added an event listener, so tht on click, the items in cart will be removed.
    removeButton.addEventListener("click", function(e){
        newDiv.remove(e);
    });

}
// Get the corresponding details of the button clicked