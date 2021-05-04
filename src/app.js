const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");


selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});


function openNav() {

    document.getElementById("side-panel").style.width = "250px";
};

function closeNav() {

    document.getElementById("side-panel").style.width = "0";
};


/* menu js */

if (document.readyState == 'loading') {

    document.addEventListener('DOMcontentLoaded', ready)
}

else {

    ready()
}

function ready() {

    var removeCartItemButtons = document.getElementsByClassName('btn-danger')

    for (var index = 0; index < removeCartItemButtons.length; index++) {

        var button = removeCartItemButtons[index]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')

    for (var index = 0; index < quantityInputs.length; index++) {

        var input = quantityInputs[index]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButton = document.getElementsByClassName('item-button')

    for (var index = 0; index < addToCartButton.length; index++) {

        var button = addToCartButton[index]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}


function purchaseClicked() {

    alert('Thank You For Your Order')

    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {

        cartItems.removeChild(cartItems.firstChild)
    }

    updateCartTotal()
}


function removeCartItem(event) {

    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {

    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {

        input.value = 1
    }

    updateCartTotal()

}

function addToCartClicked(event) {

    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item-title')[0].innerText
    var price = shopItem.getElementsByClassName('item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('item-img')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}


function addItemToCart(title, price, imageSrc) {

    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')

    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')

    for (var index = 0; index < cartItemNames.length; index++) {

        if (cartItemNames[index].innerText == title) {

            alert('This item is already in your cart')
            return
        }
    }

    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {

    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0

    for (var index = 0; index < cartRows.length; index++) {

        var cartRow = cartRows[index]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value

        total = total + (price * quantity)
    }

    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}












