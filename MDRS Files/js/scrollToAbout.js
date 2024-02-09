function scrollToAbout() {
    
    // Przewiń do sekcji "#About"    
    var aboutSection = document.getElementById('About');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("navbar").style.top = "-60px";
    
}