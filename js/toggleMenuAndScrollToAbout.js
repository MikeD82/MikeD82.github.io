function toggleMenuAndScrollToAbout() {
    var checkbox = document.getElementById('menu-toggle');
    if (checkbox.checked) {
        checkbox.checked = false; // Zamknij menu
        document.body.classList.remove('lock-scroll'); // Usuń klasy blokującej przewijanie
    } else {
        checkbox.checked = true; // Otwórz menu
        document.body.classList.add('lock-scroll'); // Dodaj klasę blokującą przewijanie
    }
    // Przewiń do sekcji "#About"
    var aboutSection = document.getElementById('About');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    checkbox.checked = false;    
    document.getElementById("navbar").style.top = "-60px";
}