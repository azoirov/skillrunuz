$('.hamburger').click(function() {
    $('.body').hide(1000);
    $('.responsive').fadeIn(3000);
});
$('.hamburger-close').click(function(){
    $('.responsive').hide(1000);
    $('.body').fadeIn(3000);
});

// if ($('.searchFilterInput').length > 1) {
//     $('.search-filter').css('display', 'none');
// }

// .css('border', '1px solid rgb(27, 245, 143)');