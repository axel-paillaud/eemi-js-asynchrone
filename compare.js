import rl from "./eemi-lib.js";

rl.question("Quel est votre nom ? ", (userName) => {
    console.log(`Bonjour, ${userName} !`);
    rl.close();
});

