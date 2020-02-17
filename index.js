/*let imgData, pixels;
let canvas = document.getElementById("canvas");
let canvasBack = document.getElementById("background");
let ctx = canvas.getContext("2d");
let ctxBack = canvasBack.getContext("2d");*/
const img = new Image();
img.src = "./test.jpg";

const container = document.querySelector("#container");

img.onload = () => {
  const row = 10,
    column = 10;
  divideToCanvas(container, img, row, column);
  startTheDecimation(container, row, column);
};

function getPixels(context, cnvas, slices) {
  const x = slices;
  const width = cnvas.width;
  const height = cnvas.height;
  const imgData = context.getImageData(0, 0, width, height);
  let length = imgData.data.length;

 /* for (let j = x; 0 < j; j--) {
    for (let i = 0; i < length / j; i += 4) {
      if (i % j == 0) {
        setTimeout(function() {
         // cnvas.classList.add("dissapper");
          imgData.data[i + 3] = 0;
          refreshCanvas(context, imgData, 0, 0);
        }, 300 * Math.random() * j);
      }
    }
  }*/
    for (let i = 0; i < length ; i += 4) {
      setTimeout(function () {
          imgData.data[i + 3] = 0;
          refreshCanvas(context, imgData, 0, 0);
        }, 2500 * Math.random() );
      }
  
}
function refreshCanvas(context, imgData, x0, y0) {
  context.putImageData(imgData, x0, y0);
}
function divideToCanvas(container, imag, row = 10, column = 10) {
  const { width, height } = imag;
  const { clientHeight, clientWidth } = container;
  const widthCanvas = clientWidth / column;
  const heightCanvas = clientHeight / row;
  const sliceWidthImage = width / column;
  const sliceHeightImage = height / row;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      const newCanvas = document.createElement("canvas");
      newCanvas.width = widthCanvas;
      newCanvas.height = heightCanvas;
      const newCtx = newCanvas.getContext("2d");
      newCtx.drawImage(
        imag,
        sliceWidthImage * j,
        sliceHeightImage * i,
        sliceWidthImage,
        sliceHeightImage,
        0,
        0,
        widthCanvas,
        heightCanvas
      );
      container.appendChild(newCanvas);
    }
  }
}
function startTheDecimation(container, row = 10, column = 10) {
  const canvas = container.getElementsByTagName("canvas");
  let i = 1;
  /*for (const canva of canvas) {
    setTimeout(() => {
      getPixels(canva.getContext("2d"), canva, 500);
    }, 3 * Math.random());
    i++;
  }*/
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++ ) {
      const index = (j  * row) + i;
      setTimeout(() => {
        getPixels(canvas[index].getContext("2d"), canvas[index], 500);
      }, 5);
    }
  }
}
