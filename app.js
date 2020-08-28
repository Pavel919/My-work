$(document).ready(function(){
    $('.islider').slick({
        prevArrow: '.arrow-l',
        nextArrow: '.arrow-r',
        autoPlay: true,
        dots: true
    });


    $('.object-slider').slick({
        prevArrow: '.btn-p',
        nextArrow: '.btn-n',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true, /*задает свою ширину слик слайдера*/
    })


    $(document).ready(function(){
        var show = true;
        var countbox = ".resultat";

    $('.numnum').spincrement({
        duration: 2500
        });
    });


    $(window).scroll(function(){
        if ($(this).scrollTop() > $('#headerC').innerHeight()){
            $('.navbar').addClass('fixed');
            $('#headerC').addClass('none');
            }
            else{
            $('.navbar').removeClass('fixed');
            $('#headerC').removeClass('none');
            }
    });

    $(document).ready(function(){
        $('#calcItem1, #calcItem2, #calcItem3, #calcItem4, #calcItem5, #calcItem6').click(function(){
            if ($('.cif2').is(':visible')) {
                $('.cif2').hide('slow(3500)');
               }
               else {
              $('.cif2').show('slow(3500)');
               }
        });
        $('#dloadBtn').click(function(){
            if($('.cif4').is(':visible')) {
                $('.cif4').hide('slow(3500)');
               }
               else {
              $('.cif4').show('slow(3500)');
               }
        });
        $('#pro, #max, #lux').click(function(){
            if($('.cif5').is(':visible')) {
                $('.cif5').hide('slow(3500)');
               }
               else {
              $('.cif5').show('slow(3500)');
               }
        });
    });
})
