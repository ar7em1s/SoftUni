function chess(n) {
    let bl = `    <span class="black"></span>`;
    let wh = `    <span class="white"></span>`;

    console.log(`<div class="chessboard">`);
    
    for (let i = 1; i <= n; i++) {
        console.log(`  <div>`);
        if (i % 2 == 0) {
            console.log(wh,`\n`,bl,`\n`,wh);
        } else {
            console.log(bl,`\n`,wh,`\n`,bl);
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}

chess(6);