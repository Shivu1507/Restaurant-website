// =============================
// TESTIMONIAL SLIDER
// =============================

const testimonials = document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showSlide(index) {

    testimonials.forEach(slide => {

        slide.classList.remove("active");

    });

    testimonials[index].classList.add("active");

}

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

if (nextBtn) {

    nextBtn.onclick = () => {

        currentSlide++;

        if (currentSlide >= testimonials.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    };

}

if (prevBtn) {

    prevBtn.onclick = () => {

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide = testimonials.length - 1;

        }

        showSlide(currentSlide);

    };

}

if (testimonials.length > 0) {

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= testimonials.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 4000);

}
const gallery=document.querySelectorAll(".gallery-item img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

const closeLightbox=document.getElementById("closeLightbox");

gallery.forEach(image=>{

image.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=image.src;

}

});

closeLightbox.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};
const reservationForm = document.getElementById("reservationForm");

if(reservationForm){

reservationForm.addEventListener("submit",(e)=>{

e.preventDefault();

const reservation={

name:name.value,

email:email.value,

phone:phone.value,

guests:guests.value,

date:date.value,

time:time.value

};

console.log(reservation);

showToast("🎉 Reservation Successful!");

reservationForm.reset();

});

}
const text = "Experience Luxury Dining";

const typing = document.getElementById("typing");

let index = 0;

function typeEffect(){

if(index < text.length){

typing.innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect,80);

}

}

typeEffect();
const themeToggle=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

themeToggle.innerHTML="☀️";

}

themeToggle.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeToggle.innerHTML="☀️";

}

else{

localStorage.setItem("theme","light");

themeToggle.innerHTML="🌙";

}

};