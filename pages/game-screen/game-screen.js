const images = document.querySelectorAll(".state-img, .city-img");
let selectedState = "cool";


document.addEventListener("DOMContentLoaded", function() {
    images.forEach(image => {
        image.addEventListener("click", function() {
            console.log(this.id);
        });
    });
});