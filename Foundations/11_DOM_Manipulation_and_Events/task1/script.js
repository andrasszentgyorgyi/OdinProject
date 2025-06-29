const container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent = "Hey I'm red!"

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";

const divvy = document.createElement("div");
divvy.style.backgroundColor = "pink";
divvy.style.border = "1px solid black";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const pp = document.createElement("p");
pp.textContent = "ME TOO!";
divvy.appendChild(h1);
divvy.appendChild(pp);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(divvy);
//---- events

const btn = document.querySelector("#btn");
//btn.onclick = () => alert("Hello World");

/* btn.addEventListener("click", () => {
  alert("Hello World");
}); */



btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});