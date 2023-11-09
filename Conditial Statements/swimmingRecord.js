/* Иван решава да подобри Световния рекорд по плуване на дълги разстояния. Функцията получава: 
рекордът в секунди, който Иван трябва да подобри, разстоянието в метри, което трябва да преплува и времето в секунди, за което плува разстояние от 1 м. 
Да се напише функция, която изчислява дали се е справил със задачата, като се има предвид, че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. 
Когато се изчислява колко пъти Иванчо ще се забави, в резултат на съпротивлението на водата, резултатът трябва да се закръгли надолу до най-близкото цяло число.
Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо Световния рекорд.
Вход: Функцията получава 3 аргумента:
1. Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
2. Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
3. Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
Изход: Отпечатването на конзолата зависи от резултата:
Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме: o " Yes, he succeeded! The new world record is {времето на Иван} seconds."
Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме: o "No, he failed! He was {недостигащите секунди} seconds slower."
Резултатът трябва да се форматира до втория знак след десетичната запетая. ex. (["10464", "1500", "20"])  No, he failed! He was 20786.00 seconds slower. */

function swimmingRecord(input) {
  let recordSeconds = Number(input[0]);
  let swimDistance = Number(input[1]);
  let ivanTime = Number(input[2]);
  let ivanSwimming = swimDistance * ivanTime;
  let delay = Math.trunc(swimDistance / 15);
  delay *= 12.5;
  let IvanFinalTime = (ivanSwimming + delay).toFixed(2);

  if (IvanFinalTime >= recordSeconds) {
    console.log(`No, he failed! He was ${Math.abs(IvanFinalTime - recordSeconds).toFixed(2)} seconds slower.`);
  } else {
    console.log(`Yes, he succeeded! The new world record is ${Math.abs(IvanFinalTime).toFixed(2)} seconds.`);
  }
}

swimmingRecord(["55555.67", "3017", "5.03"]);

// function shopping(input) {
//   let budget = Number(input[0]);
//   let videoCardQty = Number(input[1]);
//   let processorQty = Number(input[2]);
//   let ramQty = Number(input[3]);

//   let videoCardUnitPrice = 250;
//   let videoCardTotalAmount = videoCardUnitPrice * videoCardQty;
//   let processorPrice = 0.35 * videoCardTotalAmount;
//   let processorTotalAmount = processorQty * processorPrice;
//   let ramPrice = 0.1 * videoCardTotalAmount;
//   let ramTotalAmount = ramQty * ramPrice;

//   let total = ramTotalAmount + processorTotalAmount + videoCardTotalAmount;

//   if (videoCardTotalAmount > processorTotalAmount) {
//     total = total - total * 0.15;
//   }

//   if (budget >= total) {
//     console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
//   } else {
//     console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
//   }
// }
