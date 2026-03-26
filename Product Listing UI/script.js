const products = [
  {
    name: "Phone",
    price: 1200,
    category: "electronics",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Shirt",
    price: 500,
    category: "clothing",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Laptop",
    price: 3000,
    category: "electronics",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "T-Shirt",
    price: 700,
    category: "clothing",
    image: "https://via.placeholder.com/150"
  }
];

const container = document.getElementById("productContainer");

// Main display function
function displayProducts(filteredProducts) {
  container.innerHTML = "";

  if (filteredProducts.length === 0) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}">
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
      <p>${product.category}</p>
    `;

    container.appendChild(card);
  });
}

// Filter + Search + Sort
function applyFilters() {
  const category = document.getElementById("categoryFilter").value;
  const price = document.getElementById("priceFilter").value;
  const search = document.getElementById("search").value.toLowerCase();
  const sort = document.getElementById("sort").value;

  let filtered = products;

  // Category filter
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Price filter
  if (price === "low") {
    filtered = filtered.filter(p => p.price < 1000);
  } else if (price === "high") {
    filtered = filtered.filter(p => p.price >= 1000);
  }

  // Search filter
  filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(search)
  );

  // Sorting
  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

// Event listeners
document.getElementById("categoryFilter").addEventListener("change", applyFilters);
document.getElementById("priceFilter").addEventListener("change", applyFilters);
document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("sort").addEventListener("change", applyFilters);

// Initial load
displayProducts(products);