"use strict";

console.log("linked");

function fillGrid(){
  for(var i=0;i<3;i++){
    var gridBox = document.querySelector('.grid-box');
    console.log(gridBox);
    var smallDivBox = document.createElement('div');

      if(i<3){
        var smallSpanBox = document.createElement('span');
        smallSpanBox.style.background="blue"
        gridBox.appendChild(smallSpanBox);
      }else{
        var smallDivBox = document.createElement('div');
        smallDivBox.style.background="blue"
        gridBox.appendChild(smallDivBox);
      }
  }
}
fillGrid();
