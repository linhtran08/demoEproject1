$(document).ready(function (){
    $('#myCarousel').carousel({
        interval : 4000
    });
    if($(window).width()<768){
        $('#row-new-arrival').slideDown(1000);
        $('#category-tittle').slideDown(1000);
        $('.content').slideDown('slow');
    }
    $(window).scroll(function (){
        if($(this).scrollTop()>300){
            $('#carousel-tittle').slideDown('slow');
            $('#myCarousel').fadeIn('slow');
        }
        if($(this).scrollTop()>750){
            $('#row-new-arrival').show();
        }
        if($(this).scrollTop()>800){
            $('#category-tittle').show();
        }
        if($(this).scrollTop()>900){
            $('.content').slideDown('slow');
        }
    });
});