function drawPyramid(n) {
    if (n <= 0 || isNaN(n)) {
        console.log("Veuillez entrer un nombre valide !");
        return;
    }

    for (let i = 1; i <= n; i++) {
        let line = "";
        // Loop  to add space
        for (let y = 0; y < n - i; y++) {
            line += " ";
        }
        // Loop to add blocks
        for (let y = 0; y < i; y++) {
            line += "#";
        }
        console.log(line);
    }
}

const height = 12;

drawPyramid(height);

