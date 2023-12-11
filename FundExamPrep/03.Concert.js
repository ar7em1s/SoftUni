function concert(input) {
    let bands = {};
  
    for (const line of input) {
      if (line === "Start!") {
        break;
      }
  
      let [command, bandName, params] = line.split("; ");
      
      if (command === "Add") {
        let members = params.split(", ");
        if (!bands[bandName]) {
          bands[bandName] = { time: 0, members: [] };
        }
  
        members.forEach(member => {
          if (!bands[bandName].members.includes(member)) {
            bands[bandName].members.push(member);
          }
        });
      } else if (command === "Play") {
        let time = Number(params);
        if (!bands[bandName]) {
          bands[bandName] = { time, members: [] };
        } else {
          bands[bandName].time += time;
        }
      }
    }
  
    let totalTime = Object.values(bands).reduce((acc, data) => acc + data.time, 0);
    console.log(`Total time: ${totalTime}`);
  
    Object.entries(bands).forEach(([band, data]) => {
      console.log(`${band} -> ${data.time}`);
    });
  
    let firstBand = Object.entries(bands)[0];
    console.log(`${firstBand[0]}\n=> ${firstBand[1].members.join('\n=> ')}`);
  }

concert(["Play; The Beatles; 2584",
"Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
"Add; The Beatles; Paul McCartney, George Harrison",
"Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
"Play; The Rolling Stones; 4239",
"Start!"]);
console.log('------');
concert(["Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr",
"Play; The Beatles; 4569",
"Play; The Beatles; 2456",
"Play; Queen; 1250",
"Add; Queen; Freddie Mercury, Brian May, Roger Taylor, John Deacon",
"Play; Queen; 6215",
"Start!"]);
