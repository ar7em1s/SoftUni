function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let hiddentTxt = document.getElementById('extra');


    if (hiddentTxt.style.display == 'none') {
        hiddentTxt.style.display = 'block';
        btn.textContent = 'Less';
    } else {
        hiddentTxt.style.display = 'none';
        btn.textContent = 'More';
    }

}
