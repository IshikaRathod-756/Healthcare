$(document).ready(function(){
    $('.fa-bars').click(function(){
 $(this).toggleClass('fa-time');
 $('.nav').toggleClass('nav-toggle')
    });
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-time');
        $('.nav').removeClass('nav-toggle')

        if($(window).scrollTop() >10){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
 });


 $('.facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
        enabled:true
    }
 });


});