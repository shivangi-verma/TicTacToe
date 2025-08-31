let gameBoard = ["", "", "", "", "", "", "", "", ""];
let playerCounter = 0;
const playerO = "O";
const playerX = "X";

const playerOArr = [];
const playerXArr = [];

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// function winnerCheck(arr, name) {
//   for (i in winningPattern) {
//     var [a, b, c] = winningPattern[i];
     

//     var check = arr.includes(a) && arr.includes(b) && arr.includes(c);
//     console.log("check = " + check);

//     if (check) {
//       console.log("winner is " + name);
//     }
//   }
//   console.log(name + " = " + arr);
// }



function checkboxHandler(checkbox) {
  if (playerCounter % 2 == 0) {
    console.log(checkbox.id);
    playerOArr.push(Number(checkbox.id));
    document.getElementById(checkbox.id).setAttribute("data-value", "O");
    winnerCheck(playerOArr, "PO");
    playerCounter++;
  } else {
    console.log(checkbox.id);
    playerXArr.push(Number(checkbox.id));
    document.getElementById(checkbox.id).setAttribute("data-value", "X");
    winnerCheck(playerXArr, "PX");
    playerCounter++;
  }
}


function winnerCheck(arr, name){
    for (let [a,b,c] of winningPattern) {
        let check = arr.includes(a) && arr.includes(b) && arr.includes(c);
        
        if (check){
            console.log("winner is " + name);

            // 🎉 Fire confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
            window.alert(`Winner is ${name}`)
            return true; // stop after win
            
        }
    }   
    return false;
}