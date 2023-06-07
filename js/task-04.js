const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
}

refs.decrementBtn.addEventListener('click', onDecrement);
refs.incrementBtn.addEventListener('click', onIncrement);

let counter = 0;

function updateCounterValue() {
    refs.counterValue.textContent = counter;
  }

function onDecrement() {
    counter -= 1;
    updateCounterValue();
}

function onIncrement() {
    counter += 1;
    updateCounterValue();
}


