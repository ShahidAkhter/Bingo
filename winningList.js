let winList = [];
let gridSize;
let leastGridSize = 4;
let mostGridSize = 10;
gridComponent = document.getElementById(`gridComponent`);
labelGridSize = document.getElementById(`labelGridSize`);
gridSizeInput = document.getElementById(`gridSizeInput`);
gridSizeSetterbtn = document.getElementById(`gridSizeSetter`);
gridCloser = document.getElementById(`gridCloser`);

labelGridSize.innerText = `Enter a number between ${leastGridSize} and ${mostGridSize} for the grid size [e.g. enter 5 for a 5x5 grid]:`

document.getElementById(`gridSizeInput`).select();

const getGridSize = async () => {
    // document.getElementById(`gridSizeInput`).select();
    try {
        gridSize = parseInt(gridSizeInput.value);
        if (gridSize == undefined || gridSizeInput.value == "" || !gridSize || gridSize < leastGridSize || gridSize > mostGridSize) {
            gridSize = 5;
        }
    } catch (error) {
        gridSize = 5;
    }
    gridComponent.style.display="none";
    gridSizeInput.value="";
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

