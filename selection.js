/*-----------------------
player selection section
------------------------*/
const playerArray = [];

function selectedPlayers(playerArray) {
  const selectedElement = document.getElementById("selected");
  const player = document.getElementById("selected-players");
  player.innerText = "";
  // looping to access array elements
  for (let i = 0; i < playerArray.length; i++) {
    let players = playerArray[i];
    // appending order list
    let ol = document.createElement("ol");
    ol.innerHTML = `
    <li class="list-group-item fw-bold">${i + 1}. ${players}</li> 
`;
    player.appendChild(ol);
    selectedElement.innerText = playerArray.length;
    console.log(playerArray.length, playerArray[i]);
  }
}

/*----------------------------
 selected players list created
-----------------------------*/
function addToCart(element) {
  const playerName = element.parentNode.children[0].innerText;
  playerArray.push(playerName);
  // error message condition for more than five players
  if (playerArray.length < 6) {
    selectedPlayers(playerArray);
  } else {
    alert("Sorry you cant choose more than five players");
    return;
  }
}

/*-------------------------------------------
 made buttons disabled after clicked for BONUS
-------------------------------------------*/
const buttons = document.querySelectorAll(".btn-disabled");
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    let button = event.target;
    if (playerArray.length < 6) {
      button.setAttribute("disabled", true);
      button.style.backgroundColor = "black";
    } else {
      return;
    }
  });
}
