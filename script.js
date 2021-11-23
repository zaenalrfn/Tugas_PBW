// ============================================

// KELOMPOK 1

// 1. ANDRE TRI HARIYANTO
// 2. JALALUDIN AHMADI
// 3. MUHAMMAD MICO FERDIAN
// 4. ZAENAL ARIFIN

// ============================================

const hambergerH4 = document.querySelector('.hamberger input');
const navbarNav = document.querySelector('.navbar nav');
const signUpLogin = document.querySelector('.signUpLogin')

hambergerH4.addEventListener('click', function(){
	navbarNav.classList.toggle('active')
	signUpLogin.classList.toggle('activeLogin')
})

// bagian navbar active 
var navbar_a_active = document.querySelectorAll('.navbar nav li a')
var navbar_ul = document.querySelector('.navbar nav ul')
navbar_a_active.forEach((el) => {
  el.addEventListener("click", function () {
    navbar_ul.querySelector(".activeLi").classList.remove("activeLi");
    el.classList.add("activeLi");
  });
});
// animasi gsap
gsap.from('header', {y:-50, opacity: 0})
gsap.from('.titleJumboton', {x:-150, opacity: 0, duration: 1, ease: " power4.out"})
gsap.from('.buttonJumbotron button', {x:-150, opacity: 0, duration: 1.5})



const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
