//100% sure there is a better way

function cookingNumbers(number, a1, a2, a3, a4, a5) {
    let num = parseInt(number);
    let actions = [a1, a2, a3, a4, a5];
    
    for (let i = 0; i < actions.length; i++) {
        switch (actions[i]) {
            case 'chop':
                num /= 2;
                if (num % 1 !== 0) {
                    console.log(num.toFixed(1));
                  } else {
                    console.log(num);
                  }
            break;
            case 'dice':
                num = Math.sqrt(num);
                if (num % 1 !== 0) {
                    console.log(num.toFixed(1));
                  } else {
                    console.log(num);
                  }
            break;
            case 'spice':
                num += 1;
                if (num % 1 !== 0) {
                    console.log(num.toFixed(1));
                  } else {
                    console.log(num);
                  }
            break;
            case 'bake':
                num *= 3;
                if (num % 1 !== 0) {
                    console.log(num.toFixed(1));
                  } else {
                    console.log(num);
                  }
            break;
            case 'fillet':
                num *= 0.8;
                if (num % 1 !== 0) {
                    console.log(num.toFixed(1));
                  } else {
                    console.log(num);
                  }
        }
    }
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-------');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
