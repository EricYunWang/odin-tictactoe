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
    return {board, getTurn, modify1, modify2, getBoard, getBoardPosition, printBoard};
})();

const Player = (name, marker) => {
    return {name, marker};
};

function gameControl(player1, player2){
    const board = gameBoard;
    console.log(board);

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
        console.log(board);
        let turn = board.getTurn();
        console.log(turn);
        if(turn >= 9){
            console.log("Tie");
        }

        if(currentPlayer == player1){
            console.log("Player1's turn");
        }
        else {
            console.log("Player2's turn");
        }
    }

    return {
        playRound,
        getCurrentPlayer,
        getBoard: board.getBoard,
        getBoardPosition: board.getBoardPosition
    }
};

function checkStopGame(board) {
    let stop = "true";
    if(board.getBoardPosition(0,0) == '1' && board.getBoardPosition(0,1) == '1' && board.getBoardPosition(0,2) == '1'){
        console.log("player1 won");
        return stop;
    }
    if(board.getBoardPosition(1,0) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(1,2) == '1'){
        console.log("player1 won");
        return stop;
    }
    if(board.getBoardPosition(2,0) == '1' && board.getBoardPosition(2,1) == '1' && board.getBoardPosition(2,2) == '1'){
        console.log("player1 won");
        return stop;
    }
    if(board.getBoardPosition(0,0) == '1' && board.getBoardPosition(1,0) == '1' && board.getBoardPosition(2,0) == '1'){
        console.log("player1 won");
        return stop;
    }
    if(board.getBoardPosition(0,1) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(2,1) == '1'){
        console.log("player1 won");
        return stop;
    }
    if(board.getBoardPosition(0,2) == '1' && board.getBoardPosition(1,2) == '1' && board.getBoardPosition(2,2) == '1'){
        console.log("player1 won");
        return stop;
    }
    if(board.getBoardPosition(0,0) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(2,2) == '1'){
        console.log("player1 won");
        return stop;
    }
    if(board.getBoardPosition(0,2) == '1' && board.getBoardPosition(1,1) == '1' && board.getBoardPosition(2,0) == '1'){
        console.log("player1 won");
        return stop;
    }
    if(board.getBoardPosition(0,0) == '2' && board.getBoardPosition(0,1) == '2' && board.getBoardPosition(0,2) == '2'){
        console.log("player2 won");
        return stop;
    }
    if(board.getBoardPosition(1,0) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(1,2) == '2'){
        console.log("player2 won");
        return stop;
    }
    if(board.getBoardPosition(2,0) == '2' && board.getBoardPosition(2,1) == '2' && board.getBoardPosition(2,2) == '2'){
        console.log("player2 won");
        return stop;
    }
    if(board.getBoardPosition(0,0) == '2' && board.getBoardPosition(1,0) == '2' && board.getBoardPosition(2,0) == '2'){
        console.log("player2 won");
        return stop;
    }
    if(board.getBoardPosition(0,1) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(2,1) == '2'){
        console.log("player2 won");
        return stop;
    }
    if(board.getBoardPosition(0,2) == '2' && board.getBoardPosition(1,2) == '2' && board.getBoardPosition(2,2) == '2'){
        console.log("player2 won");
        return stop;
    }
    if(board.getBoardPosition(0,0) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(2,2) == '2'){
        console.log("player2 won");
        return stop;
    }
    if(board.getBoardPosition(0,2) == '2' && board.getBoardPosition(1,1) == '2' && board.getBoardPosition(2,0) == '2'){
        console.log("player2 won");
        return stop;
    }
    else {
        stop = "false";
        return stop;
    }
}

function displayControl(){
    const player1 = Player("one", "X");
    const player2 = Player("two", "O");
    const newGame = gameControl(player1, player2);
    const boardDiv = document.querySelector(".board");

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
    boardDiv.addEventListener("click", clickHandler);
    update();
}

displayControl();