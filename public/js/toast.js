// ==============================
// TOAST NOTIFICATION
// ==============================

function showToast(message, color = "#2e7d32") {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.innerHTML = message;
    toast.style.background = color;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}