const container = document.createElement("div");
container.classList.add("container");

const body = document.body.appendChild(container);

for (let i = 1; i <= 256; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
}
