class Box {
    constructor(x,y,width,height)
    {
        var bounce={
            restitution:1
          }
       this.body= Bodies.rectangle(x,y,width,height,bounce);

          this.width=width;
          this.height=height;
       World.add(world,this.body);
      
    }
heigh
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER)
        fill("brown"); 
        rect(pos.x,pos.y,this.width,this.height);
    }

} 