class Ball {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = Math.floor(Math.random() * 255);  
        this.g =Math.floor(Math.random() * 255);  
        this.b = Math.floor(Math.random() * 255);  
        this.radius = Math.floor(Math.random() * 10 + 15);
        this.fallActive = false;
    }
    
    display() {
        noStroke();
        fill(this.r, this.g, this.b);
        circle(this.x, this.y, this.radius);
    }

    move() {
        if (this.fallActive === false ) {
            this.y++;
        }
    }

    //Las bolas vuelven a su posicion inical 
    ballReturn() {
        this.x = random(0, 400);
        this.y = random(20, 50);
        this.fallActive = true;
    }

    //Desactiva caida
    fallDisactive() {
        this.fallActive = false;
    }


        //Getters and Setters


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