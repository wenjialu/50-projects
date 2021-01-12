const open_btn = document.querySelector(".open-btn")
const close_btn = document.querySelector(".close-btn")
const nav = document.querySelectorAll(".nav")

open_btn.addEventListener('click',() =>{
    nav.forEach(nav_el => nav_el.classList.add("open"))
})



close_btn.addEventListener('click',() =>{
    nav.forEach(nav_el => nav_el.classList.remove("open"))
})