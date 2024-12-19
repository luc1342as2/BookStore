// Confirm deletion of a book
function confirmDelete(bookTitle) {
    return confirm(`Are you sure you want to delete the book "${bookTitle}"?`);
}

document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('table');
    if (table) {
        const headers = table.querySelectorAll('th');
        headers.forEach((header, index) => {
            header.addEventListener('click', () => {
                sortTable(table, index);
            });
        });
    }
});

function sortTable(table, columnIndex) {
    const rows = Array.from(table.querySelectorAll('tbody > tr'));
    const isNumericColumn = !isNaN(parseFloat(rows[0].children[columnIndex].textContent));

    rows.sort((a, b) => {
        const aValue = a.children[columnIndex].textContent.trim();
        const bValue = b.children[columnIndex].textContent.trim();

        return isNumericColumn
            ? parseFloat(aValue) - parseFloat(bValue)
            : aValue.localeCompare(bValue);
    });

    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}

// Confirmation dialog for deleting a book
function confirmDelete(bookTitle) {
    return confirm(`Are you sure you want to delete the book "${bookTitle}"?`);
}

// Add event listeners to all delete links
document.addEventListener('DOMContentLoaded', function () {
    const deleteLinks = document.querySelectorAll('a.delete-link');
    deleteLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const bookTitle = this.getAttribute('data-title');
            if (!confirmDelete(bookTitle)) {
                event.preventDefault(); // Prevent the link from navigating
            }
        });
    });

    // Enable table sorting
    const table = document.querySelector('table');
    if (table) {
        const headers = table.querySelectorAll('th');
        headers.forEach((header, index) => {
            header.addEventListener('click', () => {
                sortTable(table, index);
            });
        });
    }
});

// Function to sort table columns
function sortTable(table, columnIndex) {
    const rows = Array.from(table.querySelectorAll('tbody > tr'));
    const isNumericColumn = !isNaN(parseFloat(rows[0].children[columnIndex].textContent));

    rows.sort((a, b) => {
        const aValue = a.children[columnIndex].textContent.trim();
        const bValue = b.children[columnIndex].textContent.trim();

        return isNumericColumn
            ? parseFloat(aValue) - parseFloat(bValue)
            : aValue.localeCompare(bValue);
    });

    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}