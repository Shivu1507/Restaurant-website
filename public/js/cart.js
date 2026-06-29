// =============================
// SHOPPING CART
// =============================

let cart = [];

loadCart();

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}

function loadCart() {

    const data = localStorage.getItem("cart");

    if (data) {

        cart = JSON.parse(data);

    }

    updateCart();

}

function addToCart(name, price) {

    cart.push({

        name: name,
        price: price

    });

    saveCart();

    updateCart();

}

function updateCart() {

    const container = document.getElementById("cart-items");

    const cartCount = document.getElementById("cart-count");

    const totalPrice = document.getElementById("total-price");

    if (!container || !cartCount || !totalPrice) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        container.innerHTML += `

        <div class="cart-item">

            <h4>${item.name}</h4>

            <p>₹${item.price}</p>

            <button onclick="removeItem(${index})">Remove</button>

        </div>

        `;

    });

    cartCount.innerText = cart.length;

    totalPrice.innerText = total;

}

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}

// =============================
// ADD TO CART BUTTON
// =============================

document.querySelectorAll(".price-cart button").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".food-card");

        const name = card.querySelector("h3").innerText;

        const priceText = card.querySelector(".price-cart span").innerText;

        const price = parseInt(priceText.replace("₹", ""));

        addToCart(name, price);

        showToast("🛒 Item Added to Cart");

        button.style.background = "#2e7d32";

        setTimeout(() => {

            button.innerHTML = "Add to Cart";

            button.style.background = "#d62828";

        }, 1200);

    });

});

// =============================
// CART SIDEBAR
// =============================

const cartIcon = document.querySelector(".cart-icon");

const cartSidebar = document.getElementById("cart-sidebar");

const closeCart = document.getElementById("close-cart");

if (cartIcon) {

    cartIcon.addEventListener("click", () => {

        cartSidebar.classList.add("open");

    });

}

if (closeCart) {

    closeCart.addEventListener("click", () => {

        cartSidebar.classList.remove("open");

    });

}