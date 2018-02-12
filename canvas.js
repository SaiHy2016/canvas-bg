function Canvas() {
    let ctx=null;
    const PI=Math.PI;
    //初始化函数
    this.init=(obj={
            el:document.getElementsByTagName('canvas')[0],
            width:document.body.clientWidth,
            height:document.body.clientHeight
        })=>{
        let w=obj.el.width=obj.width
        let h=obj.el.height=obj.height

        ctx = obj.el.getContext('2d')

        // 引擎
       (function loop() {
            let c=new Circle(Math.random()*w,Math.random()*h,10)
                c.draw()

            requestAnimationFrame(loop)
        })()
    }




    //圆圈构造函数
    function Circle(x,y,r) {
        this.x=~~x
        this.y=~~y
        this.r=~~r

    }
    function randomColor() {
        return  '#' +
            (function(color){
                return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
                && (color.length == 6) ?  color : arguments.callee(color)
            })('')
    }
    Circle.prototype.draw=function () {
        ctx.fillStyle = randomColor()
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r,0,2*PI)
        ctx.fill()
    }



}