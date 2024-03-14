$(function(){ 
   
    var indiceatu = 0;
    var indicemax = $('.slider img').length;
    initslider();
    clickslider();

    function initslider(){
        for(var i = 0 ; i < indicemax ; i++){
           
            if(i == 0){
                $('.bullet-nav').append('<span style="background:#069;"></span>')
            }else{
                $('.bullet-nav').append('<span></span>')
            }
        }
        $('.slider img').eq(0).fadeIn();
        
    }

    function clickslider(){
        $('.bullet-nav span').click(function(){
            $('.slider img').eq(indiceatu).stop().fadeOut(1000);
            indiceatu = $(this).index();
            $('.slider img').eq(indiceatu).stop().fadeIn(1000);
            $('.bullet-nav span').css('background' , '#ccc')
            $(this).css('background', "#069")
        })
    }

 })