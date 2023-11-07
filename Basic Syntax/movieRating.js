function movieRating(input) {
    let n = Number(input[0]);
    //let index = 1; 
    //let currentMovie = input[index];
    //let movieScore = Number(input[index + 1]);
    
    let maxScore = 10.00;

    let index = 1; 
    let accScore = 0;
    let movieCount = 0;
    for (let i = 1; i < n + n; i++) {
        let currentMovie = input[index];
        let movieScore = Number(input[index + 1]);
        if (movieScore <= maxScore) {
            accScore += movieScore; // 
            maxScore = movieScore; // add 8.5 three times - Interstellar
            movieCount++
            index++;
        }

        console.log(currentMovie, accScore, maxScore);
    }
}

movieRating(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"])
console.log("--------")