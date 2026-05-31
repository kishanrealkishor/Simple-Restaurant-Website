// ==========================================================================
// MENU DATA
// ==========================================================================
const MENU_DATA = [
  {
    id: 1,
    name: "Chicken Burger",
    category: "Non-Veg",
    price: 8.99,
    desc: "Grilled chicken burger with cheese and fresh lettuce.",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=300"
  },
  {
    id: 2,
    name: "BBQ Chicken Wings",
    category: "Non-Veg",
    price: 9.49,
    desc: "Smoky BBQ chicken wings served with ranch dip.",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=300"
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    category: "Non-Veg",
    price: 11.99,
    desc: "Loaded pepperoni pizza with mozzarella cheese.",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300"
  },
  {
    id: 4,
    name: "Fish Tacos",
    category: "Non-Veg",
    price: 9.99,
    desc: "Fresh fish tacos topped with tangy slaw.",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=300"
  },

  {
    id: 5,
    name: "Veggie Burger",
    category: "Veg",
    price: 7.49,
    desc: "Plant-based burger with fresh vegetables.",
    img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=300"
  },
  {
    id: 6,
    name: "French Fries",
    category: "Veg",
    price: 3.99,
    desc: "Golden crispy fries served hot and fresh.",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=300"
  },
  {
    id: 7,
    name: "Mac & Cheese",
    category: "Veg",
    price: 6.99,
    desc: "Creamy macaroni pasta with rich cheddar cheese.",
    img: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?q=80&w=300"
  },
  {
    id: 8,
    name: "Garden Salad",
    category: "Veg",
    price: 5.99,
    desc: "Fresh lettuce, cucumber, tomato and dressing.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=300"
  },
  {
    id: 9,
    name: "Mozzarella Sticks",
    category: "Veg",
    price: 6.49,
    desc: "Crispy mozzarella sticks with marinara sauce.",
    img: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?q=80&w=300"
  },
  {
    id: 10,
    name: "Onion Rings",
    category: "Veg",
    price: 4.99,
    desc: "Crunchy battered onion rings served with dip.",
    img: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=300"
  },
  {
    id: 11,
    name: "Cheese Pizza",
    category: "Veg",
    price: 10.99,
    desc: "Classic cheese pizza with mozzarella and herbs.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=300"
  },
  {
    id: 12,
    name: "Garlic Bread",
    category: "Veg",
    price: 4.49,
    desc: "Toasted garlic bread with butter and herbs.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300"
  },
  {
    id: 13,
    name: "Veg Burrito Bowl",
    category: "Veg",
    price: 8.49,
    desc: "Rice, beans, corn and fresh vegetables bowl.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=300"
  },
  {
    id: 14,
    name: "Chocolate Brownie",
    category: "Veg",
    price: 4.49,
    desc: "Rich chocolate brownie served warm.",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=300"
  },
  {
    id: 15,
    name: "New York Cheesecake",
    category: "Veg",
    price: 5.99,
    desc: "Creamy New York style cheesecake with berry topping.",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=300"
  }
];

// ==========================================================================
// GLOBAL VARIABLES
// ==========================================================================
let cartState = {};

let currentCategoryFilter = "All";


// ==========================================================================
// PAGE SWITCH
// ==========================================================================
function switchPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });

    const targetPage = document.getElementById(pageId);

    if(targetPage){

        targetPage.classList.add("active");

    }

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}


// ==========================================================================
// MENU RENDER
// ==========================================================================
function renderMenuDisplay(itemsToRender){

    const container =
    document.getElementById("menu-items-container");

    if(!container) return;

    container.innerHTML = "";

    itemsToRender.forEach(item => {

        const qty =
        cartState[item.id]
        ?
        cartState[item.id].qty
        :
        0;

        const card = document.createElement("div");

        card.className = "menu-item-card";

        card.innerHTML = `

            <img
            src="${item.img}"
            class="menu-item-img">

            <div class="menu-item-body">

                <h3>${item.name}</h3>

                <p>${item.desc}</p>

                <h4>$${item.price.toFixed(2)}</h4>

                ${
                    qty > 0
                    ?
                    `
                    <div class="cart-control-actions">

                        <button
                        class="qty-pill-btn"
                        onclick="updateCartQuantity(${item.id}, -1)">
                        -
                        </button>

                        <span>${qty}</span>

                        <button
                        class="qty-pill-btn"
                        onclick="updateCartQuantity(${item.id}, 1)">
                        +
                        </button>

                    </div>
                    `
                    :
                    `
                    <button
                    class="btn btn-full"
                    onclick="updateCartQuantity(${item.id}, 1)">

                    Add To Cart

                    </button>
                    `
                }

            </div>

        `;

        container.appendChild(card);

    });

}


// ==========================================================================
// FILTER
// ==========================================================================
function filterCategory(categoryName){

    currentCategoryFilter = categoryName;

    executeCombinedFilter();

    switchPage("menu");

}


function handleSearch(){

    executeCombinedFilter();

}


function executeCombinedFilter(){

    const searchInput =
    document.getElementById("menu-search");

    const searchVal =
    searchInput
    ?
    searchInput.value.toLowerCase()
    :
    "";

    const filtered = MENU_DATA.filter(item => {

        const matchCategory =
        currentCategoryFilter === "All"
        ||
        item.category === currentCategoryFilter;

        const matchSearch =
        item.name.toLowerCase().includes(searchVal)
        ||
        item.desc.toLowerCase().includes(searchVal);

        return matchCategory && matchSearch;

    });

    renderMenuDisplay(filtered);

}


// ==========================================================================
// CART
// ==========================================================================
function updateCartQuantity(itemId, change){

    const item =
    MENU_DATA.find(i => i.id === itemId);

    if(!item) return;

    if(!cartState[itemId]){

        cartState[itemId] = {

            ...item,
            qty: 0

        };

    }

    cartState[itemId].qty += change;

    if(cartState[itemId].qty <= 0){

        delete cartState[itemId];

    }

    refreshCartUI();

    executeCombinedFilter();

}


// ==========================================================================
// REFRESH CART
// ==========================================================================
function refreshCartUI(){

    let totalItems = 0;

    let totalPrice = 0;

    Object.values(cartState).forEach(item => {

        totalItems += item.qty;

        totalPrice += item.qty * item.price;

    });


    // CART COUNT
    const cartCount =
    document.getElementById("cart-count");

    if(cartCount){

        cartCount.textContent = totalItems;

    }


    // CART TOTAL
    const totalPriceEl =
    document.getElementById("cart-total-price");

    if(totalPriceEl){

        totalPriceEl.textContent =
        totalPrice.toFixed(2);

    }


    // CHECKOUT TOTAL
    const checkoutTotal =
    document.getElementById("checkout-total-price");

    if(checkoutTotal){

        checkoutTotal.textContent =
        totalPrice.toFixed(2);

    }


    // CART ITEMS
    const cartContainer =
    document.getElementById("cart-items");

    if(!cartContainer) return;

    cartContainer.innerHTML = "";


    // EMPTY CART
    if(totalItems === 0){

        cartContainer.innerHTML = `

            <div class="empty-state">

                <h3>Your Cart is Empty</h3>

                <p>Add food items 🍔</p>

                <button
                class="btn"
                onclick="switchPage('menu')">

                Browse Menu

                </button>

            </div>

        `;

        return;

    }


    // CART ROWS
    Object.values(cartState).forEach(item => {

        const row = document.createElement("div");

        row.className = "cart-item-row";

        row.innerHTML = `

            <div class="cart-item-info">

                <img
                src="${item.img}"
                style="
                    width:70px;
                    height:70px;
                    border-radius:10px;
                    object-fit:cover;
                    margin-right:1rem;
                ">

                <div>

                    <h4>${item.name}</h4>

                    <p>

                        $${item.price.toFixed(2)}
                        ×
                        ${item.qty}

                    </p>

                    <strong>

                        $${(item.qty * item.price).toFixed(2)}

                    </strong>

                </div>

            </div>

            <div class="cart-control-actions">

                <button
                class="qty-pill-btn"
                onclick="updateCartQuantity(${item.id}, -1)">
                -
                </button>

                <span>${item.qty}</span>

                <button
                class="qty-pill-btn"
                onclick="updateCartQuantity(${item.id}, 1)">
                +
                </button>

            </div>

        `;

        cartContainer.appendChild(row);

    });

}


// ==========================================================================
// AUTH VIEW
// ==========================================================================
function toggleAuthView(targetBoxId){

    document.querySelectorAll(".auth-box").forEach(box => {

        box.classList.remove("active-auth-box");

    });

    const targetBox =
    document.getElementById(`${targetBoxId}-box`);

    if(targetBox){

        targetBox.classList.add("active-auth-box");

    }

}


// ==========================================================================
// SIGNUP
// ==========================================================================
async function registerUser(name, email, password){

    try{

        const response = await fetch(
            "http://127.0.0.1:5000/signup",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    name,
                    email,
                    password

                })

            }
        );

        const data = await response.json();

        alert(data.message);

        if(data.success){

            toggleAuthView("signin");

        }

    }

    catch(error){

        console.log(error);

        alert("Server Error");

    }

}


async function signupSubmit(event){

    event.preventDefault();

    const inputs =
    event.target.querySelectorAll("input");

    const name = inputs[0].value;

    const email = inputs[1].value;

    const password = inputs[2].value;

    await registerUser(name, email, password);

    event.target.reset();

}


// ==========================================================================
// LOGIN
// ==========================================================================
async function loginUser(email, password){

    try{

        const response = await fetch(
            "http://127.0.0.1:5000/login",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    email,
                    password

                })

            }
        );

        const data = await response.json();

        alert(data.message);

        if(data.success){

            const authBtn =
            document.getElementById("auth-nav-btn");

            if(authBtn){

                authBtn.textContent = "My Account";

            }

            switchPage("home");

        }

    }

    catch(error){

        console.log(error);

        alert("Login Error");

    }

}


async function loginSubmit(event){

    event.preventDefault();

    const inputs =
    event.target.querySelectorAll("input");

    const email = inputs[0].value;

    const password = inputs[1].value;

    await loginUser(email, password);

}


// ==========================================================================
// PAYMENT METHOD
// ==========================================================================
function togglePaymentForm(method){

    document.querySelectorAll(".pay-method-card")
    .forEach(card => {

        card.classList.remove("active-pay");

    });

    const targetInput =
    document.querySelector(`input[value="${method}"]`);

    if(targetInput){

        targetInput.closest(".pay-method-card")
        .classList.add("active-pay");

    }

}


// ==========================================================================
// CHECKOUT
// ==========================================================================
async function processOrderPlacement(event){

    event.preventDefault();

    const items = Object.values(cartState);

    if(items.length === 0){

        alert("Cart is Empty");

        switchPage("menu");

        return;

    }


    // TOTAL
    let total = 0;

    items.forEach(item => {

        total += item.price * item.qty;

    });


    // CUSTOMER DETAILS
    const customerName =
    document.getElementById("checkout-name").value;

    const customerEmail =
    document.getElementById("checkout-email").value;

    const customerPhone =
    document.getElementById("checkout-phone").value;

    const customerAddress =
    document.getElementById("checkout-address").value;


    // PAYMENT
    const paymentMethod =
    document.querySelector(
        "input[name='payment_selector']:checked"
    ).value;


    // CARD DETAILS
    const cardName =
    document.getElementById("card-name")
    ?
    document.getElementById("card-name").value
    :
    "";

    const cardNumber =
    document.getElementById("card-number")
    ?
    document.getElementById("card-number").value
    :
    "";

    const cardExpiry =
    document.getElementById("card-expiry")
    ?
    document.getElementById("card-expiry").value
    :
    "";


    try{

        const response = await fetch(
            "http://127.0.0.1:5000/checkout",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    customerName,
                    customerEmail,
                    customerPhone,
                    customerAddress,

                    paymentMethod,

                    cardName,
                    cardNumber,
                    cardExpiry,

                    items,
                    total

                })

            }
        );

        const data = await response.json();

        alert(data.message);

        if(data.success){

            cartState = {};

            refreshCartUI();

            executeCombinedFilter();

            switchPage("home");

        }

    }

    catch(error){

        console.log(error);

        alert("Checkout Error");

    }

}


// ==========================================================================
// INITIAL LOAD
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {

    renderMenuDisplay(MENU_DATA);

    refreshCartUI();

});