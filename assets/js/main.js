$(".testimonial-carousel").owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
})


var owl = $('.testimonial-carousel');
owl.owlCarousel();
$('.testimonial_next').click(function() {
    owl.trigger('next.owl.carousel', [300]);
})
$('.testimonial_prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})