class Enemy {
    constructor()
    {
        this.x = 0;
        this.y = 0;

        this.w = 40;
        this.h = 40;

        this.currentPos = 0;

        this.health = 5 + game.roundsAlive;

        this.ctx = document.getElementById("movementLayer").getContext("2d");
        this.dead = false;

        this.finishDamage = 3;

        this.image = new Image();
        this.image.src = "images/enemys/enemy_1.png";

        this.burnImage = new Image(),
        this.burnImage.src = "images/enemys/burning.png";

        this.updatePos = setInterval(this.updatePos.bind(this), 500);
    }

    spawn() {
        this.x = game.pathTiles[this.currentPos].x + (game.pathTiles[this.currentPos].w/2 - this.w/2);
        this.y = game.pathTiles[this.currentPos].y + (game.pathTiles[this.currentPos].h/2 - this.h/2);

        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        game.pathTiles[this.currentPos].onTile.push(this);
    }

    finish() {
        clearInterval(this.moveInterval);

        this.dead = true;

        if(game.pathTiles[this.currentPos-1] != undefined) {
            game.pathTiles[this.currentPos-1].onTile.splice(game.pathTiles[this.currentPos-1].onTile.indexOf(this), 1);
        }

        game.enemys.splice(game.enemys.indexOf(this),1);
        game.pathTiles[this.currentPos-1].draw(); 

        game.health -= this.finishDamage;
        game.enemysKilled++;

    }

    damage(dmg) {
        this.health -= dmg;

        if(this.health > 0){
            return; 
        }

        this.dead = true;
        
        clearInterval(this.updatePos);
        
        if(game.pathTiles[this.currentPos] != undefined) {
            game.pathTiles[this.currentPos].onTile.splice(game.pathTiles[this.currentPos].onTile.indexOf(this), 1);
        }
        
        game.enemysKilled++;
        game.coins += 25;
        game.enemys.splice(game.enemys.indexOf(this),1);
    }

    updatePos() {
        this.currentPos++;
    }

    move() {
        if(game.pathTiles[this.currentPos] == undefined || this.dead)
        {
            this.finish();
            return;
        }

        var b = this.currentPos == 0 ? 0 : this.currentPos - 1;

        game.pathTiles[this.currentPos].onTile.push(this);

        this.x += ((game.pathTiles[this.currentPos].x - this.x) + (game.pathTiles[this.currentPos].w/2 - this.w/2)) / 5;
        this.y += ((game.pathTiles[this.currentPos].y - this.y) + (game.pathTiles[this.currentPos].h/2 - this.h/2)) / 5;


        this.ctx.beginPath();
        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        if(this.health <= 2)
        {
            this.ctx.drawImage(this.burnImage, this.x, this.y, 45,45);
        }
        this.ctx.closePath();

        game.pathTiles[b].onTile.splice(game.pathTiles[b].onTile.indexOf(this), 1);

        if(game.pathTiles[b].onTile == undefined || game.pathTiles[b].onTile.length == 0)
        {
            game.pathTiles[b].draw(); 
        }
    }
}

class HarderEnemy extends Enemy {
    constructor() {
        super();
        this.health = 20 + game.roundsAlive;
        this.image.src = "images/enemys/enemy_2.png";
    }
}