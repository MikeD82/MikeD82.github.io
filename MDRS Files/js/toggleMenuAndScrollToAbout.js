function toggleMenuAndScrollToAbout() {
    var checkbox = document.getElementById('menu-toggle');
    if (checkbox.checked) {
        checkbox.checked = false; // Zamknij menu
        document.body.classList.remove('lock-scroll'); // Usuń klasy blokującej przewijanie
    } else {
        checkbox.checked = true; // Otwórz menu
        document.body.classList.add('lock-scroll'); // Dodaj klasę blokującą przewijanie
    }
    
    // Sprawdź szerokość ekranu
    if (window.innerWidth < 576) {
    
        if (window.location.href =='index.html')
        {
          // Przewiń do sekcji "#About" tylko na ekranach o szerokości mniejszej niż 576 pikseli
           var aboutSection = document.getElementById('About');
           aboutSection.scrollIntoView({ behavior: 'smooth' });
           checkbox.checked = false;    
           document.getElementById("navbar").style.top = "-60px";
        
        } 
        else
        {
       // Define the URL of the page you want to navigate to
          var targetPageUrl = 'index.html';
       // Define the section identifier you want to navigate to
          var sectionId = 'About';
        // Combine the URL with the section identifier as a hash
        var targetUrlWithHash = targetPageUrl + '#' + sectionId;

          // Navigate to the target URL
             window.location.href = targetUrlWithHash;
             //checkbox.checked = false;    
             //document.getElementById("navbar").style.top = "-60px";

        }
    }  
}

