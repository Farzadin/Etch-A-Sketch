// container
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// btn
const btn = document.createElement("button");
btn.classList.add("btn");
document.body.insertBefore(btn, container);
btn.textContent = "Change Grid-Size";

// add mouseover event to the children of the .container class
function mouseOverEvent() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "yellow";
    });
  });
}

function makeGrid(squares = 256, row = 16, column = 16) {
  container.style.gridTemplateColumns = `repeat(${column}, 16px)`;
  container.style.gridTemplateRows = `repeat(${row}, 16px)`;

  for (let i = 1; i <= squares; i++) {
    const div = document.createElement("div");
    div.classList.add(`grid`);
    container.appendChild(div);
  }

  mouseOverEvent();
}

function removeGrid() {
  if (container.hasChildNodes) {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
      grid.remove();
    });
  }
}

// 256 squares grid 16x16
makeGrid();

// btn - click event
btn.addEventListener("click", (event) => {
  const square = prompt(
    "Enter number of squares per side for the new grid: ",
    0
  );

  const totalSquares = square * square;
  removeGrid();
  makeGrid(totalSquares, square, square);
});
