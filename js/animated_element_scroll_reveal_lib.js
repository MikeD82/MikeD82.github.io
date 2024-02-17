window.addEventListener("load", function () {
    ScrollReveal().reveal('.animated-element_SR', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        opacity: 0,
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
});