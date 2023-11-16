function reverse(text) {
    let midIdx = text.length / 2;

    let left = text.slice(0, midIdx).split('').reverse().join('');
    let right = text.slice(midIdx).split('').reverse().join('');

    console.log(left);
    console.log(right);
}

reverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('--------');
reverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');