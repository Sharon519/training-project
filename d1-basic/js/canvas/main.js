import { create, createReportList } from "./canvas.js";
import { draw, reportArea, reportPerimeter } from "./square.js";
import randomSquare from "./square.js";

let myCanvas = create("myCanvas", document.body, 320, 320);
let reportList = createReportList(myCanvas.id);

const ratio = window.devicePixelRatio;
const canvasElem = document.querySelector("canvas");
canvasElem.width = 320 * ratio;
canvasElem.height = 320 * ratio;
canvasElem.style.width = "320px";
canvasElem.style.height = "320px";

myCanvas.ctx.scale(ratio, ratio);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

let square2 = randomSquare(myCanvas.ctx);

myCanvas.ctx.font = "12px Arial";
myCanvas.ctx.fillText("square", 100, 100);

myCanvas.ctx.font = "30px Arial";
myCanvas.ctx.fillText(window.devicePixelRatio, 100, 150);
