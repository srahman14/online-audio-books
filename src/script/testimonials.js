document.addEventListener("DOMContentLoaded", function () {
    // All the messages of testimonials which will be swapped through every 5 seconds
    const testimonials = [
        {
            message: "Online Audio Books has an amazing selection of audiobooks. The audio quality is fantastic, and the prices are reasonable.",
            name: "Emma W",
            country: "London"
        },
        {
            message: "I love how easy it is to find and purchase audiobooks. The website is user-friendly, and the customer support is excellent.",
            name: "John P",
            country: "London"
        },
        {
            message: "The variety of genres and authors available is impressive. I’ve discovered so many great books through Online Audio Books.",
            name: "Sophie M",
            country: "London"
        },
    ];

    // Set the current index as 0, i.e. the first object
    let currentIndex = 0;   
    // Get the message element, name element and country element from the page using query selector
    const messageElement = document.querySelector(".canvas-testimonal p");
    const nameElement = document.querySelector(".canvas-testimonal h2");
    const countryElement = document.querySelector(".canvas-testimonal h3");

    // Update each of the content of the elements with the corresponding information from the testimonials
    // array
    function updateTestimonial() {
        const testimonial = testimonials[currentIndex];
        messageElement.textContent = testimonial.message;
        nameElement.textContent = testimonial.name;
        countryElement.textContent = testimonial.country;
        // Loop back to first testimonial
        currentIndex = (currentIndex + 1) % testimonials.length; 
    }
    // Show first testimonial immediately
    updateTestimonial();
    // Change every 5 seconds
    setInterval(updateTestimonial, 5000); 
});
