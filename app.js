let ham_btn = document.querySelector("#icon");
let nav_list = document.querySelector(".nav-menu");

ham_btn.addEventListener("click", function() {
    nav_list.classList.toggle("show");
});
