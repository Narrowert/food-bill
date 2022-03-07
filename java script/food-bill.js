const btnShowMore = document.getElementById('btn');
const elShowMore = document.querySelectorAll('.more__btn');

btnShowMore.addEventListener("click", (e)=> {

    elShowMore.forEach(el => {
        el.style.display = "block";
    });
        btnShowMore.style.display = "none";
})

const swiper = new Swiper('.testimonials__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.btn__next',
        prevEl: '.btn__prev',
      },
})

const anchors = document.querySelectorAll('.nav__link');
for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
}

const navBtns = document.querySelectorAll('.nav__link');
    navBtns.forEach(el => {
        el.addEventListener("click", function(e) {
            e.classList.toggle('active');
    })
});

/* Burger */
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', (e) => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav--active');
    overlay.classList.toggle('overlay--active');
});

/* Header */
const header = document.querySelector('.header__container');
const firstPage = document.querySelector('.section__work');
const headerHeight = header.offsetHeight;
const firstHeight = firstPage.offsetHeight;


window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    if(scrollDistance >= firstHeight){
        header.classList.add('header__container--active')
    }
})

/* Modal */
var modal = document.querySelector(".modal");
var btnModal = document.querySelector(".btn-modal__open");
var span = document.getElementsByClassName("close_modal_window")[0];

btnModal.onclick = function () {
   modal.style.display = "block";
}

span.onclick = function () {
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}

/* Mask phone */
$(function () {
    $("#phone").mask("(99) 999-99-99");
});