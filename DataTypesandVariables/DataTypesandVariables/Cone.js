function cone(r, h) {
    let volume = (1 / 3) * Math.PI * (Math.pow(r, 2)) * h;
    let slantH = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
    let totalArea = Math.PI * r * (slantH + r)
    console.log(`volume = ${volume.toFixed(4)}\narea = ${totalArea.toFixed(4)}`);
    //console.log(totalArea.toFixed(4));
}

cone(3, 5);
console.log("---------");
cone(3.3, 7.8);

//total surface πr(r + √(r2 + h2))