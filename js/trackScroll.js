function trackScroll() {
    var scrollPos = window.scrollY;
    var aboutSection = document.getElementById('About');
    var aboutLink = document.querySelector('a[href="#About"]');

    if (scrollPos >= aboutSection.offsetTop) {
        // Strona ustawiła się na pozycji "#About", więc ustaw top navbara na -60px
        document.getElementById("navbar").style.top = "-60px";
    } 
}

aboutLink.addEventListener('click', function() {
    // Wywołaj funkcję trackScroll()
    trackScroll();


});