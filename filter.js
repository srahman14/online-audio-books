document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-option");
    const books = document.querySelectorAll(".catalog-table tbody tr"); // Select all book rows

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const selectedCategory = this.getAttribute("data-filter"); // Get selected category

            books.forEach((book) => {
                const bookCategories = book.getAttribute("data-category").split(" "); // Convert to array
                
                if (selectedCategory === "all" || bookCategories.includes(selectedCategory)) {
                    book.style.display = ""; // Show matching books
                } else {
                    book.style.display = "none"; // Hide non-matching books
                }
            });
        });
    });
});
