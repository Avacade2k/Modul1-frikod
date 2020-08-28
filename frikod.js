const testArray = [123, 34, 5432, 86, 64, 7, 89, 204, 444, 809, 5, 500];
let dynamicArray = testArray;

document.getElementById("mainArray").innerText = testArray;

function filterClick() {
  dynamicArray = filterEvenNumbers;
  document.getElementById("demo").innerText = dynamicArray;
  console.log("Filtered array");
}

function mapClick() {
  dynamicArray = mapArray;
  document.getElementById("demo").innerText = dynamicArray;
  console.log("Mapped array");
}

let mapArray = testArray.map((num) => num * 2);

let filterEvenNumbers = testArray.filter((num) => {
  if (num % 2 == 0) return true;
  return false;
});
let reducetest = testArray.reduce((acc, cur) => acc + cur);

let clicked = 1;

let coolElements = document.getElementsByClassName("coolButton");

for (var i = 0; i < coolElements.length; i++) {
  coolElements[i].addEventListener("click", () => {
    clicked++;
    const coolButtons = document.querySelector(".coolButton");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "Duplicate Button " + clicked;
    button.classList.add("coolButton");
    li.appendChild(button);
    ul.appendChild(li);
    console.log("Duplicated button");
    coolButtons.appendChild(ul);
  });
}

document.getElementById("hrefButton").addEventListener("click", () => {
  let href = location.href;
  document.getElementById("href").innerHTML = href;
});
document.getElementById("rickRollButton").addEventListener("click", () => {
  location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});
document.getElementById("reloadButton").addEventListener("click", () => {
  location.reload();
});
