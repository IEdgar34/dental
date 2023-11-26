$(document).ready(function(){
    $('.reviews__slide').slick({
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
    });


    function valideForms(form){
        $(form).validate({
            rules: {
              name: "required",
              phone: "required",
              
            },
            messages: {
              name: "пожалуйста введите ваше имя ",
              phone: "введите ваш номер телефона",
              
            }
        });
    };

    valideForms('#consultation form')



    $("#phone").mask("+7(999) 999-99-99");



    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $('form').trigger('reset');

           
            
        });
       return false;
   });


   new WOW().init();
    

  
   $('.pupop__open').on('click',function(){
        
        $(this).toggleClass('pupop__open_active')
        .parents('.pupop').toggleClass('pupop_active')
    });
   
   

});