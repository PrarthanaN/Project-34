class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var rope_options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y: this.offsetY},
            //stiffiness: 0.05,
            //length: 350
        }
        this.rope = Constraint.create(rope_options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        stroke("white");
        var pointC = pointB.x + this.offsetX;
        var pointD = pointB.y + this.offsetY;
        //fill("white");
        line(pointA.x, pointA.y, pointC, pointD);
    }
}