import rl from "./eemi-lib.js";

rl.question("Quel est votre nom ? ", function(name) {
    rl.question("Quel est votre âge ? ", function(age) {
        console.log(`Bonjour, ${name}. Vous avez ${age} ans.`);
        rl.close();
    });
});