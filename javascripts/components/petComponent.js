const printToDom = (stringToPrint) => {
    const printHere = document.getElementById('petsCard');
    printHere.innerHTML = stringToPrint;
  }
  
  let pets = [];

  const arrangePets = (newArray) => {
    pets = newArray;
}
  
  const petBuilder = () => {

    let newString = '';

    for (let i = 0; i < pets.length; i++) {
      
        newString += `<div class="d-inline-flex justify-content-center card text-center m-4" style="width: 15rem;">`
        newString +=    `<div class="card-header">`
        newString +=    `<h5>${pets[i].name}</h5>`
        newString +=    `</div>`
        newString +=    `<div class="card-body">`
        newString +=        `<img class="card-img-top" src="${pets[i].imageUrl}" alt="${pets[i].name}">`
        newString +=        `<h5 class="card-text mt-1">${pets[i].color}</h5>`
        newString +=        `<h5 class="card-text">${pets[i].specialSkill}</h5>`
        newString +=    `</div>`
        newString +=    `<div class="card-footer text-${pets[i].text}" style="background-color: ${pets[i].background};">`
        newString +=        `<h5>${pets[i].type}</h5>`
        newString +=    `</div>`
        newString += `</div>`      
    }
    printToDom (newString, 'petsCard');
  }




  export {petBuilder, printToDom, arrangePets}