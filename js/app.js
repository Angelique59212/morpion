let token = true;

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
               if (token) {
                   compartments [i].innerHTML = "X";
                   winner();
               }
               break;
           case 2 :
               if (token) {
                   compartments [i].innerHTML = "O";
                   winner();
               }
               break;
       }
    })
}

// Vérification horizontale
function winner() {
    if (compartments[0].innerHTML === "O" || compartments[0].innerHTML === "X") {
        if (compartments[0].innerHTML === compartments[1].innerHTML && compartments[0].innerHTML ===
            compartments[2].innerHTML) {
            token = false;
            alert("Tu as gagné !");
        }
        else if (compartments[0].innerHTML === compartments[3].innerHTML && compartments[0].innerHTML ===
        compartments[6].innerHTML) {
            token = false;
            alert("Tu as gagné !");
        }
        else if (compartments[0].innerHTML === compartments[4].innerHTML && compartments[0].innerHTML ===
            compartments[8].innerHTML) {
            token = false;
            alert("Tu as gagné !");
        }
    }
    else if (compartments[4].innerHTML === "O" || compartments[4].innerHTML === "X") {
        if (compartments[6].innerHTML === compartments[4].innerHTML && compartments[4].innerHTML ===
            compartments[3].innerHTML) {
            token = false;
            alert("Tu as gagné !");
        }
        else if (compartments[5].innerHTML === compartments[2].innerHTML && compartments[5].innerHTML ===
            compartments[7].innerHTML) {
            token = false;
            alert("Tu as gagné !");
        }
        else if (compartments[2].innerHTML === compartments[4].innerHTML && compartments[4].innerHTML ===
            compartments[6].innerHTML) {
            token = false;
            alert("Tu as gagné !")
        }
    }
    else if (compartments[8].innerHTML === "O" || compartments[8].innerHTML === "X") {
        if (compartments[8].innerHTML === compartments[2].innerHTML && compartments[8].innerHTML ===
            compartments[6].innerHTML) {
            token = false;
            alert("Tu as gagné !");
        }
        else if (compartments[8].innerHTML === compartments[6].innerHTML && compartments[8].innerHTML ===
            compartments[7].innerHTML) {
            token = false;
            alert("Tu as gagné !");
        }
    }
}

let retry = document.getElementById("submit");

retry.addEventListener("click", function (){

})