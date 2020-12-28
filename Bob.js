class Bob{
    constructor(x, y, radius){
        var bob_options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.17
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, bob_options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        //noStroke();
        fill("black");
        strokeWeight(4);
        stroke("white");
        ellipse(0, 0,  this.radius, this.radius);
        pop();

    }
}
