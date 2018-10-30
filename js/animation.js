$(function () {
    animacao = true;
    var $svg = $('svg').drawsvg({
        duration: 500,
        stagger: 500
    });
    $svg.drawsvg('animate');
});
