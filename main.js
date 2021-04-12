var mouseEvent;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color;
var radius;
var lineWidth;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent = "mouseDown";
    color = document.getElementById("color").value;
    radius = document.getElementById("radiusHTML").value;
    lineWidth = document.getElementById("lineWidthHTML").value;
    console.log("mousedown");
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    console.log("mouseup");
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    console.log("mouseleave");
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_mouse_locationX = e.clientX - canvas.offsetLeft;
    var current_mouse_locationY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
    console.log(current_mouse_locationX);
    console.log(current_mouse_locationY);
    ctx.beginPath();
    ctx.lineWidth = lineWidth; 
    ctx.strokeStyle = color;
    ctx.arc(current_mouse_locationX, current_mouse_locationY, radius, 0, 2 * Math.PI); 
    ctx.stroke();
    }
}