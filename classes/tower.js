class Tower {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 40;
        this.ctx = $("#towerLayer")[0].getContext("2d");

        this.costs = 75;

        this.image = new Image();
        this.reloadImage = new Image();
        
        this.image.src = "images/tower/rocket_1.png";
        this.image.width = 42;
        this.image.height = 42;

        this.fullImage = this.image;

        this.reloadImage.src = "images/tower/rocket_1_empty.png";
        
        this.radius = 100;

        this.inArea = [];

        this.destination = [];

        this.shootInterval = undefined;
    }

    inRadius() {
        for(let enemy in game.enemys) {
            if(!((this.y + this.h + this.radius) < game.enemys[enemy].y || this.y - this.radius > (game.enemys[enemy].y + game.enemys[enemy].h) ||
                 (this.x + this.w + this.radius) < game.enemys[enemy].x || this.x - this.radius > (game.enemys[enemy].x + game.enemys[enemy].w)))
            {
                if(!this.inArea.includes(game.enemys[enemy]))
                {
                    this.inArea.push(game.enemys[enemy]);
                }
            }
            else {
                if(this.inArea.includes(game.enemys[enemy]))
                {
                    this.inArea.splice(this.inArea.indexOf(game.enemys[enemy]), 1);
                }
            }
        }

        for(let enemy in this.inArea)
        {
            if(this.inArea[enemy].dead) {
                this.inArea.splice(this.inArea.indexOf(this.inArea[enemy]), 1);
            }
        }
    }

    spawn() {
        if(game.coins < this.costs)
        {
            alert("Du hast zu wenig Geld!");
            return;
        }

        this.ctx.beginPath();
        this.ctx.drawImage(this.image, this.x, this.y, 42, 42);
        this.ctx.closePath();

        game.coins -= this.costs;

        this.shootInterval = setInterval(this.shoot.bind(this), 2500);
        game.towers.push(this);
    }

    updateDest() {
        this.inRadius();

        if(this.inArea[0] != undefined) {
            this.destination = [this.inArea[0].x, this.inArea[0].y];
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

    shoot() {
        if(this.inArea[0] == undefined || this.inArea[0].dead) {
            return;
        }

        let bullet = new FatRocket(this.x, this.y, this.inArea[0], 1);
        game.projectiles.push(bullet);

        this.image = this.reloadImage;
        setTimeout(function() {
            this.image = this.fullImage;
        }.bind(this), 1500);
    }
}

class DoubleTower extends Tower {
    constructor(x,y) {
        super(x,y);
        this.radius = 150;
        this.image.src = "images/tower/rocket_2.png";
        this.reloadImage.src = "images/tower/rocket_2_empty.png";
        this.shots = 0;
        this.costs = 300;
    }

    spawn() {
        if(game.coins < this.costs)
        {
            alert("Du hast zu wenig Geld!");
            return;
        }
        super.spawn();
        this.shootInterval = setInterval(this.shoot.bind(this), 1000);
    }

    shoot() {
        if(this.inArea[0] == undefined || this.inArea[0].dead) {
            return;
        }
        
        let bullet = new SmallRocket(this.x, this.y, this.inArea[0], 1);
        game.projectiles.push(bullet);
        this.shots++;

        if(this.shots >= 2) {
            this.image = this.reloadImage;
            setTimeout(function() {
                this.image = this.fullImage;
                this.shots = 0;
            }.bind(this), 600);
        }
    }
}

class MachineTower extends Tower {
    constructor(x,y) {
        super(x,y);
        this.radius = 65;
        this.image.src = "images/tower/machine_gun_1.png";
        this.costs = 200;
    }

    spawn() {
        if(game.coins < this.costs)
        {
            alert("Du hast zu wenig Geld!");
            return;
        }
        super.spawn();
        this.shootInterval = setInterval(this.shoot.bind(this), 500);
    }

    shoot() {
        if(this.inArea[0] == undefined || this.inArea[0].dead) {
            return;
        }
        
        let bullet = new Bullet(this.x, this.y, this.inArea[0], 1);
        game.projectiles.push(bullet);
    }
}

class DoubleMachineTower extends Tower {
    constructor(x,y) {
        super(x,y);
        this.radius = 85;
        this.costs = 500;
        this.image.src = "images/tower/machine_gun_2.png";
    }

    spawn() {
        if(game.coins < this.costs)
        {
            alert("Du hast zu wenig Geld!");
            return;
        }
        super.spawn();
        this.shootInterval = setInterval(this.shoot.bind(this), 250);
    }

    shoot() {
        if(this.inArea[0] == undefined || this.inArea[0].dead) {
            return;
        }
        
        let bullet = new Bullet(this.x, this.y, this.inArea[0], 1);
        game.projectiles.push(bullet);
    }
}