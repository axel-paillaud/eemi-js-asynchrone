// 🎮 Initialisation du Canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 🏀 Définition de la balle
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    dx: 2, // Vitesse en X
    dy: 2  // Vitesse en Y
};

// 🎬 Fonction qui met à jour la position de la balle
function update() {
    // Effacer l'ancien affichage
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 🎨 Dessiner la balle
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    // ➡️ Déplacer la balle
    ball.x += ball.dx;
    ball.y += ball.dy;

    // 🔄 Gestion des rebonds (mécanisme asynchrone)
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx *= -1; // Inverser la direction horizontale
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1; // Inverser la direction verticale
    }

    // ⏳ Appel récursif pour la prochaine image
    requestAnimationFrame(update);
}

// 🚀 Démarrer l'animation
update();

