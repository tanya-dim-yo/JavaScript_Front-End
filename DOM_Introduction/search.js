function search() {
   const ulElement = document.getElementById('towns');
   const searchedText = document.getElementById('searchText').value;
   const resultElement = document.getElementById('result');
   const townElements = ulElement.getElementsByTagName('li');

   resultElement.textContent = '';
   for (const town of townElements) {
      town.style.fontWeight = '';
      town.style.textDecoration = '';
   }

   let matches = 0;
   for (const town of townElements) {
      if (town.textContent.toLowerCase().includes(searchedText.toLowerCase())) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';

         matches++;
      }
   }

   resultElement.textContent = `${matches} matches found`;
}
