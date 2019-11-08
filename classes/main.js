var game = null;

function createGame() {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    game = new Game(ctx);
    game.drawGrid();
}

function enableCreatorMode() {
    game.creator = true;
    alert("Creator mode enabled!");
}