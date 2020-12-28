class Paper {
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x,y,0,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER)
        translate(pos.x,pos.y);
        fill("white")
        ellipse(100,710,this.width,this.height);
        pop();
    }
    
}
