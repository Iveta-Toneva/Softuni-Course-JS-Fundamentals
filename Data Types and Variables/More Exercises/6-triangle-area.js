function triangleArea(sideA, sideB, sideC) {
  let semiPerimeter = (sideA + sideB + sideC) / 2;

  let area = Math.sqrt(semiPerimeter *(semiPerimeter - sideA) *(semiPerimeter - sideB) *(semiPerimeter -sideC));
  ;
  console.log(area);
}
triangleArea(4,13,15);
