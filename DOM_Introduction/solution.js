function solve() {
  const resultElement = document.getElementById('result');
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;

  if (namingConvention !== 'Camel Case' && namingConvention !== 'Pascal Case') {
    resultElement.textContent = 'Error!';
    return;
  }

  const textAsArray = text.split(' ');

  // for (const [index, element] of textAsArray.entries()) {
  //   if (namingConvention === 'Camel Case') {
  //     const isFirstWord = (index === 0);

  //     textAsArray[index] = camelCaseConverter(element, isFirstWord);
  //   } else if (namingConvention === 'Pascal Case') {
  //     textAsArray[index] = pascalCaseConverter(element);
  //   }
  // }

  // resultElement.textContent = textAsArray.join('');

  // function camelCaseConverter(element, isFirstWord) {
  //   return isFirstWord ? element.toLowerCase() : element[0].toUpperCase() + element.slice(1).toLowerCase();
  // }

  // function pascalCaseConverter(element) {
  //   return element[0].toUpperCase() + element.slice(1).toLowerCase();
  // }

  let result = '';

  for (let i = 0; i < textAsArray.length; i++) {
    let word = textAsArray[i].toLowerCase();

    if (namingConvention === 'Camel Case' && i === 0) {
      result += word;
    } else {
      result += word[0].toUpperCase() + word.slice(1);
    }
  }

  resultElement.textContent = result;
}
