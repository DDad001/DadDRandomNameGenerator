let NamesEntered = [];
function SaveToLocalStorageByInput(addNameInput)
{
    NamesEntered.push(addNameInput.toLowerCase());
    localStorage.setItem('listOfNames',JSON.stringify(NamesEntered));
}
function SaveToLocalStorage(){
    localStorage.setItem('listOfNames',JSON.stringify(NamesEntered));
}
    let localStorageItem;
function GetLocalStorage(){
    localStorageItem = localStorage.getItem('listOfNames');
    localStorageItem != null ? NamesEntered = JSON.parse(localStorageItem) : NamesEntered = [];
    return  NamesEntered;
}

function RemoveFromLocalStorage(addNameInput){
    let cityIndex =  NamesEntered.indexOf(addNameInput.toLowerCase());
    NamesEntered.splice(cityIndex,1);
    SaveToLocalStorage();
}

localStorage.setItem('people','jateen angel');
let people = ['jateen','angel']
GetLocalStorage();
console.log(people);

export {SaveToLocalStorageByInput, GetLocalStorage, RemoveFromLocalStorage, localStorageItem,  NamesEntered}