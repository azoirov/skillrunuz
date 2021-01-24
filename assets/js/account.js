$('.hamburger').click(function() {
    $('.body').hide(1000);
    $('.responsive').fadeIn(3000);
});
$('.hamburger-close').click(function(){
    $('.responsive').hide(1000);
    $('.body').fadeIn(3000);
});