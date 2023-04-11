const pacman = document.getElementById("pacman");
var x = 400;
var y = 33;
console.log(x + " " + y);
var up = 0, down = 0, left = 0, right = 0;
document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 37:
            left=1;
            right=0;
            up=0;
            down=0;
            break;
        case 38:
            left=0;
            right=0;
            up=1;
            down=0;
            break;
        case 39:
            left=0;
            right=1;
            up=0;
            down=0;
            break;
        case 40:
            left=0;
            right=0;
            up=0;
            down=1;
            break;
        default:
            break;
    }



})

setInterval(() => {
    draw();

}, 50);

function draw() {
    if(right==1){
        var size = (x = (x + 5)) + "px";
        pacman.style.left = size;
    }
    else if(left==1){
        var size = (x = (x - 5)) + "px";
        pacman.style.left = size;
    }
    else if(up==1){
        var size = (y = (y - 5)) + "px";
        pacman.style.top = size;
    }
    else if(down==1){
        var size = (y = (y + 5)) + "px";
        pacman.style.top = size;
    }
    
}
function isMovable() {

}