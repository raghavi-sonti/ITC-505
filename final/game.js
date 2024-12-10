const rows = 6; 
const cols = 6;
const gameBoard = document.getElementById("game-board");

let board = [];

function createBoard() {
    board = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.addEventListener("click", () => handleCellClick(i, j));
            row.push(cell);
            gameBoard.appendChild(cell);
        }
        board.push(row);
    }
}

function toggleCell(row, col) {
    const toggle = (r, c) => {
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
            board[r][c].classList.toggle("is-off");
        }
    };

    toggle(row, col);       
    toggle(row - 1, col);    
    toggle(row + 1, col);     
    toggle(row, col - 1);     
    toggle(row, col + 1);   
}

function handleCellClick(row, col) {
    toggleCell(row, col);
    if (checkWin()) {
        setTimeout(() => alert("Congratulations! You turned off all the lights!"), 100);
    }
}

function checkWin() {
    return board.flat().every(cell => cell.classList.contains("is-off"));
}

function randomizeBoard() {
    for (let i = 0; i < rows * cols; i++) {
        const randomRow = Math.floor(Math.random() * rows);
        const randomCol = Math.floor(Math.random() * cols);
        toggleCell(randomRow, randomCol);
    }
}

function initGame() {
    createBoard();
    randomizeBoard();
}

initGame();

