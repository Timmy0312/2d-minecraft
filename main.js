var canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;

current_block_width=30;
current_block_height=30;

var player_object="";
var block_image_object="";

function playerupdate(){

    fabric.Image.fromURL("player.png" , function(Img){

player_object=Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);

player_object.set({

top:player_y,
left:player_x
});
canvas.add(player_object);

    });
}
function new_image(get_image){

    fabric.Image.fromURL(get_image , function(Img){

block_image_object=Img;

block_image_object.scaleToWidth(current_block_width);
block_image_object.scaleToHeight(current_block_height);

block_image_object.set({

top:player_y,
left:player_x
});
canvas.add(block_image_object);

    });
}
window.addEventListener("keydown" , my_keydown)

function my_keydown(e){

    keypressed=e.keyCode;
    console.log(keypressed);
if (e.shiftKey == true && keypressed == '80'){
console.log("p and shift pressed together");

current_block_width = current_block_width + 10;
current_block_height = current_block_height + 10;
document.getElementById("current_width").innerHTML=current_block_width;
document.getElementById("current_height").innerHTML=current_block_height;

}

if (e.shiftKey == true && keypressed == '77'){
    console.log("m and shift pressed together");
    
    current_block_width = current_block_width - 10;
    current_block_height = current_block_height - 10;
    document.getElementById("current_width").innerHTML=current_block_width;
    document.getElementById("current_height").innerHTML=current_block_height;
    
    }
if(keypressed == "38"){

    up();
    console.log('up');
}
if(keypressed == "40"){

    down();
    console.log('down');
}
if(keypressed == "39"){

    right();
    console.log('right');
}
if(keypressed == "37"){

    left();
    console.log('left');
}

if(keypressed == "67"){
new_image("cloud.jpg");
console.log('c');
}

if(keypressed == "68"){
    new_image("dark_green.png");
    console.log('d');
    }
    if(keypressed == "71"){
        new_image("ground.jpg");
        console.log('g');
        }
        if(keypressed == "76"){
            new_image("light_green.png");
            console.log('l');
            }
            if(keypressed == "82"){
                new_image("roof.jpg");
                console.log('r');
                }
                if(keypressed == "84"){
                    new_image("trunk.jpg");
                    console.log('t');
                    } 
                    if(keypressed == "85"){
                        new_image("unique.png");
                        console.log('u');
                        }
                        if(keypressed == "87"){
                            new_image("wall.jpg");
                            console.log('w');
                            }
                            if(keypressed == "89"){
                                new_image("yellow_wall.png");
  console.log('y');
   }
}

function up(){

    if (player_y >=0){
player_y= player_y - current_block_height;
console.log("when up arrow key is pressed , x=" + player_x + "y=" + player_y);
console.log("block image height=" + current_block_height );
canvas.remove(player_object);
playerupdate();
    }

}

function down(){

    if(player_y <=500){
player_y=player_y + current_block_height;
console.log("when down arrow key is pressed , x="+ player_x + "y=" + player_y);
console.log("block image height=" + current_block_height);
canvas.remove(player_object);
playerupdate();
    }

}

function right(){
    if(player_x <=900){
        player_x=player_x + current_block_width;
        console.log("when right arrow key is pressed , x="+ player_x + "y=" + player_y);
        console.log("block image width=" + current_block_width);
        canvas.remove(player_object);
        playerupdate();
            }

}

function left(){

    if(player_x >0){
player_x=player_x - current_block_width;
console.log("when left arrow key is pressed , x=" + player_x + "y=" +player_y);
console.log("block image width=" + current_block_width);
canvas.remove(player_object);
playerupdate();
    }
    

}