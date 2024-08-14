function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedWord = document.getElementById('searchField').value.toLowerCase();
      const rowsToSearchIn = document.querySelectorAll('table tbody tr');

      rowsToSearchIn.forEach(row => {
         row.classList.remove('select');
      });

      for (const row of rowsToSearchIn) {
         const rowTds = row.querySelectorAll('td');

         for (const td of rowTds) {
            if (td.textContent.toLowerCase().includes(searchedWord)) {
               row.classList.add('select');
            }
         }
      }
   }
}
