class Projectile {
    constructor(x, y, enemy, damage) {
        this.ctx = $("#bulletLayer")[0].getContext("2d");

        this.enemy = enemy;
        this.destination = [this.enemy.x, this.enemy.y];
        this.noDestination = false;
        
        this.damage = damage;

        this.w = 25;
        this.h = 25;

        this.x = x;
        this.y = y - this.h + 50;

        this.old = [];

        this.speed = 3.25;

        this.image = new Image();
        this.image.src = "images/tower/fat_rocket.png";
    }

    collide() {
        this.ctx.clearRect(this.x - 1, this.y - 1, this.width + 1, this.height + 1);

        if(this.enemy == undefined || this.enemy.dead)
        {
            return;
        }

        game.projectiles.splice(game.projectiles.indexOf(this),1);

        this.enemy.damage(this.damage);
        
        $("#enemysLeft").html("Enemys left: " + (game.enemysRound - game.enemysKilled));
        $("#enemysKilled").html("Enemys killed: " + game.enemysKilled);
    }

    gravity() {

        if(this.enemy != undefined)
        {
            if(!(this.y + 10 < this.destination[1] || this.y > (this.destination[1] + 44) ||
               this.x + 10 < this.destination[0] || this.x > (this.destination[0] + 44)))
            {
                clearInterval(this.bulletSpeed);
                this.collide(); 
            }
        }

        
        this.ctx.clearRect(this.x - 1, this.y - 1, this.width + 10, this.height + 10);
        this.old = [this.x, this.y];
        
        this.x -= Math.round((this.x - this.destination[0]) / this.speed);
        this.y -= Math.round((this.y - this.destination[1]) / this.speed);
        
        if(this.x == this.old[0]) {
            game.projectiles.splice(game.projectiles.indexOf(this),1);
            return;
        }
        
        let deltaX = this.destination[0] - this.x;
        let deltaY = this.destination[1] - this.y;
        let rad = Math.atan2(deltaY, deltaX);
        
        this.ctx.save();
        this.ctx.translate(this.x + 42/2, this.y + 42/2);
        this.ctx.rotate(rad);
        this.ctx.drawImage(this.image, -42/2, -42/2, 42, 42);
        this.ctx.restore();
    }
}

class SmallRocket extends Projectile {
    constructor(x,y,enemy,damage) {
        super(x, y, enemy, 2);

        this.image.src = "images/tower/small_rocket.png";
    }
}

class FatRocket extends Projectile {
    constructor(x,y,enemy,damage) {
        super(x, y, enemy, 3);

        this.image.src = "images/tower/fat_rocket.png";
    }
}

class Bullet extends Projectile {
    constructor(x,y,enemy,damage) {
        super(x, y, enemy, 1);

        this.image.src = "images/tower/bullet.png";
    }
}