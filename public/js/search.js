// =============================
// LIVE SEARCH
// =============================

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", () => {

        const value = searchBox.value.toLowerCase();

        foodCards.forEach(card => {

            const title = card.querySelector("h3").innerText.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

}