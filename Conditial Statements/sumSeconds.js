/*Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). Да се напише функция, 
която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". 
Секундите да се изведат с водеща нула (2 à "02", 7 à "07", 35 à "35"). */ 

function sportTime(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let sumTime = first + second + third;
    let timeInMinutes = Math.floor(sumTime / 60);
    let timeInSeconds = sumTime % 60;
        
        if (timeInSeconds < 10) {
        console.log(`${timeInMinutes}:0${timeInSeconds}`)
        } else {
        console.log(`${timeInMinutes}:${timeInSeconds}`)
        }
    }