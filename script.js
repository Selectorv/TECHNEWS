//const API_KEY = "3e032a9e100f432f9b207bc608d2b071"
//const url =  "https://newsapi.org/v2/everything?q="



//async function fetchData (query){
    //const res = await fetch(`${url}${query}&apikey=${API_KEY} `)
   // const data = await res.json()
    //return data
    
//}


////fetchData("ipi2023")

let mobileMenu = document.querySelector(".mobile")
let menuBtn = document.querySelector(".menuBtn")
let menuBtnDisplay = true;

menuBtn.addEventListener("click",()=>{
    mobileMenu.classList.toggle("hidden")
})
















fetchData(`all`).then(data =>  console.log(data))

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



