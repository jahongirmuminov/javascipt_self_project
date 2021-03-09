var clock=document.getElementById("clock");
var color=document.getElementById("color");
function hexColor(){
    var time=new Data();
    var h=(time.getHours() % 12 ).toString();
    var m=time.getMinutes().toString();
    var s=time.getSeconds().toString();
  
    if(h.length<2) {
        h="0"+h;
    }
    else if(m.length<2) {
        m="0"+m;
    }
    else if(s.length<2) {
        s="0"+s;
    }
    var clockString=h+":"+m+":"+s;
    var colorSting="#"+h+m+s;

    clock.textContent=clockString
    color.textContent=colorSting;

   document.body.style.background=colorSting
}


hexColor()

// let canvas = document.getElementById("canvas"); 
// let ctx = canvas.getContext('2d');
// ctx.fillStyle = "black";
// var pos_x = 0, pos_y = 0;
// ctx.fillRect(pos_x, pos_y, 50, 50);

// canvas.addEventListener("mousedown",(e)=>{
//     ctx.fillStyle = document.getElementById("color").value;
//     var cRect=canvas.getBoundingClientRect()
//     var x = Math.round(e.clientX-cRect.left)
//     var y = Math.round(e.clientY-cRect.top)
//     if(pos_x<x)k_x=1;
//     else k_x=-1;
//     if(pos_y<y)k_y=1;
//     else k_y=-1;
//     setInterval(function () {
//         if(pos_x!=x){
//             pos_x+=  k_x;
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.fillRect(pos_x, pos_y, 50, 50);
//             ctx.stroke()
//         }
//         if(pos_y!=y){
//             pos_y+=k_y;
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.fillRect(pos_x, pos_y, 50, 50);
//             ctx.stroke()
//         }
//     }, 10);
// })
