/* Template Name: AdventureGene 
   Description: This is a - Travel Adventure & Tours HTML5 Template;
   Version: 1.0 
   Authot: 
   Website:
    ersion: 1.0  
	NOTE:  This is js file contents all jQuery plugins.
*/
/*================================================
[  Table of contents  ]
================================================*/


(function ($) {
 "use strict";
    jQuery(document).ready(function($){


      // === 1. Hero Slider ===
    if ($('#welcome-slide').length) {
      $('#welcome-slide').owlCarousel({
        autoplay:false,
        items:1,
        loop:true,
        mouseDrag:false,
        lazyLoad:true,
        autoplayHoverPause: false,
        smartSpeed: 2000,
        margin:0,
        nav:false,
        navText:['<i class="fal fa-arrow-left"></i>','<i class="fal fa-arrow-right"></i>'],
        dots:false,
        singleItem: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
      }) 
    }

	/* ==== 02. jQuery MeanMenu Active ==== */
	if ($('.gene-nav').length) {
		jQuery('.gene-nav').meanmenu();	
	}
    /* ==== 03. CounterUp Active ==== */
      if ($('.counter').length) {
        $('.counter').counterUp({
          delay: 10,
          time: 2000
        });
      }


      if ($('.partner-wrap').length) {
        $('.partner-wrap').owlCarousel({
            autoplay:5000,
            loop:true,
            autoplayHoverPause: false,
            smartSpeed: 500,
            nav:false,
            navText:['<i class="fal fa-arrow-left"></i>','<i class="fal fa-arrow-right"></i>'],
            dots:false,
            items:6,
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:3,
                },
                768:{
                    items:3,
                },
                991:{
                    items:4,
                },
                1200:{
                    items:6,
                }
            }
        }) 
      }
      // Similar Tips
      if ($('.adv-similar-detail-wrap').length) {
        $('.adv-similar-detail-wrap').owlCarousel({
            autoplay:5000,
            loop:true,
            autoplayHoverPause: false,
            smartSpeed: 500,
            nav:false,
            navText:['<i class="fal fa-arrow-left"></i>','<i class="fal fa-arrow-right"></i>'],
            dots:false,
            items:6,
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                768:{
                    items:2,
                },
                991:{
                    items:3,
                },
                1200:{
                    items:3,
                }
            }
        }) 
      }
      /* ==== 08. Cart Plus Minus ==== */
        var CartPlusMinus = $('.cart-plus-minus');
        CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
        CartPlusMinus.append('<div class="inc qtybutton">+</div>');
        $(".qtybutton").on("click", function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });

        /* ==== 06. Range Slider ==== */
         if($('.slider-product-sorting').length){
             $( function() {
                 $( ".slider-product-sorting" ).slider({
                 range: true,
                 min: 0,
                 max: 1000,
                 values: [ 200, 600 ],
                 slide: function( event, ui ) {
                 $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                 }
                 });
                 $( "#amount" ).val( "$" + $( ".slider-product-sorting" ).slider( "values", 0 ) +
                 " - $" + $( ".slider-product-sorting" ).slider( "values", 1 ) );
             } );
         }
        // ========== isotope

         $('.isotope_wrap').imagesLoaded(function() {
            var $grid = $('.isotope_wrap').isotope({
                itemSelector: '.isotope_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.isotope_item',
                }
            });
        });

		/* ==== 05. ScrollUp ==== */
		$.scrollUp({
			scrollText: '<i class="fal fa-arrow-alt-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		}); 
	
    });

    var current_page_URL = location.href;
       $( ".gene-nav ul li a" ).each(function() {
           if ($(this).attr("href") !== "#") {
            var target_URL = $(this).prop("href");
            if (target_URL == current_page_URL) {
              $('.gene-nav a').parents('li, ul').removeClass('active');
              $(this).parent('li').addClass('active');
               return false;
            }
           }
       });

// ==== 11. Sticky Header ====
    $(function() {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 200;
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();
            if (yOffset >= triggerPoint) {
            	header.removeClass("animated cssanimation");
                header.addClass("navbar-fixed-top sticky  cssanimation animated fadeInTop");
            } else {
                header.removeClass("navbar-fixed-top sticky cssanimation  animated fadeInTop");
                header.addClass("animated cssanimation");
            }

        });
    });


	/* ==== 21. Preloader ==== */
	$(window).on('load',function(){
		jQuery(".preloader-wrap").fadeOut(500);
	});

	
})(jQuery); 


