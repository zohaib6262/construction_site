(function ($) {

    "use strict";

    $(document).ready(function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();

        // dropdown menu

        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });

        //Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });

        }

      // Service Slider
       if ($('.service-wrap').length) {
           $('.service-wrap').slick({
               infinite: true,
               autoplay: false,
               arrows: true,
               prevArrow: '<button class="service-prev"><i class="fas fa-arrow-left"></i></button>',
               nextArrow: '<button class="service-next"><i class="fas fa-arrow-right"></i></button>',
               pauseOnHover: false,
               autoplaySpeed: 2000,
               slidesToShow: 3,
               slidesToScroll: 1,
               responsive: [
                   {
                       breakpoint: 1200,
                       settings: {
                           slidesToShow: 3
                       }
                   },
                   {
                       breakpoint: 992,
                       settings: {
                           slidesToShow: 2
                       }
                   },
                   {
                       breakpoint: 768,
                       settings: {
                           slidesToShow: 1
                       }
                   }
               ]
           });
       }

      // Testimonial Slider
       if ($('.testimonial-wrap').length) {
           $('.testimonial-wrap').slick({
               infinite: true,
               autoplay: false,
               arrows: true,
               prevArrow: '<button class="testimonial-prev"><i class="fas fa-arrow-left"></i></button>',
               nextArrow: '<button class="testimonial-next"><i class="fas fa-arrow-right"></i></button>',
               pauseOnHover: false,
               autoplaySpeed: 2000,
               slidesToShow: 1,
               slidesToScroll: 1,
               fade: true,
           });
       }

      // About Image Slider
       if ($('.about-img-slider').length) {
           $('.about-img-slider').slick({
               infinite: true,
               autoplay: true,
               dots: true,
               arrows: false,
               pauseOnHover: false,
               autoplaySpeed: 2000,
               slidesToShow: 3,
               slidesToScroll: 1,
               responsive: [
                   {
                       breakpoint: 768,
                       settings: {
                           slidesToShow: 2
                       }
                   }
               ]
           });
       }

       // Project Gallery List Slider
       if ($('.project-tabs').length) {
           $('.project-tabs').slick({
               infinite: false,
               autoplay: false,
               arrows: false,
               dots: true,
               pauseOnHover: false,
               autoplaySpeed: 2000,
               slidesToShow: 4,
               slidesToScroll: 1,
               responsive: [
                   {
                       breakpoint: 992,
                       settings: {
                           slidesToShow: 3,
                           slidesToScroll: 2
                       }
                   }
               ]
           });
       }

        // Partner Slider
       if ($('.partner-wrap').length) {
           $('.partner-wrap').slick({
               infinite: true,
               autoplay: true,
               arrows: false,
               pauseOnHover: false,
               autoplaySpeed: 5000,
               slidesToShow: 5,
               slidesToScroll: 1,
               responsive: [
                   {
                       breakpoint: 1200,
                       settings: {
                           slidesToShow: 4
                       }
                   },
                   {
                       breakpoint: 992,
                       settings: {
                           slidesToShow: 3
                       }
                   },
                   {
                       breakpoint: 768,
                       settings: {
                           slidesToShow: 2
                       }
                   },
                   {
                       breakpoint: 400,
                       settings: {
                           slidesToShow: 1
                       }
                   }
               ]
           });
       }
        
       /* Vission Mission Tabs */
        if($('.project-tabs .slick-track li').length){
          $('.project-tabs .slick-track li').click(function(){
            var tab_id = $(this).attr('data-tab');
            $('.project-tabs li').removeClass('active');
            $('.project-tab-content').removeClass('active');
            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
          })
        };

        // Scroll to a Specific Div
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 2000);

            });
        }
      
        // Video Magnific Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }

        // Scroll Top
        $(".scroll").on("click", function (e) {
            var hash = this.hash;
            var position = $(hash).offset().top;
            $("html").animate({ scrollTop: position }, 2000);
        });
        

        // Footer Map
        if ($("#map").length) {
            var map = L.map("map", { center: [51.507351, -0.127758], zoom: 10, zoomControl: false, scrollWheelZoom: true });
            L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {}).addTo(map);
        }

        // Accordion - Add Class In Card For Changing Background
        $(".card-header button").on("click", function () {
            $('.card').removeClass('card-bgc');
            $(this).parent().parent().addClass('card-bgc');
        });
        
        
        // jQuery Nice Select
        $('select').niceSelect();
        

    });

    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

      $(window).on('resize', function () {
          var mobileWidth = 992;
          var navcollapse = $('.navigation li.dropdown');
          navcollapse.children('ul').hide();
          navcollapse.children('.megamenu').hide();

      });

    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

      $(window).on('scroll', function () {

          // Header Style and Scroll to Top
          function headerStyle() {
              if ($('.main-header').length) {
                  var windowpos = $(window).scrollTop();
                  var siteHeader = $('.main-header');
                  var scrollLink = $('.scroll-top');
                  if (windowpos >= 100) {
                      siteHeader.addClass('fixed-header');
                      scrollLink.fadeIn(300);
                  } else {
                      siteHeader.removeClass('fixed-header');
                      scrollLink.fadeOut(300);
                  }
              }
          }

          headerStyle();

      });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

      $(window).on('load', function () {

          //Hide Loading Box (Preloader)
          function handlePreloader() {
              if ($('.preloader').length) {
                  $('.preloader').delay(200).fadeOut(500);
              }
          }
          handlePreloader();
          
      });


})(window.jQuery);
