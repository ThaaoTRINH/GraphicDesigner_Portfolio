/*--------professional----*/
const numbers = document.querySelectorAll('.number')
const percentages = document.querySelectorAll('.percentage')
const contentLeft=document.querySelector('.contentLeft')

window.addEventListener('scroll', fixSkill)

function fixSkill() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    

    numbers.forEach((item, idx) => {
        const boxTop = contentLeft.getBoundingClientRect().top
        console.log(triggerBottom, boxTop);
        if (boxTop < triggerBottom) {
            a = Number(item.innerHTML.slice(0, 2));
            percentages[idx].style.width = a / 100 * 400 + 'px'
        }
    }
    )
  
};

/*----experience-----*/
const terms = document.querySelectorAll('.term')

window.addEventListener('scroll', termShow)

function termShow() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    
    terms.forEach(term => {
        const boxTop = term.getBoundingClientRect().top
        console.log(triggerBottom, boxTop);
        if (boxTop < triggerBottom) {
            term.classList.add('active')
        }
    })
}  
/*---menu active----*/
const menus = document.querySelectorAll('.menu')
console.log(menus, menus.length)
for (let i = 0; i < menus.length; i++){
    menus[i].addEventListener('click', function () {
        var current = document.querySelector('.menuActive')
    current.className = current.className.replace('menuActive','')
    this.className +=' menuActive'
    })
}

/*---projects slideshow----*/
var slideIndex = 0;
showSlides();

function showSlides(){
    const slides = document.querySelectorAll('.mySlide')
    
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*-------*/
/* const vgbtn = document.getElementById('vg-btn')
const sakos = document.querySelector('.sakos')
const vgFood = document.querySelector('.vgFood')
const vgProjects = document.querySelector('.vg-projects')
const projects = document.querySelector('.projects')
const vgClose = document.getElementById('vg-close')

vgbtn.addEventListener('click', () => {
    sakos.visibility.display = "hidden";
    vgFood.visibility.display = "hidden"
    slideShow.visibility.display = "hidden"
    vgProjects.style.display = "block"
})

vgClose.addEventListener('click', () => {
    sakos.style.display = "block";
    vgFood.style.display = "block"
    projects.style.display = "block"
    vgProjects.style.display = "none"
}) */

