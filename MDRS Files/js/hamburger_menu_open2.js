
// Pobieramy elementy, które będą nam potrzebne
const checkbox = document.querySelector(' .hamburger-checkbox');
const body = document.querySelector('body');

// Nasłuchujemy kliknięcie na hamburger
checkbox.addEventListener('change', function () {
    // Dodajemy / usuwamy klasę 'menu-open' do body w zależności od stanu hamburgera

    if (checkbox.checked) {
        // Checkbox jest zaznaczony (checked)
        alert('Checkbox został klikniety');
        body.style.overflow = 'hidden';
        
    } else {
        // Checkbox nie jest zaznaczony (unchecked)
        
        body.style.overflow = 'auto';
    
});