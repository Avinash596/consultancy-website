$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
       items: 1,
       loop: true,
       autoplay: true,
       autoplayTimeout: 5000,
       nav: true,
       dots: true
    });
 });
 const slider = document.querySelector('.slider');
let counter = 0;

$(document).ready(function(){
    $('.slider').slick({
       autoplay: true,
       autoplaySpeed: 3000,
       dots: true,
       prevArrow: '<button type="button" class="slick-prev">Previous</button>',
       nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
 });
 