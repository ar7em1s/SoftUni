/* Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. 
Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). 
На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle). 
⦁	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
⦁	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
⦁	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
⦁	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея

*/
function area(input) {
  let areaType = input[0];
  if (areaType == "square") {
    let sqa = Number(input[1]);
    let sqSum = sqa * sqa;
    console.log(sqSum.toFixed(3));
  } else if (areaType == "rectangle") {
    let rca = Number(input[1]);
    let rcb = Number(input[2]);
    let rcSum = rca * rcb;
    console.log(rcSum.toFixed(3));
  } else if (areaType == "circle") {
    let r = Number(input[1]);
    let crSum = r ** 2 * Math.PI;
    console.log(crSum.toFixed(3));
  } else if (areaType == "triangle") {
    let tra = Number(input[1]);
    let h = Number(input[2]);
    let trSum = (tra * h) / 2;
    console.log(trSum.toFixed(3));
  }
}

area(["triangle", "4.5", "20"]); //90.000
