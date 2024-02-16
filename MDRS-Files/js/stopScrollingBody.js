function stopScrollingBody() {
    var checkbox = document.getElementById('menu-toggle');
    if (checkbox.checked) {        
        document.body.classList.add('lock-scroll'); // Dodaj klasy blokującej przewijanie
    }
     else {        
        document.body.classList.remove('lock-scroll'); // Usuń klasę blokującą przewijanie
    }

}