function solve() {
  const inputText = document.getElementById("input").value;
  const outputElement = document.getElementById("output");

  const splittedSentences = inputText.split(".").filter(Boolean).map((x) => x.trim());

  for (let i = 0; i < splittedSentences.length; i += 3) {
    const currentParagraph = splittedSentences.slice(i, i + 3).join(". ").concat(".");
    outputElement.innerHTML += `<p>${currentParagraph}</p>`;
  }

  // const outputElement = document.getElementById('output');
  // const inputText = document.getElementById('input').value;

  // const regExp = /[^.!?]+[.!?]+(?:\s+|$)/g;
  // const splittedSentences = inputText.matchAll(regExp);

  // let outputHTML = '';
  // let currentParagraph = '';
  // let sentenceCount = 0;

  // for (const sentence of splittedSentences) {
  //   currentParagraph += sentence[0];
  //   sentenceCount++;

  //   if (sentenceCount === 3) {
  //     outputHTML += `<p> ${currentParagraph} </p>`;
  //     currentParagraph = '';
  //     sentenceCount = 0;
  //   }
  // }

  // if (currentParagraph) {
  //   outputHTML += `<p>${currentParagraph.trim()}</p>`;
  // }

  // outputElement.innerHTML = outputHTML;
}
