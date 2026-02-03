const ulEl = document.querySelector("#categories");
const liEl = [...ulEl.querySelectorAll(".item")];
console.log(`Number of categories: ${liEl.length}`);
liEl.map(el => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
