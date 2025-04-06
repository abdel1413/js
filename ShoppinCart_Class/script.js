import { products } from "./products.js";
console.log("pr", products);
const dessertCartContainer = document.getElementById("dessert-cart-container");
const cartBtn = document.getElementById("cart-btn");
const showHideCart = document.getElementById("show-hide-cart");
const cartContainer = document.getElementById("cart-container");
const selectedProductsContainer = document.getElementById(
  "selected-products-container"
);
const addToCartBtn = document.getElementsByClassName("btn add-to-cart-btn");
const totalItems = document.getElementById("total-items");
const subTotal = document.getElementById("sub-total");
const taxes = document.getElementById("taxes");
const total = document.getElementById("total");
const clearBtn = document.getElementById("clear-cart-btn");
const sumSection = document.getElementById("sum-section");
let isCartShowing = false;

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

    // get same product-count elt
    const sameProductCount = document.getElementById(
      `same-product-count-for-id${id}`
    );

    numberOfClickedOnProduct > 1
      ? (sameProductCount.textContent = `${numberOfClickedOnProduct}x `)
      : (selectedProductsContainer.innerHTML += `<div>
      <p><span class="same-product-count"
      id="same-product-count-for-id${id}"></span>
      ${product.name}</p>
      <p>${product.price}</p>
      </div>`);

    sumSection.style.borderTop = `2px double black`;
  }

  getCount() {
    return this.items.length;
  }

  calculateTaxes(amount) {
    return parseFloat((this.taxRate / 100) * amount).toFixed(2);
  }

  calculateTotal() {
    const subtotal = this.items.reduce((total, item) => total + item.price, 0);

    const tax = this.calculateTaxes(subtotal);
    this.total = subtotal + tax;
    subTotal.textContent = ` $${subtotal.toFixed(2)}`;
    taxes.textContent = ` $${tax}`;
    total.textContent = ` $${this.total}`;
    return this.total;
  }

  clearALl() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    } else {
      const yesClear = confirm(
        "Are you sure you want clear all items in your cart?"
      );
      if (yesClear) {
        this.items = [];
        sumSection.style.borderTop = `none`;
        selectedProductsContainer.textContent = "";
        totalItems.textContent = ` $0`;
        subTotal.textContent = ` $0`;
        taxes.textContent = ` $0`;
        total.textContent = ` $0`;
      }
    }
  }
}

const cart = new ShoppingCart();

// Note addtoCatBtns is an array-like not real array
//hence we need to convert it to array in order to be able to loop
//thru it
[...addToCartBtn].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    cart.addProduct(Number(event.target.id), products);
    totalItems.textContent = cart.getCount();
    cart.calculateTotal();
  });
});

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCart.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});
clearBtn.addEventListener("click", cart.clearALl.bind(cart));
