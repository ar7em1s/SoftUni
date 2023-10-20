/* На всеки четен етаж има само офиси
На всеки нечетен етаж има само апартаменти
Всеки апартамент се означава по следния начин: 
A{номер на етажа}{номер на апартамента}, 
номерата на апартаментите започват от 0.
· Всеки офис се означава по следния начин: 
O{номер на етажа}{номер на офиса}, номерата на офисите също започват от 0.
· На последният етаж винаги има апартаменти и те са по-големи от останалите,
за това пред номера им пише 'L', вместо 'A'. 
Ако има само един етаж, то има само големи апартаменти! */

function bulding(params) {
  let floors = Number(params[0]);
  let roomsOnFloor = Number(params[1]);
  let allRooms = floors * roomsOnFloor; // 16
  let startingRoom = floors * 10; // 60

  for (let currFloor = 1; currFloor <= floors; currFloor++) {
    for (let currRoom = startingRoom; currRoom >= allRooms; currRoom--) {
      if (currFloor === floors) {
        console.log(`L${currRoom}`);
      }
    }
  }
}

bulding(["4", "4"]);
console.log("----------------");
//bulding(["9", "5"]);
