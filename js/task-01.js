const navListEl = document.querySelectorAll(".item");
console.log("Number of categories:", navListEl.length);

navListEl.forEach((el) => {
  console.log(el.firstElementChild.textContent);
  console.log(el.lastElementChild.children.length);
});
