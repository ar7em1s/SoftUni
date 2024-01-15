//overall works, but is missing 1-2 seconds from the result

function timeToTalk(steps, footprint, kmperh) {
    let distance = steps * footprint;
    let restTime = Math.floor(distance / 500) * 60;
    let wakingTime = (distance / (kmperh * 1000 / 3600));
    let totalTime = wakingTime + restTime;

    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime % 3600) / 60);
    let seconds = Math.floor(totalTime % 60);
    
    console.log(`0${hours}:${minutes}:${seconds}`);

}

timeToTalk(4000, 0.60, 5);
console.log('--------');
timeToTalk(2564, 0.70, 5.5);
