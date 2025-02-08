const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

// Populate product dropdown
document.addEventListener("DOMContentLoaded", function() {
    const productSelect = document.getElementById("product");
    
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

// Form submission event listener
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your review! Your feedback has been submitted successfully.");
    
    // Increment review counter in localStorage
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);
    
    this.submit();
});

// Display review counter on review.html
if (window.location.pathname.includes("review.html")) {
    document.addEventListener("DOMContentLoaded", function() {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        document.getElementById("reviewCounter").textContent = `Total Reviews Submitted: ${reviewCount}`;
    });
}