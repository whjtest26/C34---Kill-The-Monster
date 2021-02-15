class Monster{

    constructor(x,y){

        var options = {

            restitution : 0.3,
            frictionAir: 0,
            density : 1.2
        }
        
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.image = loadImage("monster.png");

        World.add(world,this.body);

    }

    display(){

            var pos=this.body.position;		

           // pos.x = mouseX;
           // pos.y = mouseY;

			push();
			translate(pos.x, pos.y);
			
            image(this.image,0,0,100,100);
            
            pop();
    }





}