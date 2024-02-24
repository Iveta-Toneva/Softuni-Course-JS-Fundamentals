function calculateExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let helmetCount = 0;
  let swordCount = 0;
  let shieldCount = 0;
  let armorCount = 0;

  for (let index = 1; index <= lostFights; index++) {
    let isHelmetBroken = false;
    let isSwordBroken = false;

    if (index % 2 === 0) {
      helmetCount++;
      expenses += helmetPrice;
      isHelmetBroken = true;
    }
    if (index % 3 === 0) {
      swordCount++;
      expenses += swordPrice;
      isSwordBroken = true;
    }
    if (isHelmetBroken && isSwordBroken) {
      shieldCount++;
      expenses += shieldPrice;
      if (shieldCount !== 0 && shieldCount % 2 === 0) {
        armorCount++;
        expenses += armorPrice;
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
calculateExpenses(23, 12.5, 21.5, 40, 200);
