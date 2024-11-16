const BASE_URL = 'http://localhost:8080/api';

// Fetch and display all categories
async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/categories`);
  const data = await response.json();

  const tableBody = document.getElementById('categoriesTableBody');
  tableBody.innerHTML = data.content.map(category => `
    <tr>
      <td>${category.id}</td>
      <td>${category.name}</td>
      <td>
        <button onclick="editCategory(${category.id}, '${category.name}')">Edit</button>
        <button onclick="deleteCategory(${category.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

// Save a category (create or update)
async function saveCategory(event) {
  event.preventDefault();

  const id = document.getElementById('categoryId').value;
  const name = document.getElementById('categoryName').value;

  const method = id ? 'PUT' : 'POST';
  const url = id ? `${BASE_URL}/categories/${id}` : `${BASE_URL}/categories`;

  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, name })
  });

  document.getElementById('categoryForm').reset();
  fetchCategories();
}

// Edit a category
function editCategory(id, name) {
  document.getElementById('categoryId').value = id;
  document.getElementById('categoryName').value = name;
}

// Delete a category
async function deleteCategory(id) {
  await fetch(`${BASE_URL}/categories/${id}`, { method: 'DELETE' });
  fetchCategories();
}

// Fetch products
async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();

  const tableBody = document.getElementById('productsTableBody');
  tableBody.innerHTML = data.content.map(product => `
    <tr>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.category.name}</td>
      <td>
        <button onclick="editProduct(${product.id}, '${product.name}', ${product.price}, ${product.category.id})">Edit</button>
        <button onclick="deleteProduct(${product.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

// Save a product (create or update)
async function saveProduct(event) {
  event.preventDefault();

  const id = document.getElementById('productId').value;
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const categoryId = document.getElementById('productCategory').value;

  const method = id ? 'PUT' : 'POST';
  const url = id ? `${BASE_URL}/products/${id}` : `${BASE_URL}/products`;

  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, name, price, category: { id: categoryId } })
  });

  document.getElementById('productForm').reset();
  fetchProducts();
}

// Populate category dropdown for products
async function populateCategoryDropdown() {
  const response = await fetch(`${BASE_URL}/categories`);
  const data = await response.json();

  const dropdown = document.getElementById('productCategory');
  dropdown.innerHTML = data.content.map(category => `
    <option value="${category.id}">${category.name}</option>
  `).join('');
}

// Delete a product
async function deleteProduct(id) {
  await fetch(`${BASE_URL}/products/${id}`, { method: 'DELETE' });
  fetchProducts();
}

// Event listeners for forms
document.getElementById('categoryForm').addEventListener('submit', saveCategory);
document.getElementById('productForm').addEventListener('submit', saveProduct);
