/* Write a function, which as input will receive 3 parameters (strings)
· The first string is the name of the band
· The second string is the name of the album
· The third is holding a song name from the album
You have to find out how many times the plate will rotate the given song from the album. The plate makes a full rotation every 2.5 seconds.
The song duration in seconds is calculate by the given formula: (albumName.length * bandName.length) * song-name.length / 2
As output, you should print the following message: `The plate was rotated {rotations} times.`
Rotations should be rounded up. */

function gramophone(bandName, albumName, songName) {
    // let albumLen = albumName.split("");
    // let bandLen = bandName.split("");
    // let songLen = songName.split("");
    let songDuration = (albumName.length * bandName.length * songName.length) / 2; // in seconds
    console.log(`The plate was rotated ${Math.ceil(songDuration / 2.5)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
console.log("------------");
gramophone('Rammstein', 'Sehnsucht', 'Engel');