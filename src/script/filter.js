document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-option");
    // Select all book rows from table entries (tr)
    const books = document.querySelectorAll(".catalog-table tbody tr"); 

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Get selected category from the data filter
            const selectedCategory = this.getAttribute("data-filter"); 

            books.forEach((book) => {
                // Add the book categories and convert into array
                const bookCategories = book.getAttribute("data-category").split(" "); 
                
                if (selectedCategory === "all" || bookCategories.includes(selectedCategory)) {
                    // Show matching books
                    book.style.display = ""; 
                } else {
                    // Hide non-matching books
                    book.style.display = "none"; 
                }
            });
        });
    });
});
