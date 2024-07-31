let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 4],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
                box.innerText = "X";
                turn0 = true;
            }
        box.disabled = true;

        checkwinner();
    });
});


const checkwinner = () => {
    for(let pattern of winPattern) {       
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
    }
}

