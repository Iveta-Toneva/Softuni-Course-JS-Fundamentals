function cone(radius, height) {
  let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
  let slantHeight = Math.sqrt(radius * radius + height * height);
  let lateralSurface = Math.PI * radius * slantHeight;
  let baseSurface = Math.PI * Math.pow(radius, 2);
  let surfaceArea = lateralSurface + baseSurface;
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${surfaceArea.toFixed(4)}`);
}
cone(3, 5);
