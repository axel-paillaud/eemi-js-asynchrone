function getValidChange() {
  let change;
  do {
    change = parseFloat(prompt("Monnaie due : "));
  } while (isNaN(change) || change <= 0);
  return Math.round(change * 100);
}

function calculateCoins(cents) {
  const coinValues = [25, 10, 5, 1];
  let coins = 0;

  for (const value of coinValues) {
    coins += Math.floor(cents / value);
    cents %= value;
  }

  return coins;
}

const cents = getValidChange();
const coins = calculateCoins(cents);
alert(`Nombre de pièces utilisées : ${coins}`);
