/* По време на обедната почивка искате да изгледате епизод от своя любим сериал. Вашата задача е да напишете програма, 
с която ще разберете дали имате достатъчно време да изгледате епизода. 
По време на почивката отделяте време за обяд и време за отдих. Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка.
Вход От конзолата се четат 3 реда:
1. Име на сериал – текст
2. Продължителност на епизод – цяло число в диапазона [10… 90]
3. Продължителност на почивката – цяло число в диапазона [10… 120]
Изход На конзолата да се изпише един ред:
Ако времето е достатъчно да изгледате епизода: "You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
Ако времето не Ви е достатъчно: "You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
Времето да се закръгли до най-близкото цяло число нагоре. */ // (["Game of Thrones", "60","96"]) You have enough time to watch Game of Thrones and left with 0 minutes free time

function lunchBreak(input) {
  let showName = input[0];
  let episodeTime = Number(input[1]);
  let breakTime = Number(input[2]);

  let lunch = breakTime / 8;
  let relax = breakTime / 4;
  let showTime = breakTime - lunch - relax;

  let diff = Math.abs(showTime - episodeTime);

  if (episodeTime <= showTime) {
    console.log(
      `You have enough time to watch ${showName} and left with ${Math.ceil(
        diff
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${showName}, you need ${Math.ceil(
        diff
      )} more minutes.`
    );
  }
}
lunchBreak(["Game of Thrones", "60", "60"]);
