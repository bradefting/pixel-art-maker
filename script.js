"use strict";
var color;

for(var i =0;i<2080;i++){
  var newDiv = document.createElement('div');
  newDiv.setAttribute("class", "box");
  var addDivs = document.querySelector('.addDivs');
  addDivs.appendChild(newDiv);
}

//change colors on listener on container
var setColor = document.querySelector('.colorSelector');

setColor.addEventListener('click', function(e){
  color =e.target.id;
  console.log(color, " is color selected");

  var colorIndicator = document.querySelector('.colorIndicator');
  console.log(colorIndicator);
  colorIndicator.style.backgroundColor = color;
});

//change box colors
var colorBoxes = document.querySelector('.color-boxes');

colorBoxes.addEventListener('click', function(e){
  var divToChange = e.target;
  console.log(e.target, " target");
  if(divToChange.style.backgroundColor === color){
    divToChange.style.height = "10px";
    divToChange.style.width = "10px";
    divToChange.style.border = '1px solid black';
    divToChange.style.backgroundColor = 'white';
  }else{
    divToChange.style.border = 'none';
    divToChange.style.height = "12px";
    divToChange.style.width = "12px";
    divToChange.style.backgroundColor = color;
  }
});
