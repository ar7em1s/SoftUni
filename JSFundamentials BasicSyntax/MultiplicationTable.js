// {number} X {times} = {product}

function multiplication(num) {
  for (let i = 1; i <= 10; i++) {
    let sum = num * i;
    console.log(`${num} ` + "X" + ` ${i} ` + "=" + ` ${sum}`);
  }
}

multiplication(5);
