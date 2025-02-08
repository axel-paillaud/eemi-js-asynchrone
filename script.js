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

            updateList(filteredResults);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
}


function updateList(students) {
    const resultList = document.getElementById('result-list');
    resultList.innerHTML = ''; // Vider la liste avant de la mettre à jour
    
    if (students.length === 0) {
        resultList.innerHTML = '<li>Aucun résultat trouvé</li>';
        return;
    }
    
    students.forEach(student => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${student.image}" alt="${student.first_name} ${student.last_name}" width="30"> <strong>${student.first_name} ${student.last_name}</strong> - ${student.specialty}`;
        resultList.appendChild(li);
    });
}

document.addEventListener('keydown', event => {
    console.log(`Touche appuyée : ${event.key}`);
    fetchData(event.key);
});

