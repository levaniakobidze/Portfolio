let cursorCircle = document.getElementById("outer-cursor");

document.addEventListener("mousemove", cursorMove);

function cursorMove(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursorCircle.style.left = `${x}px`;
  cursorCircle.style.top = `${y}px`;
}
