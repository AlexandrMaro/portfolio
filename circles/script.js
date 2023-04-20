let canvas = document.getElementById("CantWas");
let ctx = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = 1080;
canvas.height = 1900;

canvas.style.background = "#bbf"

class Circle {
    constructor(xCoord, yCoord, dxCircle, dyCircle, circleRadius, circleColor) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.dxCircle = dxCircle;
        this.dyCircle = dyCircle;
        this.circleRadius = circleRadius;
        this.circleColor = circleColor;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.xCoord, this.yCoord, this.circleRadius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.circleColor;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    update() {
        if (this.xCoord + this.circleRadius > innerWidth || this.xCoord - this.circleRadius < 0) {
            this.dxCircle = - this.dxCircle
        }
        if (this.yCoord + this.circleRadius > innerHeight || this.yCoord - this.circleRadius < 0) {
            this.dyCircle = - this.dyCircle
        }

        this.xCoord += this.dxCircle;
        this.yCoord += this.dyCircle;
        
        this.draw(ctx);
    }

    changeColor(newColor) {
        this.circleColor = newColor;
        this.draw(ctx);
    }

    clickCircle(xMouseCoord, yMouseCoord) {
        const distance = 
        Math.sqrt(
            ( ( xMouseCoord - this.xCoord ) * ( xMouseCoord - this.xCoord ) )
            +
            ( ( yMouseCoord - this.yCoord ) * ( yMouseCoord - this.yCoord ) )
        );
        if (distance < this.circleRadius) {
            this.changeColor('#56f')
            return true
        } else {
            this.changeColor('#f56')
            return false 
        }
    }

}

function randomInt(min, max) { 
    let rand = min + Math.random() * (max + 1 - min); 
    rand = Math.floor(rand); 
    return rand; 
} 

let circle = new Circle();

for (let i = 0; i < 20; i++) {
    
    r = randomInt(1, 255); 
    g = randomInt(1, 255); 
    b = randomInt(1, 255);

    color = 'rgb('+ r +', '+ g +', '+ b + ')';

    circle.xCoord = randomInt(0, window_height - 10);
    circle.yCoord = randomInt(0, window_width - 10);
    circle.dxCircle = (Math.random() - 0.5);
    circle.dyCircle = (Math.random() - 0.5);
    circle.circleRadius = randomInt(10, 25); 
    circle.circleColor = color;
    
    //circle.draw(ctx);
    circle.update(ctx);
    
}

window.addEventListener('resize', function() {
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight;
});

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    circle.clickCircle(x, y);
    //console.log('x: ' + x + ' y: ' + y);
    
});