class Stone{
constructor(x,y,w,h){
let options={restitution:0.8}
this.body=Bodies.rectangle(x,y,w,h,options)
this.w=w
this.h=h
World.add(world,this.body)



}
show(){
push()
translate(this.body.position.x,this.body.position.y)
strokeWeight(1)
fill("white")
ellipseMode(CENTER)
ellipse(0,0,this.w,this.h)
noStroke()
pop()

}
}