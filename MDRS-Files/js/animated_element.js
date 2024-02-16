window.addEventListener("scroll", function () {
    var animatedElements = document.querySelectorAll(".animated-element");

    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var elementPosition = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
            element.classList.add("animated");
        }
    }
});