const nextStepBtns = document.querySelectorAll("form .next-step"),
    previousStepBtns = document.querySelectorAll("form .previous-step"),
    steps = document.querySelectorAll(".step");

let currentStepIndex = 0,
    answers = [];

for (let step of steps) step.style.display = "none";
steps[currentStepIndex].style.display = "block";


const nextStep = () => {
    let radioBtns = steps[currentStepIndex].querySelectorAll("input[type='radio']"),
        selectedBtn = [...radioBtns].filter((btn) => btn.checked)[0];
    answers.push(selectedBtn.parentElement.querySelector("span").innerHTML);

    steps[currentStepIndex].style.display = "none";
    currentStepIndex++;
    steps[currentStepIndex].style.display = "block";
};

const previousStep = () => {
    answers.pop();
    steps[currentStepIndex].style.display = "none";
    currentStepIndex--;
    steps[currentStepIndex].style.display = "block";
};

for (let nextBtn of nextStepBtns) nextBtn.addEventListener("click", nextStep);
for (let previousBtn of previousStepBtns) previousBtn.addEventListener("click", previousStep);