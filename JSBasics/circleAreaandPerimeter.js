/* Напишете програма, която чете от конзолата число r и пресмята и отпечатва лицето и периметъра на кръг / окръжност с радиус r,
 като форматирате изхода в следния вид: "<calculated area>" "<calculated parameter>". 
 Форматирайте изходните данни до втория знак след десетичната запетая.
*/

function perimeter(input) {
  let r = Number(input[0]);

  let circleArea = Math.PI * r * r;
  let circlePerimeter = 2 * Math.PI * r;

  console.log(`${circleArea.toFixed(2)}\n ${circlePerimeter.toFixed(2)}`);
}

perimeter(["3"]);
perimeter(["4.5"]);
