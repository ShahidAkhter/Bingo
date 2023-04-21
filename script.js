let cellValue = 1;
let NoOfCells = gridSize * gridSize;
let startPlay = document.getElementById('startPlay');
let letsplay = "Let's Play";
let startPlaying = "Start Playing";
let bgcolor = "rgb(149 255 163)";
let score = 0;
let scoreComponent = document.getElementById('Score');
let resetComponent = document.getElementById('resetComponent');
let myGameResetter = document.getElementById('myGameResetter');
let resetCloser = document.getElementById('resetCloser');
let gamestarter = document.getElementById('refresh');
let gridresetter = document.getElementById('gridReset');
resetComponent.style.display = 'none';
scoreComponent.style.display = "none";
startPlay.innerText = letsplay;

document.getElementById('gameBoard').innerHTML = "";

gridCloser.style.display="none";
// Make and append table to gameBoard component
const gameBoard = async () => {
    let table = "";
    for (let i = 0; i < gridSize; i++) {
        table += `<tr id="tr${i}">`;
        for (let j = 0; j < gridSize; j++) {
            table += `<td class="border-2 border-purple-500 px-4 py-2 h-[8vh] w-20 cell hoverBg" id="td${i}${j}"></td>`;
            // table += `<td class="border-2 border-purple-500 px-4 py-2 cell" id="td${i}${j}">${i}${j}</td>`;
        }
        table += `</tr>`;
    }
    document.getElementById('gameBoard').innerHTML = table;
    return 0;
}

// Enter value in a gameBoard table cell
const enterValue = (element) => {
    if (cellValue < (NoOfCells + 1)) {
        if (document.getElementById(element).innerText !== "") {
            return;
        }
        document.getElementById(element).innerText = cellValue;
        cellValue++;
    }
}


// Remove value in a gameBoard table cell
const removeValue = (element) => {
    if (cellValue > NoOfCells && startPlay.innerText == startPlaying) {
        if (document.getElementById(element).innerText == "") {
            return;
        }
        document.getElementById(element).innerText = "";
        isWin();
    }
}

// Getting Winner from winList and incrementing score by 1 and background of that cells in isWinning if user satisfies the isWinning(bool) to true
const isWin = () => {
    score = 0;
    for (let i = 0; i < winList.length; i++) {
        let isWinning = true;
        for (let j = 0; j < gridSize; j++) {
            if (document.getElementById(`td${winList[i][j]}`).innerText != "") {
                isWinning = false;
            }
        }
        if (isWinning == true) {
            score++;
            for (let j = 0; j < gridSize; j++) {
                document.getElementById(`td${winList[i][j]}`).classList.add(`bg`);
            }
        }
    }
    scoreComponent.innerText = `Score: ${score}`;
    return 0;
}

// Adding EventListener
const enterValue_event = async () => {
    // Adding Event Listener to of cells of gameBoard called enterValue(element)
    Array.from(document.querySelectorAll('.cell')).forEach(element => {
        element.addEventListener('click', (e) => {
            enterValue(e.target.id);
        });
    });
}

// Adding EventListener
const removeValue_event = async () => {
    // Adding Event Listener to of cells of gameBoard called removeValue(element)
    Array.from(document.querySelectorAll('.cell')).forEach(element => {
        element.addEventListener('click', (e) => {
            removeValue(e.target.id);
        });
    });
}
// Reset Game that it looks like reloaded but do it without reloading website
const resetGame = () => {
    Array.from(document.querySelectorAll('.cell')).forEach(element => {
        element.innerText = "";
        element.classList.remove(`bg`);
    });
    cellValue = 1;
    startPlay.innerText = letsplay;
    startPlay.style.display = "block";
    scoreComponent.style.display = "none";
    score = 0;
    scoreComponent.innerText = `Score: ${score}`;
}

// Set Grid of Game that it looks like reloaded but do it without reloading website
const setGrid = async () => {
    winList = [];
    cellValue = 1;
    scoreComponent.style.display = "none";
    startPlay.innerText = letsplay;
    startPlay.style.display = 'block';
    score = 0;
    scoreComponent.innerText = `Score: ${score}`;
    document.getElementById('gameBoard').innerHTML = "";
    a = await getGridSize();
    b = await winningListFunc();
    NoOfCells = gridSize * gridSize;
    c = await gameBoard();
    d = await enterValue_event();
    e = await removeValue_event();
}

myGameResetter.addEventListener('click', () => {
    if (resetComponent.style.display == 'none') {
        resetComponent.style.display = 'flex';
    } else {
        resetComponent.style.display = 'none';
    }
});
gridCloser.addEventListener('click', () => {
    if (gridComponent.style.display == 'none') {
        gridComponent.style.display = 'flex';
    } else {
        gridComponent.style.display = 'none';
    }
});

resetCloser.addEventListener('click', () => {
    resetComponent.style.display = 'none';
});

gridSizeSetterbtn.addEventListener('click', async (e) => {
    e.preventDefault();
    setGrid();
    gridCloser.style.display="flex";
});


// Reset Game that it looks like reloaded but do it without reloading website
gamestarter.addEventListener('click', () => {
    resetGame();
    resetComponent.style.display = 'none';
});

// Reset Grid of Game that it looks like reloaded but do it without reloading website
gridresetter.addEventListener('click', async () => {
    resetComponent.style.display="none";
    gridComponent.style.display="flex";
    document.getElementById(`gridSizeInput`).select();
});

// Giving Input to button and satisfying the condition that you eligible to start game if not doesn't do anything
startPlay.addEventListener('click', () => {
    if (cellValue > NoOfCells) {
        startPlay.innerText = startPlaying;
        startPlay.style.display = "none";
        scoreComponent.style.display = "block";
    }
});

