function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight && height && height <=3 ) {

        let bmi = weight / (height * height);

        document.getElementById("bmiValue").textContent = bmi;
        document.getElementById("result").style.display = "block";
    } else {
        // If weight or height is not provided, display an error message
        alert("Please enter both weight and a correct height to calculate BMI.");
    }
}