const ru = document.querySelector('#ru');
const uz = document.querySelector('#uz');
const lang = document.querySelector('#lang');
const loader = document.querySelector('.loader');
const load = document.querySelector('.load')


ru.addEventListener('click', ()=>{
    lang.innerHTML = 'RU';
});
uz.addEventListener('click', ()=>{
    lang.innerHTML = 'UZ';
});
// setTimeout(function(){ 
//     $('.loader').hide();
//     $('.all').fadeIn(2000);   
// }, 3000);

// partner
// $(document).ready(function(){
//     $('.customer-logos').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1000,
//       arrows: false,
//       dots: false,
//       pauseOnHover: false,
//       responsive: [{
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 4
//         }
//       }, {
//         breakpoint: 520,
//         settings: {
//           slidesToShow: 3
//         }
//       }]
//     });
//   });
$('.hamburger').click(function() {
    $('.all').hide(1000);
    $('.responsive').fadeIn(3000);
});
$('.hamburger-close').click(function(){
    $('.responsive').hide(1000);
    $('.all').fadeIn(3000);
});