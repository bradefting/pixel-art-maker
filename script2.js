"use strict";

var color;
//
// var hasColor = "";

var box1 = document.querySelector('.box1');
  // console.log(box1);
box1.addEventListener('click', function(){
  // box1.style.background = "red";
});

//change colors on listener on container
var setColor = document.querySelector('.colorSelector');

setColor.addEventListener('click', function(e){
  color =e.target.id;
  // color=color.backgroundColor;
  console.log(color, " is color selected");
});

//change box colors
var colorBoxes = document.querySelector('.color-boxes');

colorBoxes.addEventListener('click', function(e){
  var divToChange = e.target;
  console.log(e.target, " target");
  if(divToChange.style.backgroundColor === color){
    divToChange.style.border = '1px solid black'
    divToChange.style.backgroundColor = 'white';
  }else{
    divToChange.style.border = 'none'
    divToChange.style.backgroundColor = color;
  }

});

// colorBoxes.addEventListener('click', function(e){
//   var divToChange = e.target;
//   console.log(e.target, " target");
//   if(hasColor === ""){
//     divToChange.style.border = 'none'
//     divToChange.style.backgroundColor = color;
//     hasColor=color;
//   }else{
//     divToChange.style.border = '1px solid black'
//     divToChange.style.backgroundColor = 'white';
//     hasColor="";
//   }
//
// });


//change box colors //works without toggle
// var colorBoxes = document.querySelector('.color-boxes');
//
// colorBoxes.addEventListener('click', function(e){
//   var divToChange = e.target;
//   // console.log(e.target);
//   divToChange.className +=  " noBorder"; //remove border
//   divToChange.style.backgroundColor = color;
//
// });


// color selector//this works
// var pickAColor = document.querySelector('.pickAColor');
// pickAColor.addEventListener('click', function(e){
//   color = window.getComputedStyle(pickAColor, null);
//   color=color.backgroundColor;
//   console.log(color);
//   // console.log(e.target.style.backgroundColor);
//   // console.log(e);
// })
