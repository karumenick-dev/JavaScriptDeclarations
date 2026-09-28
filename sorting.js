function sortProducts(products, criteria) {
  // Nested comparator function for sorting by price (low to high)
  function compareByPrice(a, b) {
    return a.price - b.price;
  }

  // Nested comparator function for sorting by name (alphabetical)
  function compareByName(a, b) {
    return a.name.localeCompare(b.name);
  }

  // Nested comparator function for multi-level sorting (in-stock items first, then by price)
  function compareByAvailabilityThenPrice(a, b) {
    if (a.inStock === b.inStock) {
      return compareByPrice(a, b); // Reuse nested helper
    }
    return a.inStock ? -1 : 1;
  }

  // Choose the appropriate nested sorting rule based on the criteria passed in
  switch (criteria) {
    case 'price':
      return [...products].sort(compareByPrice);
    case 'name':
      return [...products].sort(compareByName);
    case 'availability':
      return [...products].sort(compareByAvailabilityThenPrice);
    default:
      return products;
  }
}

// Example Usage:
const inventory = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true }
];

console.log(sortProducts(inventory, 'price'));
console.log(sortProducts(inventory, 'availability'));