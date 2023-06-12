const counterValue = document.getElementById("value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let count = 0;

function updateCounter(value) {
  counterValue.textContent = value;
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter(count);
});

decrementBtn.addEventListener("click", () => {
  if (count > -Infinity) {
    count--;
    updateCounter(count);
  }
});
