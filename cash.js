function main() {

  let change;
  do {
    change = parseFloat(prompt("Change owed: "));
  } while (isNaN(change) || change < 0);

  let cents = Math.round(change * 100);

  let coins = 0;

  while (cents >= 25) {
    cents -= 25;
    coins++;
  }

  while (cents >= 10) {
    cents -= 10;
    coins++;
  }

  while (cents >= 5) {
    cents -= 5;
    coins++;
  }

  while (cents >= 1) {
    cents -= 1;
    coins++;
  }

  alert(`Nombre de pièces utilisées : ${coins}`);
}

main();
