// mob nav 
let btnNavEl = document.querySelector('.btn-mob-nav');
let headerEl = document.querySelector('.header__menu');
// let mobNavBtn = document.querySelector('.icon-mob-nav');

// btnNavEl.addEventListener("click", function(){
//    headerEl.classList.toggle('active');

// })
// let header_menu = document.querySelector('.main-nav');
let back = document.querySelector('body');
let header__list = document.querySelector('.menu__list');

btnNavEl.onclick = function(){
    btnNavEl.classList.toggle('active');
    headerEl.classList.toggle('active');
    // mobNavBtn.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}



