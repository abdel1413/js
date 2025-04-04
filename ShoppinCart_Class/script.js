const dessertCartContainer = document.getElementById("dessert-cart-container");
const cartBtn = document.getElementById("cart-btn");
const showHideCart = document.getElementById("show-hide-cart");
const cartContainer = document.getElementById("cart-container");
const selectedProductsContainer = document.getElementById(
  "selected-products-container"
);

const totalItems = document.getElementById("total-items");

let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
  {
    id: 2,
    name: "French Macaron",
    price: 3.99,
    category: "Macaron",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macarons (4 Pack)",
    price: 9.99,
    category: "Macaron",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 11,
    name: "Vanilla Macarons (5 Pack)",
    price: 11.99,
    category: "Macaron",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];

products.forEach(({ id, name, category, price }) => {
  dessertCartContainer.innerHTML += `
     <div class="dessert-cart">
     <h2>${name}</h2>
     <p class="dessert-price">${price}</p>
     <p class="product-category">Category: ${category}</p>
     <buttin id="${id}"
     class="btn add-to-cart-btn">Add to Cart</button>
     </div>`;
});

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addProduct(id, products) {
    const product = products.find((product) => product.id === id);
    console.log("product", product);
    this.items.push(product);

    const productCount = {};

    //check if the product is already there to increment by 1
    // or set to 1 otherwise
    this.items.forEach((item) => {
      productCount[item.id] = (productCount[item.id] || 0) + 1;
    });

    // display product when clicked on its btn
    // if more than 1 clicked, show number of time user select same items
    const numberOfClickedOnProduct = productCount[product.id];
    console.log("numberOfClickedOnProduct", numberOfClickedOnProduct);
    // get same product-count elt
    const sameProductCount = document.getElementById(
      `same-product-count-for${id}`
    );
    console.log("sameProductCount", sameProductCount);
    numberOfClickedOnProduct > 1
      ? (sameProductCount.textContent = `${numberOfClickedOnProduct}x`)
      : (selectedProductsContainer.innerHTML += `<div>
      <p> <span class="same-product-count"
      id="same-product-count-for${id}"></span>
      ${product.name}</p>
      <p>${product.price}</p>
      </div>`);
  }

  getCount() {
    return this.items.length;
  }

  calculateSubTotal() {}
  calculateTotal() {}
}

const cart = new ShoppingCart();

const addToCartBtn = document.getElementsByClassName("btn add-to-cart-btn");

// Note addtoCatBtns is an array-like not real array
//hence we need to convert it to array in order to be able to loop
//thru it
[...addToCartBtn].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log("event", event.target.id);
    cart.addProduct(Number(event.target.id), products);
    totalItems.textContent = cart.getCount();
  });
});

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCart.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});
