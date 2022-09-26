export const title = document.getElementById("title");
export const submitBtn = document.getElementById("submit-button");
export const inputBox = <HTMLInputElement>document.getElementById("grocery");
export const groceryList = document.getElementById("grocery-list");

title?.addEventListener("click", (e: Event) => {
  e.preventDefault();
  const targetDiv = e.target as HTMLDivElement;
  targetDiv.style.color = targetDiv.style.color === "blue" ? "red" : "blue";
});

const shoppingBasket: string[] = [];

function addList(grocery: string) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "삭제";
  span.innerHTML = grocery;
  li.appendChild(span);
  li.appendChild(deleteBtn);
  groceryList?.appendChild(li);
  deleteBtn?.addEventListener("click", (e: Event) => {
    e.preventDefault();
  });
}

submitBtn?.addEventListener("click", (e: Event) => {
  e.preventDefault();
  shoppingBasket.push(inputBox.value.toString());
  addList(inputBox.value.toString());
  console.log(shoppingBasket);
});
