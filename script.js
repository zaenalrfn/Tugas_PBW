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

// bagian popup login dan sign up
var signupBox = document.querySelector('.signup'),
loginBox = document.querySelector('.login'),
bodyBox = document.querySelector('body'),
boxsignUp = document.querySelector('.boxsignUp'),
boxLogin = document.querySelector('.boxLogin')

function login() {
  loginBox.style.display = 'flex'
  bodyBox.style.overflowY = 'hidden'
  boxLogin.classList.add('animaLogin')
  setTimeout(function(){
    boxLogin.classList.remove('animaLogin')
  }, 500)
}
function tutupLogin() {
  loginBox.style.display = ''
  bodyBox.style.overflowY = ''
}
function signup() {
  signupBox.style.display = 'flex'
  bodyBox.style.overflowY = 'hidden'
  boxsignUp.classList.add('animaSignUp')
  setTimeout(function(){
    boxsignUp.classList.remove('animaLogin')
  }, 500)

}
function tutupSignup() {
  signupBox.style.display = ''
  bodyBox.style.overflowY = ''
}
// animasi gsap
gsap.from('header', {y:-50, opacity: 0})
gsap.from('.titleJumboton', {x:-150, opacity: 0, duration: 1, ease: " power4.out"})
gsap.from('.buttonJumbotron button', {x:-150, opacity: 0, duration: 1.5})

// swiper js
 var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
         navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
});
