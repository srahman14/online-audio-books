document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
        {
            message: "Online Audio Books has an amazing selection of audiobooks. The audio quality is fantastic, and the prices are reasonable.",
            name: "Emma W",
            country: "London"
        },
        {
            message: "I love how easy it is to find and purchase audiobooks. The website is user-friendly, and the customer support is excellent.",
            name: "John P",
            country: "Washtington DC"
        },
        {
            message: "The variety of genres and authors available is impressive. I’ve discovered so many great books through Online Audio Books.",
            name: "Sophie M",
            country: "London"
        },
    ];

    let currentIndex = 0;
    const messageElement = document.querySelector(".canvas-testimonal p");
    const nameElement = document.querySelector(".canvas-testimonal h2");
    const countryElement = document.querySelector(".canvas-testimonal h3");

    function updateTestimonial() {
        const testimonial = testimonials[currentIndex];
        messageElement.textContent = testimonial.message;
        nameElement.textContent = testimonial.name;
        countryElement.textContent = testimonial.country;

        currentIndex = (currentIndex + 1) % testimonials.length; // Loop back to first testimonial
    }

    updateTestimonial(); // Show first testimonial immediately
    setInterval(updateTestimonial, 5000); // Change every 5 seconds
});
