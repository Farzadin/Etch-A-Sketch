// container
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// btn
const btn = document.createElement("button");
btn.classList.add("btn");
document.body.insertBefore(btn, container);
btn.textContent = "Change Grid-Size";

// 256 squares
for (let i = 1; i <= 256; i++) {
  const div = document.createElement("div");
  div.classList.add(`grid`);
  container.appendChild(div);
}

// squares - mouseover event
const grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
  grid.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
  });
});

// btn - click event
btn.addEventListener("click", (event) => {
  const squares = prompt(
    "Enter number of squares per side for the new grid: ",
    0
  );

  while (container.hasChildNodes) {
    container.removeChild(container.firstChild);
  }
});
