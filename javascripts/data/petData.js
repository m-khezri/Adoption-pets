import {petBuilder, arrangePets} from '../components/petComponent.js';

// -----------------------------------------------------------------


function afterFileLoaded () {
    const data = JSON.parse(this.responseText);
    arrangePets(data.pets);
    petBuilder();
}


const loadError = () => {
    console.log('Error');
}


const getPets = () => {

    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', afterFileLoaded);
    myRequest.addEventListener('error', loadError);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();

}

export {getPets};


