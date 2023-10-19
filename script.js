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

let slideImages =  document.querySelectorAll('img');//access the images
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

//access the indicators
let dots =  document.querySelectorAll('.dot')

var counter = 0;

//code for next button
next.addEventListener('click', slideNext);
function slideNext(){
 slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
 if(counter >= slideImages.length-1){
    counter = 0;
 }
 else{
    counter++;
 }
 slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}
//code for prev button 
prev.addEventListener('click', slidePrev);
function slidePrev(){
 slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
 if(counter == 0){
    counter = slideImages.length-1;
 }
 else{
    counter--;
 }
 slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
}
 //Auto sliding
 function autoSliding(){
    deletInterval = setInterval(timer, 2500);
    function timer(){
        slideNext();
    }
}
autoSliding();

//stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

//Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);








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



