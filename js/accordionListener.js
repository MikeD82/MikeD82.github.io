document.addEventListener("DOMContentLoaded", function() {
    var accordions = document.querySelectorAll('.accordion');

    accordions.forEach(function(accordion) {
        accordion.addEventListener('click', function() {
            if (accordion.classList.contains('active')) {
                // Jeśli akordeon jest aktywny, usuń klasę 'active'
                accordion.classList.remove('active');
            } else {
                // W przeciwnym razie, usuń klasę 'active' ze wszystkich aktywnych akordeonów
                accordions.forEach(function(acc) {
                    acc.classList.remove('active');
                });
                // Dodaj klasę 'active' do aktualnie klikniętego akordeonu
                accordion.classList.add('active');
            }
        });
    });
});
