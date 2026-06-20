const gameBoard = (() => {
    const rows = 3;
    const columns = 3;
    const board = [];
    let turn = 0;    

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push('0');
        }
    }

    const reset = () => {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push('0');
            }
        }
        turn = 0;
    }

    const getTurn = () => turn;

    const modify1 = (x, y) => {
        turn++;
        if(board[x][y] != 0){
            turn--;
            return "true";
        }
        board[x][y] = '1';
        return "false";
    }
    const modify2 = (x, y) => {
        turn++;
        if(board[x][y] != 0){
            turn--;
            return "true";
        }
        board[x][y] = '2';
        return "false";
    }

    const getBoard = () => board;

    const getBoardPosition = (x,y) => board[x][y];

    const printBoard = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                console.log(board[i][j] + `,`);
            }
        }
    };
    return {board, getTurn, modify1, modify2, getBoard, getBoardPosition, printBoard, reset};
})();

const Player = (newName, marker) => {
    let name = newName;

    return {
    get name() { return name; },
    set name(newName) { name = newName; },
    marker
  };
};

function gameControl(player1, player2){
    let board = gameBoard;
    const turnDiv = document.querySelector(".turn");

    let currentPlayer = player1;

    const switchCurrentPlayer = () =>{
        if(currentPlayer == player1){
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
        turnDiv.textContent = `Current Turn: ${currentPlayer.name}  ` + `${currentPlayer.marker}`;
    };
    
    const getCurrentPlayer = () => currentPlayer;

    const playRound = (x, y) =>{
        let occupied = "true";
        if(currentPlayer == player1){
            occupied = board.modify1(x,y);
        }
        else {
            occupied = board.modify2(x,y);
        }
        if(occupied == "false"){
            switchCurrentPlayer();
        }
    }
    const gameRestart = () => {
        board.reset();
        currentPlayer = player1;
        turnDiv.textContent = `Current Turn: ${currentPlayer.name}  ` + `${currentPlayer.marker}`;
    };

    return {
        playRound,
        getCurrentPlayer,
        getBoard: board.getBoard,
        getBoardPosition: board.getBoardPosition,
        getTurn: board.getTurn,
        reset: board.reset,
        gameRestart
        }
};

function checkStopGame(board) {
    let stop = "true";
    const turnDiv = document.querySelector(".turn");

    if(board.getBoardPosition(0,0) == '1' && board.getBoardPosition(0,1) == '1' && board.getBoardPosition(0,2) == '1'){
        turnDiv.textContent = `${player1.name} won`;
        return stop;
    }
    if(board.getBoardPosition(1,0) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(1,2) == '1'){
        turnDiv.textContent = `${player1.name} won`;
        return stop;
    }
    if(board.getBoardPosition(2,0) == '1' && board.getBoardPosition(2,1) == '1' && board.getBoardPosition(2,2) == '1'){
        turnDiv.textContent = `${player1.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,0) == '1' && board.getBoardPosition(1,0) == '1' && board.getBoardPosition(2,0) == '1'){
        turnDiv.textContent = `${player1.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,1) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(2,1) == '1'){
        turnDiv.textContent = `${player1.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,2) == '1' && board.getBoardPosition(1,2) == '1' && board.getBoardPosition(2,2) == '1'){
        turnDiv.textContent = `${player1.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,0) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(2,2) == '1'){
        turnDiv.textContent = `${player1.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,2) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(2,0) == '1'){
        turnDiv.textContent = `${player1.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,0) == '2' && board.getBoardPosition(0,1) == '2' && board.getBoardPosition(0,2) == '2'){
        turnDiv.textContent = `${player2.name} won`;
        return stop;
    }
    if(board.getBoardPosition(1,0) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(1,2) == '2'){
        turnDiv.textContent = `${player2.name} won`;
        return stop;
    }
    if(board.getBoardPosition(2,0) == '2' && board.getBoardPosition(2,1) == '2' && board.getBoardPosition(2,2) == '2'){
        turnDiv.textContent = `${player2.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,0) == '2' && board.getBoardPosition(1,0) == '2' && board.getBoardPosition(2,0) == '2'){
        turnDiv.textContent = `${player2.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,1) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(2,1) == '2'){
        turnDiv.textContent = `${player2.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,2) == '2' && board.getBoardPosition(1,2) == '2' && board.getBoardPosition(2,2) == '2'){
        turnDiv.textContent = `${player2.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,0) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(2,2) == '2'){
        turnDiv.textContent = `${player2.name} won`;
        return stop;
    }
    if(board.getBoardPosition(0,2) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(2,0) == '2'){
        turnDiv.textContent = `${player2.name} won`;
        return stop;
    }
    if(board.getTurn() == 9){
        turnDiv.textContent = "Tie Game";
        return stop;
    }
    else {
        stop = "false";
        return stop;
    }
}

function displayControl(){

    let newGame = gameControl(player1, player2);
    const boardDiv = document.querySelector(".board");
    const resetBut = document.querySelector(".reset");
    const form = document.getElementById("player-form");


    const update = () =>{
        boardDiv.textContent = "";
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                const button = document.createElement("button");
                button.dataset.x = i;
                button.dataset.y = j;
                button.classList.add("cell");
                if (newGame.getBoardPosition(i,j) == '1'){
                    button.textContent = 'X';
                }
                else if (newGame.getBoardPosition(i,j) == '2'){
                    button.textContent = 'O';
                }
                else {
                    button.textContent = ' ';
                }
                boardDiv.appendChild(button);
            }
        }
        let stopCon = checkStopGame(newGame);
        if(stopCon == 'true'){
            boardDiv.removeEventListener("click", clickHandler);
        }
    }

    function clickHandler(e){
        const selectedX = e.target.dataset.x;
        const selectedY = e.target.dataset.y;
        if(!selectedX || !selectedY){
            return;
        }
        newGame.playRound(selectedX, selectedY);
        update();
    }

    function resetButton(){
        resetBut.removeEventListener("click", resetButton);
        newGame.gameRestart();
        displayControl();
    }
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const formData = new FormData(form);
        const p1Name = formData.get("player1");
        const p2Name = formData.get("player2");
        player1.name = p1Name;
        player2.name = p2Name;
        resetButton();
    })

    boardDiv.addEventListener("click", clickHandler);
    resetBut.addEventListener("click", resetButton);

    update();
}
let player1 = Player("Player 1", "X");
let player2 = Player("Player 2", "O");
displayControl();
