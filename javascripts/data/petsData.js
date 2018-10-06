import {setPets, petsBuilder, getPetz} from '../components/petComponents.js';


// --------- DID NOT MAKE SENSE YET ------------

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);   // "This" refers to getPets() in XHR down this page
    setPets(data.pets);
    petsBuilder(getPetz());
};

function executeThisCodeIfXhrFails () {
    console.log('meeow');
};

const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();
};

export {getPets}