/* Снимките за дългоочаквания филм "Годзила срещу Конг" започват. Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли, 
дали предвидените средства са достатъчни за снимането на филма. За снимките ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор. Известно е, че:
· Декорът за филма е на стойност 10% от бюджета.
· При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.
Вход: Функцията получава 3 аргумента:
1. Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
2. Брой на статистите – цяло число в интервала [1 … 500]
3. Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
Изход: На конзолата трябва да се отпечатат два реда:
· Ако парите за декора и дрехите са повече от бюджета:
"Not enough money!"
"Wingard needs {парите недостигащи за филма} leva more."
· Ако парите за декора и дрехите са по малко или равни на бюджета:
"Action!"
"Wingard starts filming with {останалите пари} leva left."
Резултатът трябва да е форматиран до втория знак след десетичната запетая. */

function actionMovie(input) {
  let movieBudget = Number(input[0]);
  let statistsCount = Number(input[1]);
  let costumePricePerOne = Number(input[2]);
  let moviedecor = movieBudget * 0.1;
  let costumePrice = statistsCount * costumePricePerOne;

  if (statistsCount > 150) {
    costumePrice -= costumePrice * 0.1;
  }

  let allExpences = costumePrice + moviedecor;

  if (movieBudget >= allExpences) {
    // !! ofter mistake !!
    console.log(
      `Action! \nWingard starts filming with ${Math.abs(
        movieBudget - allExpences
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money! \nWingard needs ${Math.abs(
        movieBudget - allExpences
      ).toFixed(2)} leva more.`
    );
  }
}
actionMovie(["9587.88", "222", "55.68"]);
