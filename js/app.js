
let somebodyWin = 0;
let lastX = 0;
let lastO = 0;

// remove right click
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

// call div
let compartments = document.getElementsByClassName("compartment");
let win = document.getElementById("winner");
let equal = document.getElementById("equality");


//player designation one and two
for (let i = 0; i < compartments.length ; i++) {
    compartments [i].addEventListener("mouseup", function (event) {
       switch (event.button) {
           case 0 :
               if (somebodyWin === 0 && lastX === 0 && compartments[i].innerHTML === "") {
                   compartments [i].innerHTML = "<span class='X'>X</span>";
                   winner();
                   lastX = 1;
                   lastO = 0;
               }
               break;

           case 2 :
               if (somebodyWin === 0 && lastO === 0 && compartments[i].innerHTML === "") {
                   compartments [i].innerHTML = "<span class='O'>O</span>";
                   winner();
                   lastO = 1;
                   lastX = 0;
               }
               break;
       }
    });
}

// winner verification
function winner() {
        // horizontal
        for (let i =0; i < 3 ; i++) {
            if (compartments[i * 3].innerHTML === compartments[1 + i * 3].innerHTML && compartments[i * 3].innerHTML ===
                compartments[2 + i * 3].innerHTML && compartments[i * 3].innerText === "X") {
                win.innerHTML = "X a gagné";
                somebodyWin = 1;
            }
            else if (compartments[i * 3].innerHTML === compartments[1 + i * 3].innerHTML && compartments[i * 3].innerHTML ===
                compartments[2 + i * 3].innerHTML && compartments[i * 3].innerText === "O") {
                win.innerHTML = "O a gagné";
                somebodyWin = 1;
            }
        }

        //vertical
        for (let i = 0; i < 3 ; i++) {
            if (compartments[i].innerHTML === compartments[3 + i].innerHTML && compartments[i].innerHTML ===
                compartments[6 + i].innerHTML && compartments[i].innerText === "X") {
                win.innerHTML = "X a gagné";
                somebodyWin = 1;
            }
            else if (compartments[i].innerHTML === compartments[3 + i].innerHTML && compartments[i].innerHTML ===
                compartments[6 + i].innerHTML && compartments[i].innerText === "O") {
                win.innerHTML = "O a gagné";
                somebodyWin = 1;
            }
        }

        //diagonal
        for (let i = 0; i <2; i++) {
            if (compartments[i * 2].innerHTML === compartments[4].innerHTML && compartments[i * 2].innerHTML ===
                compartments[8 - (i * 2)].innerHTML  && compartments[i * 2].innerText === "O") {
                win.innerHTML = "O a gagné";
                somebodyWin = 1;
            }
            else if (compartments[i * 2].innerHTML === compartments[4].innerHTML && compartments[i * 2].innerHTML ===
                compartments[8 - (i * 2)].innerHTML && compartments[i * 2].innerText === "X") {
                win.innerHTML = "X a gagné";
                somebodyWin = 1;
            }
        }

        //equal
        let hitCounter = 0;
        for (let i = 0; i < 9; i++) {
            if (compartments[i].innerHTML === "") {
                break;
            }
            else {
                hitCounter++;
            }
        }
        if (hitCounter === 9 && somebodyWin === 0) {
            equal.innerHTML = "Egalité";
        }
}

//replay
let retry = document.getElementById("submit");
retry.addEventListener("click", function (){
    somebodyWin = 0;
    win.innerHTML = "";
    equal.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        compartments[i].innerHTML = "";
    }
    lastO = 0;
    lastX = 0;
});