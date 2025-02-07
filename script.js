fetch('./data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Données récupérées :', data);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });
