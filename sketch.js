const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var polygon, slingShot;
var backgroundImg;
var bg = "bg.png";
var score = 0;

function preload() {
    getBackgroundImage();
}


function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width / 2,height - 20,width,20);
    ground2 = new Ground(width / 2 + 400,height / 2 + 100,width / 3,20);

    block1 = new Block(width / 2 + 300,height / 2 - 50,70,70);
    block2 = new Block(width / 2 + 370,height / 2 - 50,70,70);
    block3 = new Block(width / 2 + 440,height / 2 - 50,70,70);
    block4 = new Block(width / 2 + 510,height / 2 - 50,70,70);
    block5 = new Block(width / 2 + 580,height / 2 - 50,70,70);

    block6 = new Block(width / 2 + 340,height / 2 - 100,70,70);
    block7 = new Block(width / 2 + 410,height / 2 - 100,70,70);
    block8 =  new Block(width / 2 + 480,height / 2 - 100,70,70);
    block9 = new Block(width / 2 + 550,height / 2 - 100,70,70);

    block10 = new Block(width / 2 + 380,height / 2 - 150,70,70);
    block11 = new Block(width / 2 + 450,height / 2 - 150,70,70);
    block12 = new Block(width / 2 + 520,height / 2 - 150,70,70);

    block13 = new Block(width / 2 + 440,height / 2 - 200,70,70);
    block14 = new Block(width / 2 + 510,height / 2 - 200,70,70);

    block15 = new Block(width / 2 + 480,height / 2 - 250,70,70);

    
    block16 = new Block(width / 2 - 50, height / 2 + 200,70,70);
    block17 = new Block(width / 2 - 50 + 70,height / 2 + 200,70,70);
    block18 = new Block(width / 2 - 50 - 70,height / 2 + 200,70,70);
    block19 = new Block(width / 2 - 50 + 140,height / 2 + 200,70,70);
    block20 = new Block(width / 2 - 50 - 140,height / 2 + 200,70,70);

    block21 = new Block(width / 2 - 155 ,height / 2 + 150,70,70);
    block22 = new Block(width / 2 - 90,height / 2 + 150,70,70);
    block23 =  new Block(width / 2 - 30,height / 2 + 150,70,70);
    block24 = new Block(width / 2 + 60,height / 2 + 150,70,70);

    block25 = new Block(width / 2 + 20,height / 2 + 100,70,70);
    block26 = new Block(width / 2 - 50,height / 2 + 100,70,70);
    block27 = new Block(width / 2 - 120,height / 2 +100,70,70);

    block28 = new Block(width / 2 - 95,height / 2 + 50,70,70);
    block29 = new Block(width / 2 - 25,height / 2 + 50,70,70);

    block30 = new Block(width / 2 - 60,height / 2 - 50,70,70);
    
    polygon = new Hexagon(150,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:150, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
        noStroke();
        textSize(35);
        fill("white");
        text("SCORE :" + score, width / 2, 50);

    Engine.update(engine);
    strokeWeight(4);
    polygon.display();

    ground.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();

    slingshot.display();    
}

function mouseDragged(){
    if (polygon.body.position.x < 220) {
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }       
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed() {
    if (keyCode === 32) {
        polygon = new Hexagon(150,50);
        slingshot.attach(polygon.body);
    }
}
async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    var daytime = responseJSON.datetime;
    var hour = daytime.slice(11, 13);
    if (hour >= 06 && hour <= 19) {
        bg = "bg.png";
    }else{
        bg = "bg2.png";
    }
    backgroundImg = loadImage(bg);    
    console.log(backgroundImg);
}