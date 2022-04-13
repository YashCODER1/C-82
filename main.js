var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width=1;

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)

{
    current_position_of_mousex=e.clientX-canvas.offsetLeft;
    current_position_of_mousey=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("Last position of X and Y coordinates are -");
        console.log("X="+last_position_of_x+",Y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("Current position of X and Y coordinates are -");
        console.log("X="+current_position_of_mousex+",Y="+current_position_of_mousey);
        ctx.lineTo(current_position_of_mousex,current_position_of_mousey);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mousex;
    last_position_of_y=current_position_of_mousey;
}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}