const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "min(100vw, 100vh)";
container.style.height = "min(100vw, 100vh";
const body = document.querySelector("body");

for (let i = 0; i <= 63; i++) {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.style.width = "12.5%";
  tile.style.height = "12.5%";

  function randomColors() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";

    //function gradientColors() {
    //const row = Math.floor(i / 8);
    //const column = Math.floor(i % 8);

    //const green = Math.floor((row / 7) * 200);
    //const yellow = Math.floor((column / 7) * 200);
    //}
  }
  tile.style.background = randomColors();

  //tile.style.background = randomColors();

  // if ((i + Math.floor(i / 8)) % 2 === 0) {
  // tile.style.background = "red";
  //  } else {
  //  tile.style.background = "black";
  //}
  tile.innerText = i;
  container.appendChild(tile);
}

body.appendChild(container);
