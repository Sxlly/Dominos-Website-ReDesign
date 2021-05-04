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

    var addToCartButton = document.getElementsByClassName('shop-item-button')

    for (var index = 0; index < addToCartButton.length; index++) {

        var button = addToCartButton[index]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}


function purchaseClicked {

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











