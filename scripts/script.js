
import {SaveToLocalStorageByInput, RemoveFromLocalStorage, localStorageItem, NamesEntered,} from "./localStorage.js";

//Make my Variables Here
let addNameInput = document.getElementById('addNameInput');
let addNameBtn = document.getElementById('addNameBtn');
let makeGroupInput = document.getElementById('makeGroupInput');
let makeGroupBtn = document.getElementById('makeGroupBtn');
let makeGroupSize = document.getElementById('makeGroupSize');
let makeGroupSizeBtn = document.getElementById('makeGroupSizeBtn');
let genOneRandomName = document.getElementById('genOneRandomName');
// let displayRandomName = document.getElementById('displayRandomName');

let CreateNameElements = document.getElementById("CreateNameElements");
let makeTheCards = document.getElementById('makeTheCards');
let DisplayOneName = document.getElementById('DisplayOneName');

// Create My Elements Here

function makeAddedNames(addNameInput) {
  let ul = document.createElement("ul");
  ul.className = "NameElements mx-4";

  let li = document.createElement("li");
  li.textContent = addNameInput;
  li.id = addNameInput.value;

  let span = document.createElement("span");
  span.className = "close";
  span.textContent = "x";
  span.addEventListener("click", function (){
   
      RemoveFromLocalStorage(addNameInput);
      li.remove();
  });

  li.appendChild(span);
  ul.appendChild(li);

  CreateNameElements.appendChild(ul);
}

// this.parentNode.remove()
let randomPersonInGroup;
function MakeCard(cardTitle, randomPersonInGroup)
{
    //build out card body

    let div = document.createElement('div');
    div.className ="card mt-5";
    div.style = "width: 15rem;"

    let nextDiv = document.createElement('div');
    nextDiv.className = "card-body";

    let h5 = document.createElement('h5');
    h5.className ="card-title";
    h5.textContent = cardTitle;

    let h6 = document.createElement('h6');
    h6.className = "card-subtitle mb-2 text-muted";

    let ol = document.createElement('ol');

    let li = document.createElement("li");

    li.textContent = randomPersonInGroup;
    
    ol.appendChild(li);

    nextDiv.appendChild(h5);
    nextDiv.appendChild(h6);
    nextDiv.appendChild(ol);

    div.appendChild(nextDiv);


    makeTheCards.appendChild(div);

}
// End Of creating Elements


//Make Random Generator
addNameBtn.addEventListener('click', function(){    
        SaveToLocalStorageByInput(addNameInput.value);
        makeAddedNames(addNameInput.value);
    //   }
    // console.log(RandomNames);
    // if (!localStorageItem.includes(addNameInput.value.toLowerCase())) {
    //    alert("this name has already been used");
    //   } 
    //   else {
    //     SaveToLocalStorageByInput(addNameInput.value);
    //     makeAddedNames(addNameInput)
    //   }
});


genOneRandomName.addEventListener('click',function(){

    if(NamesEntered.length < 1 )
    {
        alert('Enter in Names to Generate');
    }
    else
    {
        let randomName = Math.floor(Math.random() * NamesEntered.length);
        console.log(NamesEntered[randomName]);
        DisplayOneName.innerHTML = "Your Random Name is " + NamesEntered[randomName].bold();
    }
});

function setFavoriteList() {
    if (NamesEntered == []) {
     DisplayOneName.textContent = "No Names Available, Plaease Enter in Names";
    } else {
      for (let i = 0; i < NamesEntered.length; i++) {
        makeAddedNames(NamesEntered[i]);
      }
    }
  }

  let groupsTotal;
  let counter = 0;
  makeGroupBtn.addEventListener('click',function(){

   groupsTotal= makeGroupInput.value;
   console.log(groupsTotal);
   makeTheCards.innerHTML = ""; 
   for(let i = 0; i < groupsTotal; i++)
   {
    // debugger
    counter++
    MakeCard("Group " + [counter], NamesEntered);
    console.log([i])
   }

  });

setFavoriteList();