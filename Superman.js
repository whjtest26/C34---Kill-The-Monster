class Superman{

    constructor(x,y){

        var options = {

            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.image = loadImage("superman.png");

        World.add(world,this.body);

    }

    display(){

            var pos=this.body.position;		

        //    pos.x = mouseX;
        //    pos.y = mouseY;

			push();
			translate(pos.x, pos.y);
			
            image(this.image,0,0,300,200);
            
            pop();
    }





}