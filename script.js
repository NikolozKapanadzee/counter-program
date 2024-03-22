const increase = document.getElementById("increaseBtn");
const reset = document.getElementById("resetBtn");
const decrease = document.getElementById("decreaseBtn");
const number = document.getElementById("number");
let counter = 0;

increase.addEventListener('click', function () {
    counter += 1;
    number.textContent = counter;
    upDateColor();
});
reset.addEventListener('click', function () {
    counter = 0;
    number.textContent = counter;
    upDateColor();
});
decrease.addEventListener('click', function () {
    counter -= 1;
    number.textContent = counter;
    upDateColor();
});
function upDateColor() {
    if (counter > 0) {
        number.style.color = 'green';
    }
    else if (counter < 0) {
        number.style.color = 'red';
    }
    else {
        number.style.color = 'black';
    }
};

