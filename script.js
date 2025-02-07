function fetchData(key) {
    fetch('./data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const filteredResults = data.students.filter(person => 
                person.first_name.toLowerCase().startsWith(key) || 
                person.last_name.toLowerCase().startsWith(key)
            );
            console.log('Résultats filtrés :', filteredResults);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
}

document.addEventListener('keydown', event => {
    console.log(`Touche appuyée : ${event.key}`);
    fetchData(event.key);
});

