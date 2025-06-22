$(document).ready(function () {
    function revealOnScroll() {
        $('.reveal-on-scroll').each(function () {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            // Trigger 50px before the element enters the viewport
            if (elementTop < windowBottom - 50) {
                $(this).addClass('visible');
            }
        });
    }

    // Run on page load
    revealOnScroll();

    // Run on scroll
    $(window).on('scroll', revealOnScroll);
});
