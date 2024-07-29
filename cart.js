
var cart = localStorage.getItem('cart');

var cartItems = JSON.parse(cart);


function displayCartItems() {
    var cartItemsContainer = document.getElementById('cartItems');
    var totalAmount = 0;

    cartItems.forEach(function(item) {
        var itemTotal = parseFloat(item.price) ;
        totalAmount += itemTotal;

        var itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.il}" alt="${item.title}">
            <div class="cart-item-info">
                <h3>${item.title}</h3>
                <p>Description: ${item.description}</p>
                <p>Price: ₹${item.price}</p>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById('totalAmount').textContent = '₹' + totalAmount.toFixed(2);
}


displayCartItems();



function cl(){
    console.log("called");
    let emptarr = [];
    localStorage.setItem('cart', JSON.stringify(emptarr));
    window.location.href = 'cart.html';
}