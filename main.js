// create element div then add css class `container` to it
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// create 256 divs then add class `grid` to them
for (let i = 1; i <= 256; i++) {
  const div = document.createElement("div");
  div.classList.add(`grid`);
  container.appendChild(div);
}

// add "mouseover" event to all divs with the class of 'grid'
// then change their background color when being targeted with
// that event
const grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
  grid.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
  });
});
