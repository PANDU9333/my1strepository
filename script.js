// Store cart items
let cart = [];

// Update cart display (count and item list)
function updateCartDisplay() {
  const cartCount = document.getElementById("cart-count");
  const cartItemsContainer = document.getElementById("cart-items");

  cartCount.textContent = cart.length;
  cartItemsContainer.innerHTML = ""; // Clear previous items

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p style='color: #777;'>Your cart is empty.</p>";
  } else {
    cart.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.style.padding = "8px 12px";
      itemDiv.style.marginBottom = "8px";
      itemDiv.style.backgroundColor = "#f9f9f9";
      itemDiv.style.border = "1px solid #ccc";
      itemDiv.style.borderRadius = "8px";
      itemDiv.style.fontSize = "16px";
      itemDiv.style.color = "#333";
      itemDiv.textContent = `${item.name} - ${item.price}`;
      cartItemsContainer.appendChild(itemDiv);
    });
  }
}

// Add product to cart
function addToCart(name, price) {
  const exists = cart.some(item => item.name === name);
  if (!exists) {
    cart.push({ name, price });
    updateCartDisplay();
  }
}

// Remove product from cart
function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCartDisplay();
}

// Attach event listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".add-btn");
  const discardButtons = document.querySelectorAll(".discard-btn");

  addButtons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const name = card.querySelector("h3").textContent;
      const price = card.querySelector("p").textContent.split(" ")[0]; // Take only final price
      addToCart(name, price);
    });
  });

  discardButtons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const name = card.querySelector("h3").textContent;
      removeFromCart(name);
    });
  });

  updateCartDisplay(); // Initial load
});
document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const title = card.querySelector(".product-title").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
document.getElementById("searchInput").addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const title = card.querySelector(".product-title").textContent.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});

