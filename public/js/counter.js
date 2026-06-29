// =============================
// COUNTER ANIMATION
// =============================

const counters = document.querySelectorAll(".counter");

function animateCounter() {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const current = +counter.innerText.replace("+", "").replace(",", "");

        const increment = target / 150;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(animateCounter, 15);

        }

        else {

            counter.innerText = target.toLocaleString() + "+";

        }

    });

}

const statsSection = document.querySelector(".stats");

if (statsSection) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter();

                observer.disconnect();

            }

        });

    });

    observer.observe(statsSection);

}
