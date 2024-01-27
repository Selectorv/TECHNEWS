
let mobileMenu = document.querySelector(".mobile")
let menuBtn = document.querySelector(".menuBtn")
let menuBtnDisplay = true;

menuBtn.addEventListener("click",()=>{
    mobileMenu.classList.toggle("hidden")
})



 

//fetchData(`all`).then(data =>  console.log(data))

 const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn . onclick = function () {
    dropDownMenu .classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    
   toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"

    
}



