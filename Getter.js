class Getter{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.gottenBalls = [];
        this.xDist;
        this.dist = 25;
    }


    display() {
         noStroke();
        fill(220,70);
        circle(this.x, this.y, this.radius);
        circle(this.x, this.y, this.radius+10);
        circle(this.x, this.y, this.radius+20);
        
        for (let i = 0; i < this.gottenBalls.length; i++) {
            console.log("entrando")
            this.xDist = this.x + (this.dist + 10) + (i * this.dist);
            this.gottenBalls[i].setX(this.xDist);
            this.gottenBalls[i].setY(this.y);
            this.gottenBalls[i].display();
        }
    }
    
    move(x) {
        this.x = x;
    }

    validateClick(x, y) {
        if (dist(x, y, this.x, this.y) < this.radius) {
            return true;
        } else {
            return false;
        }
    }

    //Empuja la referencia que tiene hacie el arreglo "Gotten Balls"
    colect(ref) {
        this.gottenBalls.push(ref);
        console.log(this.gottenBalls.length)
    }
    
    //El arreglo empieza desde cero otra vez, por lo cual, se reincia.
    restart() {
        this.gottenBalls = []; 
    }
    

            //Getters and Setters
    
    getballsLenght() {
        return this.gottenBalls.length;
    }
    
    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
    }

    getSize() {
        return this.radius;
    }

}