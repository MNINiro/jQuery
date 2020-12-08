$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 15, // to create gap in between two testimonial items.
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }

        }

    });
});