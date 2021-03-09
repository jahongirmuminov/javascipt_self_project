
document.addEventListener("DOMContentLoaded", ()=>{
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var canvas = document.getElementById('canv')
    var ctx = canvas.getContext('2d')
    ctx.fillStyle = "black";
    document.getElementById("submit").addEventListener("click",()=>{
        console.log(num1.value+ " "+num2.value);
        ctx.fillRect(num1.value,num2.value,20,20)
        num1.value =""
        num2.value =""
    });
    canvas.addEventListener("mousedown",(e)=>{
        ctx.fillStyle = document.getElementById("color").value;
        var cRect=canvas.getBoundingClientRect()
        var x = Math.round(e.clientX-cRect.left)
        var y = Math.round(e.clientY-cRect.top)
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillRect(x,y,20,20)
        console.log(x,y)
    })
    ctx.stroke()

    // divs = document.querySelectorAll(".col-md-3");
    // divs.forEach(element =>{
    //     element.addEventListener('click', ()=>{
    //         console.log(element.innerHTML);
    //     })
    // })

});