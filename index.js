let item;

document.addEventListener("dragstart", (e) => {
  item = e.target;
  console.log(item);
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault(e);
    console.log(e.target);
    e.target.appendChild(item);
  }
});

document.addEventListener("dragend", () => (item = null));
