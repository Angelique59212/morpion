// suppression comportement defaut clic droit
document.addEventListener("contextmenu", function (event){
    event.preventDefault();
});

// Appel des divs
let compartments = document.getElementsByClassName("compartment");

//désignation joueur 1 et 2
for (let i = 0; i < compartments.length ; i++) {
    compartments [i].addEventListener("mouseup", function (event){
        console.log(event.button);
       switch (event.button){
           case 0 :
               compartments [i].innerHTML = "X";
               winner_horizontal();
               winner_vertical();
               break;
           case 2 :
               compartments [i].innerHTML = "O";
               winner_horizontal();
               winner_vertical();
               break;
       }
    })
}

// Vérification horizontale
function winner_horizontal() {
    if (compartments[0].innerHTML === compartments[1].innerHTML && compartments[0].innerHTML ===
        compartments[2].innerHTML) {
        alert("Tu a gagné");
        }
        // else if (compartments[3].innerHTML === compartments[4].innerHTML && compartments[3].innerHTML ===
        //     compartments[5].innerHTML) {
        //     alert("Tu as gagné");
        // }
        // else if(compartments[6].innerHTML === compartments[7].innerHTML && compartments[6].innerHTML ===
        //     compartments[8].innerHTML) {
        // alert("Tu as gagné");
        // }
}

// Vérification vertical
function winner_vertical() {
    if (compartments[0].innerHTML === compartments[4].innerHTML && compartments[0].innerHTML ===
        compartments[8].innerHTML){
        alert("Tu as gagné");
    }
}


let retry = document.getElementById("submit");

retry.addEventListener("click", function (){

})