let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rgbtn");
let newGameBtn = document.querySelector("#nbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

//winning pattren logic location
const winPattrens = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

//reset button
const resetGame=()=>{
    turnO=true;
    enablesboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) { //playerO turn
            box.innerText = "O";
            turnO = false;
        } else { //playerX turn
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablesboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

//to check who is the winner
const checkWinner = () => {
    for (let pattren of winPattrens) {
        let pos1val = boxes[pattren[0]].innerText;
        let pos2val = boxes[pattren[1]].innerText;
        let pos3val = boxes[pattren[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);