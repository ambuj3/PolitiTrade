// Function to open the selected form and hide the other
function openForm(formId) {
    document.getElementById('buyForm').style.display = 'none';
    document.getElementById('sellForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';

    document.getElementById(formId).style.display = 'block';
}

// Function to handle form submission and display success message
function submitForm(event, action) {
    event.preventDefault();

    let stockName, quantity, price;

    if (action === 'buy') {
        stockName = document.getElementById('buyStockName').value;
        quantity = document.getElementById('buyQuantity').value;
        price = document.getElementById('buyPrice').value;
    } else {
        stockName = document.getElementById('sellStockName').value;
        quantity = document.getElementById('sellQuantity').value;
        price = document.getElementById('sellPrice').value;
    }

    const totalCost = quantity * price;
    const message = `Successfully ${action}ed ${quantity} shares of ${stockName} at ₹${price} per stock. Total ${action === 'buy' ? 'cost' : 'revenue'}: ₹${totalCost}.`;

    document.getElementById('successMessage').innerText = message;
    document.getElementById('successMessage').style.display = 'block';

    // Clear the input fields
    document.getElementById(`${action}StockName`).value = '';
    document.getElementById(`${action}Quantity`).value = '';
    document.getElementById(`${action}Price`).value = '';
}
