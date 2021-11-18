function createGrid(v) {
    let container = document.getElementById("container");
    for (let i = 0; i < v; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let x = 1; x <= v; x++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
createGrid(16);
function mouseOver (color) {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", function (e){
        e.target.style.backgroundColor = color;
    })) ;
}
const btnColor = document.querySelector('#color');
  btnColor.addEventListener('click', function(event){
  let color = document.getElementById("colorpicker").value;
  mouseOver(color);
});

const btn = document.querySelector('#eraser');
btn.addEventListener('click', function(event){
  mouseOver("white"); 
});

const btnClear = document.querySelector('#clear');
  btnClear.addEventListener('click', function(event){
    let container = document.getElementById("container");
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => container.removeChild(row));
    let val = document.getElementById("grid").value;
    createGrid(val);
});
const btnRainbow = document.querySelector('#rainbow');
  btnRainbow.addEventListener('click', function(event){
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", function (e){
       let randomColor = Math.floor(Math.random()*16777215).toString(16);
       e.target.style.backgroundColor = "#"+randomColor;
    })) ;
  });

  const btnDarker = document.querySelector('#darker');
  btnDarker.addEventListener('click', function(event){
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", function (e){
       let cellColor = cell.style.backgroundColor;
       console.log(cellColor);
       //e.target.style.backgroundColor = "#"+randomColor;
    })) ;
  });

  





  
