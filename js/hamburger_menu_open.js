
// Pobieramy elementy, które będą nam potrzebne
const hamburger = document.querySelector('.hamburger-lines');
const body = document.querySelector('body');

// Nasłuchujemy kliknięcie na hamburger
hamburger.addEventListener('click', function () {
    // Dodajemy / usuwamy klasę 'menu-open' do body w zależności od stanu hamburgera
    body.classList.toggle('menu-open');
    
    // Jeżeli klasa 'menu-open' jest obecna w body, to blokujemy przewijanie
    if (body.classList.contains('menu-open')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});