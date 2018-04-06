// Use moveTo()
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();


ctx.fillStyle = "#505050"; //grey
ctx.beginPath();
ctx.arc(45,76,20,0,2*Math.PI);
ctx.stroke();
ctx.closePath();
ctx.fill();












// Use the stroke() method to actually draw the path on the canvas.

// Use moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), and arc(), to create paths.

// beginPath() method begins a path, or resets the current path.
//

// ctx seems to be the standered in writing these, ctx is short for context
//

//  below sets the place and size of the image within the canvas. 2*Math.PI seems to be a set syntex for this set up

//    The arc() method creates an arc/curve (used to create circles, or parts of circles)
//             ctx.arc(45,50,30,0,2*Math.PI);

//
// this calls ctx. and stroke puts it in the canvas
//              ctx.stroke();

//
// starts the proccess.
//           ctx.beginPath();

//
// creates the image we want. is not specific to design
// var ctx = canvas.getContext("2d");

//
//  creates the image we want. is not specific to design
// var ctx = canvas.getContext("2d");
