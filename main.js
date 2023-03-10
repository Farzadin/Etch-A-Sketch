// grid page
const gridPage = document.querySelector(".grid-page");
// header
const header = document.querySelector("header");
// options
const section = document.querySelector("section");
// main
const main = document.querySelector("main");
// wrapper
const wrapper = document.querySelector(".wrapper");
// footer
const footer = document.querySelector("footer");

// container
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// btn-container
const buttons = document.querySelector(".btn-container");

// Change Grid Size button
const btn = document.createElement("button");
btn.classList.add("btn");
document.body.insertBefore(btn, container);
btn.textContent = "Change Grid-Size";

// message
const msg = document.createElement("div");
document.body.insertBefore(msg, container);
msg.style.color = "red";

// rgb button
const rgb = document.createElement("button");
rgb.textContent = "RGB";
document.body.insertBefore(rgb, msg);
rgb.addEventListener("click", rgbHoverEffect);

// black button
const black = document.createElement("button");
black.textContent = "Black";
document.body.insertBefore(black, rgb);
black.addEventListener("click", blackHoverEffect);

// eraser button
const eraser = document.createElement("button");
eraser.textContent = "Eraser";
document.body.insertBefore(eraser, msg);
eraser.addEventListener("click", erase);

// clear button
const clear = document.createElement("button");
clear.textContent = "clear";
document.body.insertBefore(clear, msg);
clear.addEventListener("click", clearGrid);

// clear function
function clearGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.backgroundColor = "";
  });
}

// erase hoverEffect
function erase() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "";
    });
  });
}

// black hoverEffect
function blackHoverEffect() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
  });
}

// rgb hoverEffect
function rgbHoverEffect() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor =
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    });
  });
}

// Add Hovering effect to grid's squares so that grid divs change color
function addHoverEffect() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
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

  addHoverEffect();
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
    msg.textContent = "ERROR: amount of squares per side cant be negative";
    setTimeout(() => {
      msg.textContent = "";
    }, 3000);
    setTimeout(() => {
      msg.textContent = "";
    }, 3000);
  } else if (square > 100) {
    msg.textContent =
      "ERROR: amount of squares per sides cant be greater than 100";
    setTimeout(() => {
      msg.textContent = "";
    }, 3000);
    setTimeout(() => {
      msg.textContent = "";
    }, 3000);
  } else if (isNaN(square)) {
    msg.textContent = "ERROR: please use only numbers";
    setTimeout(() => {
      msg.textContent = "";
    }, 3000);
    setTimeout(() => {
      msg.textContent = "";
    }, 3000);
  } else {
    const totalSquares = square * square;
    removeGrid();
    makeGrid(totalSquares, square, square);
  }
});

header.appendChild(msg);

wrapper.appendChild(container);

buttons.appendChild(btn);
buttons.appendChild(black);
buttons.appendChild(rgb);
buttons.appendChild(eraser);
buttons.appendChild(clear);
section.appendChild(buttons);

gridPage.appendChild(header);
gridPage.appendChild(main);
gridPage.appendChild(footer);
gridPage.insertBefore(section, main);
