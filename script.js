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
    const modify2 = (x, y) =>{
        turn++;
        if(board[x][y] != 0){
            turn--;
            return "true";
        }
        board[x][y] = '2';
        return "false";
    }

    const getBoard = (x,y) => board[x][y];

    const printBoard = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                console.log(board[i][j] + `,`);
        }
    }
    };

    return {board, getTurn, modify1, modify2, getBoard, printBoard};

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
        checkStopGame(board);
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
    }
};

function checkStopGame(board){
    if(board.getBoard(0,0) == '1' && board.getBoard(0,1) == '1' && board.getBoard(0,2) == '1'){
        console.log("player1 won");
    }
    if(board.getBoard(1,0) == '1' && board.getBoard(1,1) == '1' && board.getBoard(1,2) == '1'){
        console.log("player1 won");
    }
    if(board.getBoard(2,0) == '1' && board.getBoard(2,1) == '1' && board.getBoard(2,2) == '1'){
        console.log("player1 won");
    }
    if(board.getBoard(0,0) == '1' && board.getBoard(1,0) == '1' && board.getBoard(2,0) == '1'){
        console.log("player1 won");
    }
    if(board.getBoard(0,1) == '1' && board.getBoard(1,1) == '1' && board.getBoard(2,1) == '1'){
        console.log("player1 won");
    }
    if(board.getBoard(0,2) == '1' && board.getBoard(1,2) == '1' && board.getBoard(2,2) == '1'){
        console.log("player1 won");
    }
    if(board.getBoard(0,0) == '1' && board.getBoard(1,1) == '1' && board.getBoard(2,2) == '1'){
        console.log("player1 won");
    }
    if(board.getBoard(0,2) == '1' && board.getBoard(1,1) == '1' && board.getBoard(2,0) == '1'){
        console.log("player1 won");
    }
    if(board.getBoard(0,0) == '2' && board.getBoard(0,1) == '2' && board.getBoard(0,2) == '2'){
        console.log("player2 won");
    }
    if(board.getBoard(1,0) == '2' && board.getBoard(1,1) == '2' && board.getBoard(1,2) == '2'){
        console.log("player2 won");
    }
    if(board.getBoard(2,0) == '2' && board.getBoard(2,1) == '2' && board.getBoard(2,2) == '2'){
        console.log("player2 won");
    }
    if(board.getBoard(0,0) == '2' && board.getBoard(1,0) == '2' && board.getBoard(2,0) == '2'){
        console.log("player2 won");
    }
    if(board.getBoard(0,1) == '2' && board.getBoard(1,1) == '2' && board.getBoard(2,1) == '2'){
        console.log("player2 won");
    }
    if(board.getBoard(0,2) == '2' && board.getBoard(1,2) == '2' && board.getBoard(2,2) == '2'){
        console.log("player2 won");
    }
    if(board.getBoard(0,0) == '2' && board.getBoard(1,1) == '2' && board.getBoard(2,2) == '2'){
        console.log("player2 won");
    }
    if(board.getBoard(0,2) == '2' && board.getBoard(1,1) == '2' && board.getBoard(2,0) == '2'){
        console.log("player2 won");
    }
}

const player1 = Player("one", "X");
const player2 = Player("two", "O");
const newGame = gameControl(player1, player2);
newGame.playRound(1,1);