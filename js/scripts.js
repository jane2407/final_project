$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 1000,
    loop:true,
    margin:50,
    responsive: {
        0: {
            items: 1
        },

        1200: {
            items: 3
        }
    }
});