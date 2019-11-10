class Game {
    constructor(gameCtx, title) {
        this.ctx = gameCtx;
        this.tiles = [];

        this.jsonPath = '[{"x":138,"y":6,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":138,"y":50,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":138,"y":94,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":182,"y":94,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":226,"y":94,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":270,"y":94,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":314,"y":94,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":314,"y":138,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":314,"y":182,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":358,"y":182,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":402,"y":182,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":402,"y":226,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":402,"y":270,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":358,"y":270,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":314,"y":270,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":270,"y":270,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":226,"y":270,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":226,"y":226,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":226,"y":182,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":182,"y":182,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":138,"y":182,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":138,"y":226,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":138,"y":270,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":138,"y":314,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":138,"y":358,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":182,"y":358,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":226,"y":358,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":270,"y":358,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":314,"y":358,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":358,"y":358,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":402,"y":358,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":402,"y":402,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":402,"y":446,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":402,"y":490,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":402,"y":534,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":358,"y":534,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":314,"y":534,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":270,"y":534,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":226,"y":534,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":182,"y":534,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":182,"y":578,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":182,"y":622,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":226,"y":622,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":270,"y":622,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":314,"y":622,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":358,"y":622,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":402,"y":622,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":446,"y":622,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":490,"y":622,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":534,"y":622,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":578,"y":622,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":578,"y":578,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":578,"y":534,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":578,"y":490,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":578,"y":446,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":578,"y":402,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":578,"y":358,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":578,"y":314,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":578,"y":270,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":578,"y":226,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}},{"x":622,"y":226,"w":40,"h":40,"ctx":{},"clicked":true,"isPath":true,"onTile":[],"image":{}}]';        
        this.pathTiles = [];

        this.projectiles = [];
        this.towers = [];

        this.selection = 1;
        
        this.health = 100;

        this.enemys = [];
        this.enemysLeft = 0;
        this.enemysRound = 15;
        this.enemysSpawned = 0;
        this.enemysKilled = 0;
        this.enemySpawner = undefined;

        this.roundsAlive = 0;

        this.coins = 300;

        this.creator = false;
        document.getElementById("enemysInRound").innerHTML = "Enemys this round: " + this.enemysRound;
        document.getElementById("enemysLeft").innerHTML = "Enemys left: " + (this.enemysRound - this.enemysKilled);
    }

    drawGrid() {
        this.tiles = [];
        ctx.clearRect(0,0, canvas.width, canvas.height);    
        for (let x = 6, i = 0; i < Math.floor(canvas.width/44); x+=44, i++) {
            for (let y = 6, j= 0; j < Math.floor(canvas.height/44); y+=44, j++) {
                let tile = new Tile(x, y, 40, 40, ctx);
                tile.draw();
                this.tiles.push(tile);
            }
        }
    }

    newRound() {
        this.enemysLeft = 0;
        this.enemysRound += 10;
        this.enemysSpawned = 0;
        this.enemysKilled = 0;

        this.enemySpawner = setInterval(this.spawnEnemys.bind(this), 1000); 
        this.roundsAlive++;

        console.log("round finished");
    }

    gameOver() {
        console.log("Game over, noob.");
        clearInterval(this.enemySpawner);
    }

    loadPathTiles() {
        let jsonString = document.getElementById("pathTilesText").value;
        let jsonArray = JSON.parse(this.jsonPath);
        for(let tile in jsonArray) {
            let t = new PathTile(jsonArray[tile].number, jsonArray[tile].x, jsonArray[tile].y, this.ctx);
            getTileFromPos(t.x,t.y).destroy();
            t.draw();
            this.pathTiles.push(t);
        }
        requestAnimationFrame(this.think.bind(this));
        this.enemySpawner = setInterval(this.spawnEnemys.bind(this), 1000); 
      //  this.spawnEnemys();
    }

    spawnEnemys() {
        if(this.enemysSpawned == this.enemysRound)
        {
            if(this.enemysKilled == this.enemysRound)
            {
                setTimeout(this.newRound.bind(this), 1000);
                clearInterval(this.enemySpawner);
            }
            return;
        }
        let enemy = null;
        if(this.roundsAlive >= 2) {
            switch(Math.floor(Math.random() * 2))
            {
                case 0:
                    enemy = new Enemy();
                    break;
                case 1:
                    enemy = new HarderEnemy();
                    break;
            }
        }
        else {
            enemy = new Enemy();
        }

        enemy.spawn();
        this.enemys.push(enemy);
        this.enemysSpawned++;
    }

    think() {

        if(!this.frameLastTime) {
            this.frameLastTime = performance.now();
            this.fps = 0;

            requestAnimationFrame(this.think.bind(this));
            return;
        }
        let delta = (performance.now() - this.frameLastTime) / 1000;
        this.frameLastTime = performance.now();
        this.fps = 1 / delta;

        if(this.health < 0) {
            this.gameOver();
            return;
        }

        document.getElementById("fpsCounter").innerHTML = "Current FPS: " + Math.round(this.fps);


        document.getElementById("health").innerHTML = "Health: " + this.health;
        document.getElementById("coins").innerHTML = "Money: " + this.coins;

        document.getElementById("movementLayer").getContext("2d").clearRect(0,0,670, 670);
        document.getElementById("bulletLayer").getContext("2d").clearRect(0,0,670, 670);
        document.getElementById("towerLayer").getContext("2d").clearRect(0,0,670, 670);

        for(let enemy in this.enemys) {
            this.enemys[enemy].move();
        }

        if(this.projectiles) {
            for(let bullet in this.projectiles){
                this.projectiles[bullet].gravity();
            }
        }

        if(this.towers)
        {
            for(let tower in this.towers) {
                this.towers[tower].updateDest();
            }
        }

        requestAnimationFrame(this.think.bind(this));
    }

    getPathTiles() {
        console.log(JSON.stringify(this.pathTiles));
    }
}