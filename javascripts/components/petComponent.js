const printToDom = (stringToPrint) => {
    const printHere = document.getElementById('petsCard');
    printHere.innerHTML = stringToPrint;
  }
  
  
  export {printToDom};