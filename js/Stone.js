class Stone{
    constructor(x, y, w, h){
        var opt ={
            restitution:0.8
            
        }
        this.body = Bodies.rectangle(x, y, w, h, opt);
        this.w =w;
        this.h =h;
        this.color = color;
        World.add(world, this.body);
       // stones.push(this.body);
    }show(){
        const pos = this.body.position;
        //const angle = this.body.angle; 
        push();
        translate(pos.x, pos.y);
        strokeWeight(2);
        fill(255);

        //rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.w, this.h);
        noStroke();
        pop();
    }
}