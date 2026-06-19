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

const Player = (name, marker) => {
    return {name, marker};
};

function gameControl(player1, player2){
    const board = gameBoard;

    let currentPlayer = player1;

    const switchCurrentPlayer = () =>{
        if(currentPlayer == player1){
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
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

    return {
        playRound,
        getCurrentPlayer,
        getBoard: board.getBoard,
        getBoardPosition: board.getBoardPosition,
        getTurn: board.getTurn,
        reset: board.reset
    }
};

function checkStopGame(board) {
    let stop = "true";
    const turnDiv = document.querySelector(".turn");

    if(board.getBoardPosition(0,0) == '1' && board.getBoardPosition(0,1) == '1' && board.getBoardPosition(0,2) == '1'){
        turnDiv.textContent = "Player 1 Won";
        return stop;
    }
    if(board.getBoardPosition(1,0) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(1,2) == '1'){
        turnDiv.textContent = "Player 1 Won";
        return stop;
    }
    if(board.getBoardPosition(2,0) == '1' && board.getBoardPosition(2,1) == '1' && board.getBoardPosition(2,2) == '1'){
        turnDiv.textContent = "Player 1 Won";
        return stop;
    }
    if(board.getBoardPosition(0,0) == '1' && board.getBoardPosition(1,0) == '1' && board.getBoardPosition(2,0) == '1'){
        turnDiv.textContent = "Player 1 Won";
        return stop;
    }
    if(board.getBoardPosition(0,1) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(2,1) == '1'){
        turnDiv.textContent = "Player 1 Won";
        return stop;
    }
    if(board.getBoardPosition(0,2) == '1' && board.getBoardPosition(1,2) == '1' && board.getBoardPosition(2,2) == '1'){
        turnDiv.textContent = "Player 1 Won";
        return stop;
    }
    if(board.getBoardPosition(0,0) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(2,2) == '1'){
        turnDiv.textContent = "Player 1 Won";
        return stop;
    }
    if(board.getBoardPosition(0,2) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(2,0) == '1'){
        turnDiv.textContent = "Player 1 Won";
        return stop;
    }
    if(board.getBoardPosition(0,0) == '2' && board.getBoardPosition(0,1) == '2' && board.getBoardPosition(0,2) == '2'){
        turnDiv.textContent = "Player 2 Won";
        return stop;
    }
    if(board.getBoardPosition(1,0) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(1,2) == '2'){
        turnDiv.textContent = "Player 2 Won";
        return stop;
    }
    if(board.getBoardPosition(2,0) == '2' && board.getBoardPosition(2,1) == '2' && board.getBoardPosition(2,2) == '2'){
        turnDiv.textContent = "Player 2 Won";
        return stop;
    }
    if(board.getBoardPosition(0,0) == '2' && board.getBoardPosition(1,0) == '2' && board.getBoardPosition(2,0) == '2'){
        turnDiv.textContent = "Player 2 Won";
        return stop;
    }
    if(board.getBoardPosition(0,1) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(2,1) == '2'){
        turnDiv.textContent = "Player 2 Won";
        return stop;
    }
    if(board.getBoardPosition(0,2) == '2' && board.getBoardPosition(1,2) == '2' && board.getBoardPosition(2,2) == '2'){
        turnDiv.textContent = "Player 2 Won";
        return stop;
    }
    if(board.getBoardPosition(0,0) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(2,2) == '2'){
        turnDiv.textContent = "Player 2 Won";
        return stop;
    }
    if(board.getBoardPosition(0,2) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(2,0) == '2'){
        turnDiv.textContent = "Player 2 Won";
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
    let player1 = Player("Player 1", "X");
    let player2 = Player("Player 2", "O");
    const newGame = gameControl(player1, player2);
    const boardDiv = document.querySelector(".board");
    const resetBut = document.querySelector(".reset");
    const turnDiv = document.querySelector(".turn");


    const update = () =>{
        let currentP = newGame.getCurrentPlayer();
        // if(currentP.name == 'one'){
        //     turnDiv.textContent = 'Current Turn: Player 1 X';
        // }
        // else{
        //     turnDiv.textContent = 'Current Turn: Player 2 O';
        // }
        turnDiv.textContent = `Current Turn: ${currentP.name}  ` + `${currentP.marker}`;
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
        newGame.reset();
        displayControl();
    }

    boardDiv.addEventListener("click", clickHandler);
    resetBut.addEventListener("click", resetButton);

    update();
}


displayControl();