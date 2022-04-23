class Ground{
    constructor(x,y,w,h){
        this.width = w
        this.height = h
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
        World.add(world,this.body)
    }
    show(){
        fill ("black")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.postion.y,this.width,this.height)
    }
}