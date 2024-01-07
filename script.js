let canvas = document.querySelector(".canvas");
let inc_y = 1;
let inc_x = 1;
const height = window.innerHeight;
const width = window.innerWidth;
canvas.style.top = randomize(0, height / 2) + "px";
canvas.style.left = randomize(0, width / 2) + "px" ;

//Colorsitos yupiiiii
console.log(colorArr)
console.log(long);

function randomize(min, max){
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

function randomColor(){
    canvas.style.fill = (`#${colorArr[randomize(0, long - 1)]}`);
}

function loop(){
    randomColor();
    setInterval(frame , 1)
}

function colision_handle(){
    let canvas_height = canvas.offsetHeight; 
    let canvas_width = canvas.offsetWidth;
    let canvas_top = canvas.offsetTop;
    let canvas_left = canvas.offsetLeft;
    if (canvas_left <= 0 || canvas_left + canvas_width >= width){
        inc_x = ~inc_x + 1;
        randomColor();
    }
    if (canvas_top <= 0 || canvas_top + canvas_height >= height){
        inc_y = ~inc_y + 1;
        randomColor();
    }
}

function frame() {
    colision_handle();
    canvas.style.top = canvas.offsetTop + inc_y + "px";
    canvas.style.left = canvas.offsetLeft + inc_x + "px";
}

loop();