const readline = require('readline');

// Créer une interface pour lire les entrées/sorties
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Afficher un prompt et récupérer la réponse
rl.question("Quel est votre nom ? ", (name) => {
    console.log(`Bonjour, ${name} !`);
    rl.close();
});
