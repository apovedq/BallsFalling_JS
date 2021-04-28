let balls = [];
let start = new Start(200, 347);
let reset = new Reset(328, 38);
let getter = new Getter(200, 414);
let get = false;


function setup() {
  createCanvas(400, 500);

  //Empujar nuevas bolas al arreglo balls[]
  for (let i = 0; i < 20; i++) {
    balls.push(new Ball(random(0, 400), random(20, 50)));
  }
  get = false;
}

function draw() {
  background(0);

  for (let i = 0; i < 20; i++) {

    if (balls[i] != null) {

      balls[i].display();

      //Cuando se ha hecho click
      if (start.getShow()) {
          balls[i].move()
          balls[i].fallDisactive();
      }
    }
  }

  start.display();
  reset.display();
  getter.display();
  validateEnterZone();
}



function validateEnterZone() {
  for (let i = 0; i < balls.length; i++) {

    //Cuando se toque el colector y la bolita entonces, el colector atrapa labolita y la hace parte de su arreglo
    if (dist(balls[i].getX(), balls[i].getY(), getter.getX(), getter.getY()) < getter.getSize()) {
      getter.colect(balls[i]);
     }
  }
}


function mousePressed() {

  //Si "start" desapetece, aparece "reset"
  start.validateClick(mouseX, mouseY);

  if (start.getShow()) {
    reset.setShow();
  }

  //Si se clickea en "Reset", aparece el boton de start y la "ball" se vuelve un array vacio.
  reset.validateClick(mouseX, mouseY);
  
  if (reset.validateClick(mouseX, mouseY)) {
    start.setShow();
    balls = []; //Bolitas vuelven a cero

      for (let i = 0; i < 20; i++) {
      balls.push(new Ball(random(0, 400), random(-20, -50)));
      } // Bolitas vuelven a redistribuirse para iniciar de nuevo.
    
    getter.restart(); //Getter vuelve a ser un arreglo vacio.
  }


  if (getter.validateClick(mouseX, mouseY)) {
    get = true;
  }

}


function mouseDragged() {
  
  //Si get es verdad, entonces la posicion del objeto "getter" será mouseX.
  if (get === true) {
    getter.move(mouseX);
  }

      // limitadores
  
  if (getter.getX() < 0) {
    getter.setX(0);
  }

  if (getter.getX() > 400) {
    getter.setX(400);
  }
}

function mouseReleased() {
  get = false;
}