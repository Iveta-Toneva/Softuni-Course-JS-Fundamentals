function condenseArray(array) {
  while (array.length !== 1) {
    for (let index = 0; index < array.length-1; index++) {
      array[index] = array[index] + array[index + 1];
    }
    array = array.slice(0, -1);
  }
  console.log(array[0]);
}
condenseArray([5,0,4,1,2]);
