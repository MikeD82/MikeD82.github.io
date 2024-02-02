const accordions = document.querySelectorAll('.accordion');

// Add event listener to each accordion element
accordions.forEach((accordion) => {
    accordion.addEventListener('toggle', function () {
        let summaryText = this.querySelector('.accordionSummaryText');
        let summaryIcon = this.querySelector('.accordionSummaryIcon svg');
        let content = this.querySelector('.accordionContent');

        // Force reflow to ensure proper transition
        content.style.transition = 'none';
        content.offsetHeight; // Trigger reflow
        content.style.transition = '';

        // Check if the accordionContent is expanded or collapsed
        if (this.open) {
        // If expanded
        summaryText.style.fontWeight = '600';
        summaryIcon.style.transform = 'rotate(-180deg)';
        content.style.maxHeight = content.scrollHeight + 'px';

    } else {
        // If collapsed
        summaryText.style.fontWeight = '400';
        summaryIcon.style.transform = 'rotate(0deg)';
        content.style.maxHeight = '0';

         this.classList.remove('expanded');

        }
    });
});


