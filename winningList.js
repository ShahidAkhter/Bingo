let winList = [];
let gridSize;
let leastGridSize = 4;
let mostGridSize = 10;
let gridComponent = document.getElementById(`gridComponent`);
let labelGridSize = document.getElementById(`labelGridSize`);
let gridSizeInput = document.getElementById(`gridSizeInput`);
let gridSizeSetterbtn = document.getElementById(`gridSizeSetter`);
let gridCloser = document.getElementById(`gridCloser`);

labelGridSize.innerText = `Select a number between ${leastGridSize} and ${mostGridSize} for the grid size [e.g. enter 5 for a 5x5 grid]:`

for (let i = leastGridSize; i <= mostGridSize; i++) {
    gridSizeInput.innerHTML+=`<option value="${i}">${i}</option>`;
}

const getGridSize = async () => {
    gridSize=parseInt(gridSizeInput.value);
    gridComponent.style.display="none";
}


const winningListFunc = async () => {
    let arrPart0 = [];
    let arrPart1 = [];
    let arrPart2 = [];
    let arrPart3 = [];
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            arrPart0.push(`${i}${j}`); // Getting rows-by-rows
            arrPart1.push(`${j}${i}`); // Getting columns-by-columns
        }
        winList.push(arrPart0); // appending arrPart0 to winList
        winList.push(arrPart1); // appending arrPart1 to winList

        // Getting Diagonals
        arrPart2.push(`${i}${i}`);
        arrPart3.push(`${(gridSize - 1) - i}${i}`); // let gridSize=5, i==1 then this line will return (5-1)-1==3 with value of i

        // Resetting arrParts for another winList values
        arrPart0 = [];
        arrPart1 = [];
    }
    winList.push(arrPart2); // appending arrPart2 to winList
    winList.push(arrPart3); // appending arrPart3 to winList
    return 0;
}

