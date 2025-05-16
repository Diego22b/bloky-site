// ====== FILTROS DE PRODUTO ======
const categoryLinks = document.querySelectorAll('[data-category]');
const priceLinks = document.querySelectorAll('[data-price]');
const products = document.querySelectorAll('.product-card');

let selectedCategory = "todos";
let selectedPrice = "todos";

categoryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    selectedCategory = link.getAttribute('data-category');
    updateActive(categoryLinks, link);
    filterProducts();
  });
});

priceLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    selectedPrice = link.getAttribute('data-price');
    updateActive(priceLinks, link);
    filterProducts();
  });
});

function updateActive(links, activeLink) {
  links.forEach(l => l.classList.remove('active'));
  activeLink.classList.add('active');
}

function filterProducts() {
  products.forEach(product => {
    const category = product.getAttribute('data-category');
    const price = parseFloat(product.getAttribute('data-price'));

    const matchCategory = selectedCategory === "todos" || category === selectedCategory;

    const matchPrice =
      selectedPrice === "todos" ||
      (selectedPrice === "ate50" && price <= 50) ||
      (selectedPrice === "50a100" && price > 50 && price <= 100) ||
      (selectedPrice === "100mais" && price > 100);

    if (matchCategory && matchPrice) {
      product.style.display = "block";
      product.style.opacity = 1;
    } else {
      product.style.display = "none";
      product.style.opacity = 0;
    }
  });
}

// ====== MENU LATERAL COLAPSÁVEL NO MOBILE ======
const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
