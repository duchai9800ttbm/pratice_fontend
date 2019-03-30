$(document).ready(function(){
    $('.owl-product1').owlCarousel({
        rtl:false,
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('.owl-product2').owlCarousel({
        rtl:false,
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('.owl-next-banner').click(function() {
        $('.owl-banner').trigger('next.owl.carousel');
    })

    $('.owl-prev-banner').click(function() {
        $('.owl-banner').trigger('prev.owl.carousel', [300]);
    })

    $('.owl-next-product1').click(function() {
        $('.owl-product1').trigger('next.owl.carousel');
    })

    $('.owl-prev-product1').click(function() {
        $('.owl-product1').trigger('prev.owl.carousel', [300]);
    })

    $('.owl-next-product2').click(function() {
        $('.owl-product2').trigger('next.owl.carousel');
    })

    $('.owl-prev-product2').click(function() {
        $('.owl-product2').trigger('prev.owl.carousel', [300]);
    })

    $('.owl-banner').owlCarousel({
        items:1,
        loop: false,
        center:true,
        dots: false,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });

    var btn = $("#back-to-top");

    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});