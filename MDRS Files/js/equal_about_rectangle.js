function setEqualHeight() {
    var maxheight = 0;

    $(".about-rectangle").each(function () {
        if ($(this).height() > maxheight) {
            maxheight = $(this).height();
        }
    });

    $(".about-rectangle").height(maxheight);
}

$(document).ready(function () {
    // Wywołanie funkcji przy załadowaniu strony
    setEqualHeight();
});

$(window).resize(function () {
    // Wywołanie funkcji po zmianie rozmiaru okna
    setEqualHeight();
});