class paper {

    constructor(x,y)
    {
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x, y,options);
 		World.add(world, this.body);
    }
    display()
    {
        var paperPos=this.body.position;		

        push()
        translate(paperPos.x, paperPos.y);
        rectMode(CENTER)
        rect(this.x,this.y);
        pop()
    }
    

	
}