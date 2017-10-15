// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table = document.getElementById("pixel_canvas");

document.getElementById("makeGrid").addEventListener("click", function() {
  table.innerHTML = "";

  //to get input

  const width = document.getElementById("input_width").value;

  const height = document.getElementById("input_height").value;

  //creating table

  for (let i = 0; i < height; i++) {
    const rows = document.createElement("tr");
    for (let j = 0; j < width; j++){
      const cells = document.createElement("td");
      rows.appendChild(cells);
    }
    table.appendChild(rows);
  }
  makeGrid();
});

//creating grid with inputs

function makeGrid() {
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++)
      table.rows[i].cells[j].onclick = function() {
        fillColor(this);
      };
  }
};


//applying color to the selected box
function fillColor(cell) {
  const colour = document.getElementById("colorPicker").value;
  cell.style.backgroundColor = colour;
};


//to prevent page from refreshing on clicking the button

function validateForm(){
  return false;
};
