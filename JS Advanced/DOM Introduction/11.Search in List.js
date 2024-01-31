function search() {
   let search = document.getElementById('searchText').value.toLowerCase();
   let townList = document.getElementById('towns').getElementsByTagName('li');
   let resultContainer = document.getElementById('result');
   let matches = 0;
   

   if (search !== '') {
      for (let i = 0; i < townList.length; i++) {
         let currTown = townList[i].textContent.toLowerCase();

         if (currTown.includes(search)) {
            townList[i].style.textDecoration = 'underline';
            townList[i].style.fontWeight = 'bold';
            matches++;
         } else {
            townList[i].style.textDecoration = 'none';
            townList[i].style.fontWeight = 'normal';
         }
      }
      resultContainer.textContent = `${matches} matches found`;
   } else {
      for (let i = 0; i < townList.length; i++) {
         townList[i].style.textDecoration = 'none';
         townList[i].style.fontWeight = 'normal';
      }
      resultContainer.textContent = '0 matches found';
   }

   resultContainer.textContent = `${matches} matches found`;
   search.value = '';
}
