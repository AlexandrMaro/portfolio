function Rectangles() {
  var canvas = document.getElementById('canvas_Rectangle');
  let ctx = canvas_Rectangle.getContext('2d');
  let width = canvas_Rectangle.width;
  let height = canvas_Rectangle.height;

  class Rec {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      // this.color = color;
    }

    draw() {
      //ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.w, this.h);
      ctx.fillStyle = color;
      ctx.fill();
    }

    clickRec(xMouseCoord, yMouseCoord) {
      console.log(xMouseCoord, yMouseCoord);
    }
  }

  function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  let recNum = 10;
  let correction = 10;

  let arr = [];

  for (let i = 0; i < recNum; i++) {
    Xr = randomInt(correction, width - correction);
    Yr = randomInt(correction, height - correction);
    Wr = randomInt(correction, width / 2);
    Hr = randomInt(correction, height / 2);

    r = randomInt(1, 255);
    g = randomInt(1, 255);
    b = randomInt(1, 255);

    color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    arr[i] = new Rec(Xr, Yr, Wr, Hr, color);
    arr[i].draw();
  }

  canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log('x: ' + x + ' y: ' + y);
  });
}
