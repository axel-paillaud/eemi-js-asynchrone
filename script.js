function fetchCountries(key) {
    fetch('./countries.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const filteredCountries = data.countries.filter(country =>
                country.name.toLowerCase().startsWith(key)
            );

            console.log('Pays correspondants :', filteredCountries);

            // Bonus : Affichage dynamique dans la page HTML
            displayResults(filteredCountries);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des pays :', error);
        });
}

function displayResults(countries) {
    const resultList = document.getElementById('results');
    resultList.innerHTML = ""; // Vide la liste avant de mettre à jour

    countries.forEach(country => {
        const li = document.createElement('li');
        li.textContent = country.name;
        resultList.appendChild(li);
    });
}

document.addEventListener('keydown', event => {
    if (event.key.length === 1) { // Filtrer uniquement les lettres
        console.log(`Touche appuyée : ${event.key}`);
        fetchCountries(event.key.toLowerCase());
    }
});

