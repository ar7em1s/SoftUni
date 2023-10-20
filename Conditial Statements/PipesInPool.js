/* Басейн с обем V има две тръби от които се пълни. 
Всяка тръба има определен дебит (литрите вода минаващи през една тръба за един час). 
Работникът пуска тръбите едновременно и излиза за N часа. 
Напишете програма, която изкарва състоянието на басейна, в момента, когато работникът се върне. 
Вход От конзолата се четат четири реда:
Първият ред съдържа числото V – Обем на басейна в литри – цяло число в интервала [1…10000].
Вторият ред съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1…5000].
Третият ред съдържа числото P2 – дебит на втората тръба за час– цяло число в интервала [1…5000].
Четвъртият ред съдържа числото H – часовете които работникът отсъства – реално число в интервала [1.0…24.00]
Да се отпечата на конзолата едно от двете възможни състояния:
До колко се е запълнил басейна и коя тръба с колко процента е допринесла.
"The pool is {запълненост на басейна в проценти}% full. Pipe 1: {процент вода от първата тръба}%. Pipe 2: {процент вода от втората тръба}%."
Aко басейнът се е препълнил – с колко литра е прелял за даденото време.
"For {часовете, които тръбите са пълнили вода} hours the pool overflows with {литрите вода в повече} liters." */

function pipes(input) {
  let poolVolume = Number(input[0]);
  let pipe1 = Number(input[1]);
  let pipe2 = Number(input[2]);
  let hours = Number(input[3]);

  let litersP1 = pipe1 * hours;
  let litersP2 = pipe2 * hours;
  let allPipeLiters = litersP1 + litersP2;

  let percentLiters = (allPipeLiters / poolVolume) * 100;
  let P1Percent = (litersP1 / allPipeLiters) * 100;
  let P2Percent = (litersP2 / allPipeLiters) * 100;

  if (allPipeLiters > poolVolume) {
    let diff = allPipeLiters - poolVolume;
    console.log(
      `For ${hours} hours the pool overflows with ${diff.toFixed(2)} liters.`
    );
  } else {
    console.log(
      `The pool is ${percentLiters.toFixed(
        2
      )}% full. Pipe 1: ${P1Percent.toFixed(2)}%. Pipe 2: ${P2Percent.toFixed(
        2
      )}%.`
    );
  }
}

pipes(["1000", "100", "120", "3"]);
pipes(["100", "100", "100", "2.5"]);

/* for (let h = 1; h <= 24; h++) {
  for (let v = 1; v <= 10000; v++) {
    for (let p1 = 1; p1 <= 150; p1++) {
      for (let p2 = 1; p2 <= 150; p2++) {
        pipes([150, p1, p2, 16]);
      }
    }
  }
} */
