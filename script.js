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
  let x = document.getElementById("colorpicker").value;
  console.log(x);
  mouseOver(x);
});


function RGB2Color(r,g,b)
{
  return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
}

const btn = document.querySelector('#eraser');
btn.addEventListener('click', function(event){
  mouseOver("white"); 
});





  
