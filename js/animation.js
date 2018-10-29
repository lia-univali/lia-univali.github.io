$(function () {
    animacao = true;
    var $svg = $('svg').drawsvg({
        duration: 500,
        stagger: 100
    });
    $svg.drawsvg('animate');
});
