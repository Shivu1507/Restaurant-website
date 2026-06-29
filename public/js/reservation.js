// =============================
// BOOK TABLE BUTTON
// =============================

function bookTable() {
    showToast("📅 Booking feature coming soon!");
}
function showToast(message,color="#2e7d32"){

const toast=document.getElementById("toast");

toast.innerHTML=message;

toast.style.background=color;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},3000);

}