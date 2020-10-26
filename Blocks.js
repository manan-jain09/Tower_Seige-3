class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("block.png");
    this.Visiblity = 255;
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -105 ) {
        score++;
    }
  }
 display(){
  if(this.body.speed < 6){
    super.display();
  }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 10 ;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
    }
  }
}
