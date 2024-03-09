function bestCrystalProcess(array) {
  let needThickness = array[0];
  let index = 1;
  let currentThickness = array[index];

  while (index < array.length) {
    console.log(`Processing chunk ${currentThickness} microns`);
    let cutCounter = 0;
    let isCut = false;
    let isLaped = false;
    let lapCounter = 0;
    let isGrinded = false;
    let grindCounter = 0;
    let isEtched = false;
    let etchedCounter = 0;
    while (currentThickness >= needThickness) {
      if (currentThickness / 4 >= needThickness) {
        while (currentThickness / 4 >= needThickness) {
          isCut = true;
          currentThickness /= 4;
          cutCounter++;
        }
      }
      if (isCut) {
        console.log(`Cut x${cutCounter}`);
        console.log(`Transporting and washing`);
        currentThickness = Math.floor(currentThickness);
      }
      if (currentThickness * 0.8 >= needThickness) {
        while (currentThickness * 0.8 >= needThickness) {
          isLaped = true;
          currentThickness *= 0.8;
          lapCounter++;
        }
      }
      if (isLaped) {
        console.log(`Lap x${lapCounter}`);
        console.log(`Transporting and washing`);
        currentThickness = Math.floor(currentThickness);
      }

      if (currentThickness - 20 >= needThickness) {
        while (currentThickness - 20 >= needThickness) {
          isGrinded = true;
          currentThickness -= 20;
          grindCounter++;
        }
      }
      if (isGrinded) {
        console.log(`Grind x${grindCounter}`);
        console.log(`Transporting and washing`);
        currentThickness = Math.floor(currentThickness);
      }

      if (currentThickness - 2 >= needThickness) {
        while (currentThickness - 2 >= needThickness - 1) {
          isEtched = true;
          currentThickness -= 2;
          etchedCounter++;
        }
      }
      if (isEtched) {
        console.log(`Etch x${etchedCounter}`);
        console.log(`Transporting and washing`);
        currentThickness = Math.floor(currentThickness);
      }
      if (currentThickness === needThickness) {
        break;
      }
    }

    if (currentThickness + 1 === needThickness) {
      console.log(`X-ray x1`);
      currentThickness++;
    }
    console.log(`Finished crystal ${currentThickness} microns`);
    index++;
    currentThickness = array[index];
  }
}
bestCrystalProcess([1000, 4000, 8100]);
