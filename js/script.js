$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 10) {
          $(".greyn").css("background" , "gray");
        }
  
        else{
            $(".greyn").css("background" , "transparent");  	
        }
    })
  })