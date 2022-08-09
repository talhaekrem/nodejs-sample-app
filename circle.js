export const circleArea = (radius) => {
  let area = (Math.PI * Math.pow(radius, 2)).toFixed(1);
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
};
export const circleCircumference = (radius) => {
  let circumference = (Math.PI * 2 * radius).toFixed(1);
  console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${circumference}`);
};
