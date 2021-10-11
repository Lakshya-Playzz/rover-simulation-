canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
var rover_x=110;
var rover_y=110;
var rover_width=100;
var rover_height=100;
var image=["mars.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
var image_number=Math.floor(Math.random()*(3))
var background_image=image[image_number];
var rover_image="rover.png";

function add(){
    background_tag=new Image()
    background_tag.onload=uplaodbackground;
    background_tag.src=background_image;
    rover_tag=new Image()
    rover_tag.onload=uplaodrover;
    rover_tag.src=rover_image;
}
function uplaodbackground(){
    ctx.drawImage(background_tag,0,0,canvas.width,canvas.height);
}
function uplaodrover(){
    ctx.drawImage(rover_tag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown)

function mykeydown(e){
    var keycode=e.keyCode;
    console.log(keycode);
    if(keycode=="38"){
        up()
    }
    if(keycode=="40"){
       down()
    }
    if(keycode=="37"){
        left()
    }
    if(keycode=="39"){
       right()
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y - 10;
        uplaodbackground()
        uplaodrover()
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y + 10;
        uplaodbackground()
        uplaodrover()
       
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x - 10
        uplaodbackground()
        uplaodrover()
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x + 10
        uplaodbackground()
        uplaodrover()
    }
}



