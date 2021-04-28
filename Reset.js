class Reset {
    
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.show = false;
    }

    display() {
        
        if (this.show === true) {
            
            rectMode(CENTER);
            textAlign(CENTER);
            fill(255,0,0);
            rect(this.x, this.y, 90, 40, 10);
            fill(255);
            textSize(18);
            text("Reset", 330, 45);
            rectMode(CORNER);
            textAlign(CORNER);
         }

    }

    validateClick(x, y) {

        if (x > 283 && x < 373 && y > 22 && y < 55) {
            this.show = false;
            return true;
        }
        return false;
    }

            //Setter

    setShow() {
        this.show = true;
    }

}