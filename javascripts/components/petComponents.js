import {printToDom} from '../helpers/util.js';


// -------- DID NOT MAKE SENCE YET --------------

let pets = [];   // hold the JSON data

const setPets = (newArray) => {  // Write the data
    pets = newArray;
};

const getPetz = () => { // Read the data
    return pets;
};

const sortPets = (e) => {
    const type = e.target.id;  // what does "e.target.id" mean?
    if(type === 'all'){
        petsBuilder(pets);
    } else {
    const filteredPets = pets.filter(x => x.type === type);  // Id dosn't make sense to me!!
        petsBuilder(filteredPets);
    }
};


// ---------- DID NOT MAKE SENSE YET ------------------------


const petsBuilder = (petsArray) => {
    let domString = '';
    petsArray.forEach((pet) => {
    domString += `<div class="card d-inline-flex m-4 pet" id="iJustNeedSomeSpace" style="max-width: 18rem;">`;
    domString +=    `<div class="card-header text-center border-secondary" id="petName">${pet.name}</div>`;
    domString +=    `<div class="card-body text-secondary">`;
    domString +=        `<div class="container image-container">`;
    domString +=            `<img class="card-img" id="image" src="${pet.imageUrl}" alt="${pet.name}">`;
    domString +=        `</div>`;
    domString +=        `<p class="card-title text-center" id="petWords">${pet.color}</p>`;
    domString +=        `<p class="card-text text-center" id="petWords">${pet.specialSkill}</p>`;
    domString +=    `</div>`;
    domString +=    `<div class="card-footer text-center text-capitalize border-secondary ${pet.type}">${pet.type}</div>`;
    domString += `</div>`;
    })
    printToDom(domString)
    };

export {petsBuilder, setPets, getPetz, sortPets}