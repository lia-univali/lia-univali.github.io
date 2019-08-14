$(document).ready(function () {
    var height = $(window).height()
    var nav = $('#nav').height()
    $(window).scroll(function(){
      $( ".nav-link" ).each(function( index ) {
        $(this).parent().removeClass('active')
        if ($(this.dataset.to).offset().top <= $(window).scrollTop() && $(window).scrollTop() < $(this.dataset.to).offset().top+$(window).height()) {
          $(this).parent().addClass('active')
        }
      });
    });
  })
  $('.goto').click(function () {
    var nav = $('.navbar').height()
    var height = ($(this.dataset.to).offset().top)-nav
    $('html, body').animate({scrollTop: height}, 'ease')    
  })