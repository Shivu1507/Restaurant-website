// ==============================
// APP INITIALIZATION
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🍽️ Restaurant Management System Loaded Successfully!");

});
document.addEventListener("DOMContentLoaded", () => {

    const typing = document.getElementById("typing");

    if (typing) {

        const text = "Experience Luxury Dining";
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                typing.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 80);
            }
        }

        typeEffect();
    }

});