function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight && height && height <=3 ) {

        var bmi = weight / (height * height);

        document.getElementById("bmiValue").textContent = bmi.toFixed(2);
        document.getElementById("result").style.display = "block";
    } else {
        // If weight or height is not provided, display an error message
        alert("Please enter both weight and a correct height to calculate BMI.");
    }
}