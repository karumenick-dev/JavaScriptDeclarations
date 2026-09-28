function generateSalesReport(salesData) {
  // Nested helper function to calculate total sales
  function calculateTotal() {
    return salesData.reduce((sum, item) => sum + item.amount, 0);
  }

  // Nested helper function to calculate average sales
  function calculateAverage(total) {
    return salesData.length ? total / salesData.length : 0;
  }

  // Nested helper function to calculate percentage breakdown
  function calculatePercentages(total) {
    return salesData.map(item => ({
      category: item.category,
      percentage: total ? ((item.amount / total) * 100).toFixed(2) + '%' : '0%'
    }));
  }

  // Main reporting logic using the nested functions
  const total = calculateTotal();
  const average = calculateAverage(total);
  const percentages = calculatePercentages(total);

  return {
    totalSales: total,
    averageSale: average,
    categoryPercentages: percentages
  };
}

// Example Usage:
const sales = [
  { category: "Electronics", amount: 500 },
  { category: "Clothing", amount: 300 },
  { category: "Groceries", amount: 200 }
];

console.log(generateSalesReport(sales));