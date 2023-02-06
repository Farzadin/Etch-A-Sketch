// container
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// btn
const btn = document.createElement("button");
btn.classList.add("btn");
document.body.insertBefore(btn, container);
btn.textContent = "Change Grid-Size";

// message
const msg = document.createElement("div");
document.body.insertBefore(msg, container);
msg.style.color = "red";

// Add Hovering effect to grid's squares so that grid divs change color
function addMouseOverEvent() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "yellow";
    });
  });
}

// Make new Grid
function makeGrid(squares = 256, row = 16, column = 16) {
  container.style.gridTemplateColumns = `repeat(${column}, 16px)`;
  container.style.gridTemplateRows = `repeat(${row}, 16px)`;

  for (let i = 1; i <= squares; i++) {
    const div = document.createElement("div");
    div.classList.add(`grid`);
    container.appendChild(div);
  }

  addMouseOverEvent();
}

// remove the existing grid
function removeGrid() {
  if (container.hasChildNodes) {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
      grid.remove();
    });
  }
}

// 256 squares grid - 16 square per side
makeGrid();

// btn - click event
btn.addEventListener("click", (event) => {
  const square = prompt(
    "Enter number of squares per side for the new grid: ",
    0
  );

  if (square < 0) {
    msg.textContent = "sorry amount of squares per side cant be negative";
  } else if (square > 100) {
    msg.textContent = "amount of squares per sides cant be greater than 100";
  } else if (isNaN(square)) {
    msg.textContent = "please use only numbers";
  } else {
    const totalSquares = square * square;
    removeGrid();
    makeGrid(totalSquares, square, square);
  }
});
