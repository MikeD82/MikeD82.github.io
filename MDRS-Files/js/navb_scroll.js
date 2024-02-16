var prevScrollpos = window.scrollY;
var ticking = false;

window.onscroll = function () {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            var currentScrollPos = window.scrollY;
            var menuCheckbox = document.getElementById('menu-toggle');
            
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.top = "0";
                } else {
                    document.getElementById("navbar").style.top = "-60px";
                }            
            prevScrollpos = currentScrollPos;
            ticking = false;
        });

        ticking = true;
    }
};

