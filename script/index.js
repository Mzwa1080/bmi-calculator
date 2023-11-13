let btn = document.querySelector('[data-submit]');

function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight !== '' && height !=='' && height <=3 ) {

        let bmi = weight / (height * height);

        document.getElementById("bmiValue").textContent = bmi;
    } else {
        // If weight or height is not provided, display an error message
        alert("Please enter both weight and a correct height to calculate BMI.");
    }
}

btn.addEventListener('click', calculateBMI)
