class Hammer {

    constructor(x,y){

        var options={
            'restitution':2,
            'density':1.0,
            'friction':0.5
        }

        this.body=Bodies.rectangle(x,y,20,130,options);
        this.width=20;
        this.height=130;


        World.add(world,this.body)


    }

     display(){
         var pos=this.body.position
         pos.x=mouseX;
         pos.y=mouseY;

         var angle=this.body.angle;

         push();
         translate(pos.x,pos.y)
         rotate(angle);
         rectMode(CENTER)
         strokeWeight(4)
         stroke("green");
         fill(255);
         rect(0,0,this.width,this.height);
         pop();
     }






}