/*Ресторант отваря врати и предлага няколко менюта на преференциални цени:
• Пилешко меню – 10.35 лв.
• Меню с риба – 12.40 лв.
• Вегетарианско меню – 8.15 лв.
Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката).
Цената на доставка е 2.50 лв и се начислява най-накрая.
От конзолата се четат 3 реда:
· Брой пилешки менюта – цяло число в интервала [0 … 99]
· Брой менюта с риба – цяло число в интервала [0 … 99]
· Брой вегетариански менюта – цяло число в интервала [0 … 99] */

function foodDelivery(input) {
  let chickenMenu = Number(input[0]) * 10.35;
  let fishMenu = Number(input[1]) * 12.4;
  let vegMenu = Number(input[2]) * 8.15;
  let desert = (chickenMenu + fishMenu + vegMenu) * 0.2;
  let deliverySum = chickenMenu + fishMenu + vegMenu + desert + 2.5;
  console.log(deliverySum);
}
foodDelivery(["2", "4", "3"]);
