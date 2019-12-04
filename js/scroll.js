var navOffsetTop
$(document).ready(function() {
    navOffsetTop = $('nav').offset().top
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    $(window).on('scroll', onScroll)
})
function onScroll() {
    if($(window).scrollTop() > 100 && !$('nav').hasClass('bg-dark')){
        $('nav').addClass('bg-dark')
        $('nav').removeClass('bg-transparent')
    }
    if($(window).scrollTop() <= 100 && $('nav').hasClass('bg-dark')){
        $('nav').addClass('bg-transparent')
        $('nav').removeClass('bg-dark')
    }
    // if (navOffsetTop < $(window).scrollTop() && !$('nav').hasClass('is-fixed-top')) {
    //     $('nav').addClass('is-fixed-top')
    //     $('body').css("padding-top", $('nav').height())
    // }
    // if (navOffsetTop > $(window).scrollTop() && $('nav').hasClass('is-fixed-top')) {
    //     $('nav').removeClass('is-fixed-top')
    //     $('body').css("padding-top", 0)
    // }
}