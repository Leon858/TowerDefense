class Tile {
    constructor(x,y,w,h, gameCtx)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = gameCtx;

        this.clicked = false;

        this.isPath = false;
        this.isWater = false;

        this.onTile = [];

        this.image = new Image();
        this.image.src = "images/grass_tile_" + Math.floor(Math.random() * 3) + ".png";
        this.onClickEvent = this.onClick.bind(this);
        document.getElementById("bulletLayer").addEventListener("mousedown", this.onClickEvent);
    }

    onClick(e) {
        if(e.clientY < this.y || e.clientY > (this.y + this.h) || e.clientX < this.x || e.clientX > (this.x + this.w))
        {
            if(game.creator)
            {
                return;
            }
            return;
        }

        if(game.creator)
        {
            if(this.clicked) {
                game.pathTiles.splice(game.pathTiles.indexOf(this), 1);
            }
            else {
                game.pathTiles.push(this);
            }

            this.isPath = !this.isPath;
            this.clicked = !this.clicked;
            this.image.src = this.clicked ? "images/sand_tile.png" : "images/grass_tile_" + Math.floor(Math.random() * 3) + ".png";

            this.draw();
            return;
        }

        let tower = null;
        switch(game.selection) {
            case 1:
                tower = new Tower(this.x, this.y);
                break;
            case 2:
                tower = new DoubleTower(this.x, this.y);
                break;
            case 3:
                tower = new MachineTower(this.x, this.y);
                break;
            case 4:
                tower = new DoubleMachineTower(this.x, this.y);
                break;
        }

        tower.spawn();
    }

    destroy() {
        document.getElementById("bulletLayer").removeEventListener("mousedown", this.onClickEvent);
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, 40, 40);
    }
}

function getTileFromPos(x,y) {
    for(let tile in game.tiles) {
        if(game.tiles[tile].x == x && game.tiles[tile].y == y)
        {
            return game.tiles[tile];
        }
    }
}

function getPathTileFromPos(x,y) {
    for(let tile in game.pathTiles) {
        if(game.pathTiles[tile].x == x && game.pathTiles[tile].y == y)
        {
            return game.pathTiles[tile];
        }
    }
}

class PathTile {
    constructor(num, x, y, gameCtx)
    {
        this.number = num;
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 40;
        this.ctx = gameCtx;
        this.image = new Image()
        this.image.src = "images/sand_tile.png";
        this.onTile = [];
    }

    draw() {
        this.ctx.clearRect(this.x, this.y, 40, 40);
        this.ctx.drawImage(this.image, this.x, this.y, 40, 40);
    }
}