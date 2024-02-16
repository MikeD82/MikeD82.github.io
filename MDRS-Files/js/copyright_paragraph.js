var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        
        var paragraphText = "&copy; " + currentYear + " MDRS. All rights reserved.";
        document.getElementById("copyrightParagraph").innerHTML = paragraphText; 