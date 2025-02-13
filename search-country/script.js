function fetchCountries() {
    fetch('./countries.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            //TODO Filtrer les pays en fonction de la touche appuyée,
            // et les afficher dans la console.
            //
            console.log("Hello, world!");

            // Bonus : Affichage dynamique dans la page HTML
            displayResults();
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des pays :', error);
        });
}

function displayResults() {
    // TODO Bonus : Afficher les pays dans la page HTML
}

document.addEventListener('keydown', event => {
    console.log(`Touche appuyée : ${event.key}`);
    // TODO Déclencher la fonction fetchCountries() à l'appuie d'une touche
});
