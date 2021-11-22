let token = true;

// remove right click
document.addEventListener("contextmenu", function (event){
    event.preventDefault();
});

// call div
let compartments = document.getElementsByClassName("compartment");
let win = document.getElementById("winner");
let equal = document.getElementById("equality");

//player designation 1 and 2
for (let i = 0; i < compartments.length ; i++) {
    compartments [i].addEventListener("mouseup", function (event){
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

// winner verification
function winner() {
    if (compartments[0].innerHTML === "O" || compartments[0].innerHTML === "X") {
        if (compartments[0].innerHTML === compartments[1].innerHTML && compartments[0].innerHTML ===
            compartments[2].innerHTML) {
            token = false;
            win.innerHTML = "Tu as gagné";
        }
        else if (compartments[0].innerHTML === compartments[3].innerHTML && compartments[0].innerHTML ===
        compartments[6].innerHTML) {
            token = false;
            win.innerHTML = "Tu as gagné";
        }
        else if (compartments[0].innerHTML === compartments[4].innerHTML && compartments[0].innerHTML ===
            compartments[8].innerHTML) {
            token = false;
            win.innerHTML = "Tu as gagné";
        }
    }
    else if (compartments[4].innerHTML === "O" || compartments[4].innerHTML === "X") {
        if (compartments[6].innerHTML === compartments[4].innerHTML && compartments[6].innerHTML ===
            compartments[2].innerHTML) {
            token = false;
            win.innerHTML = "Tu as gagné";
        }
        else if (compartments[5].innerHTML === compartments[4].innerHTML && compartments[5].innerHTML ===
            compartments[3].innerHTML) {
            token = false;
            win.innerHTML = "Tu as gagné";
        }
        else if (compartments[2].innerHTML === compartments[4].innerHTML && compartments[4].innerHTML ===
            compartments[6].innerHTML) {
            token = false;
            win.innerHTML = "Tu as gagné";
        }
        else if (compartments[1].innerHTML === compartments[4].innerHTML && compartments[1].innerHTML ===
            compartments[7].innerHTML) {
            win.innerHTML = "Tu as gagné";
        }
    }
    else if (compartments[8].innerHTML === "O" || compartments[8].innerHTML === "X") {
        if (compartments[8].innerHTML === compartments[2].innerHTML && compartments[8].innerHTML ===
            compartments[5].innerHTML) {
            token = false;
            win.innerHTML = "Tu as gagné";
        }
        else if (compartments[8].innerHTML === compartments[6].innerHTML && compartments[8].innerHTML ===
            compartments[7].innerHTML) {
            token = false;
            win.innerHTML = "Tu as gagné";
        }
    }

        let nb = 0;
        for (let i = 0; i < 9; i++) {
            if (compartments[i].innerHTML === ""){
                break;
            }
            else {
                nb++;
            }
        }
        if (nb === 9) {
            equal.innerHTML = "Egalité";
        }
}

//replay
let retry = document.getElementById("submit");
retry.addEventListener("click", function (){
    token = true;
    win.innerHTML = "";
})