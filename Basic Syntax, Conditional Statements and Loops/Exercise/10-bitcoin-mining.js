function bitcoinMining(input) {
  let priceBitcoin = 11949.16;
  let priceGoldPerGram = 67.51;
  let commands = input.length - 1;
  let counterDays = 0;
  let index = 0;
  let collectedMoney = 0;
  let bitcoins = 0;
  let dayFirstBitcoin = 0;
  while (commands >= 0) {
    let grams = Number(input[index]);
    counterDays++;
    let collectedMoneyPerDay = grams * priceGoldPerGram;
    if (counterDays % 3 === 0) {
      collectedMoneyPerDay *= 0.7;
    }
    collectedMoney += collectedMoneyPerDay;
    while (collectedMoney >= priceBitcoin) {
      bitcoins++;
      if (bitcoins === 1) {
        dayFirstBitcoin = counterDays;
      }
      collectedMoney -= priceBitcoin;
    }
    index++;
    grams = Number(input[index]);
    commands--;
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (bitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
  }
  console.log(`Left money: ${collectedMoney.toFixed(2)} lv.`);
}
bitcoinMining(["3124.15"," 504.212","2511.124"])
    
