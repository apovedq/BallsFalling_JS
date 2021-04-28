class Start {
    
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.show = false;
    }

    display() {
        if (this.show === false) {
            rectMode(CENTER);
            textAlign(CENTER);
            fill(255,255,0);
            rect(this.x, this.y, 150, 50, 10);
            fill(0);
            textSize(21)
            text("Start", 200, 352)
            textAlign(CORNER);
            rectMode(CORNER);
         }
    }

    //Desaparece despues de hacer click
    validateClick(x, y) {
       if (x > 125 && x < 276 && y > 324 && y < 324 + 46) {
            this.show = true; 
        }
    }


            //Setters

     getShow() {
        return this.show;
    }

    setShow() {
        this.show = false;
    }


}