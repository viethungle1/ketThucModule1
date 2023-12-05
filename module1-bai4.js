class Rectangle {
    constructor(x,y,width, height) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    render () {
        let c=document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.fillStyle="#000000"
        ctx.fillRect(this.x,this.y,this.width, this.height)
    }
}
let rectangle1=new Rectangle(10,10,200,100)
rectangle1.render()
