function revealText(text, speed) {
    let index = 0;
    let displayedText = "";

    let intervalId = setInterval(() => {
        displayedText += text[index]; // Ajoute la lettre actuelle
        console.clear();
        console.log(displayedText); // Affiche le texte progressivement
        index++;

        if (index === text.length) {
            clearInterval(intervalId); // Stoppe l'affichage une fois terminé
        }
    }, speed);
}

// Lancer l'animation
revealText("Bienvenue dans le module JavaScript Asynchrone avec EEMI !", 100);
