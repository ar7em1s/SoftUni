function solve() {
  const result = document.getElementById('result');
  let inputText = document.getElementById('text').value;
  let namingConv = document.getElementById('naming-convention').value;
  inputText.toLowerCase();
  let resultStr = '';

  if (namingConv == 'Pascal Case') {
    let text = inputText.split(' ');
    text.forEach(word => {
      resultStr += word[0].toUpperCase() + word.substring(1).toLowerCase();
    });

  } else if (namingConv == 'Camel Case') {
    let text2 = inputText.split(' ');
    let resultStr = text2.shift();

    text2.forEach(word => {
      resultStr += word[0].toUpperCase() + word.substring(1).toLowerCase();
    });

  } else {
    resultStr = 'Error!';
  }

  result.textContent = resultStr;
}
