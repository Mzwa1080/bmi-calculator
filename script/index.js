let btn = document.querySelector('[data-submit]');
let displayResults =  document.getElementById('bmiValue');

function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight !== '' && height !=='' ) {

        let bmi = (weight / (height * height)) * 10000;
        // I must convert the decimals in to two decimal place
        bmi = bmi.toFixed(2);
        if(bmi < 18.5){
            displayResults.textContent = `${bmi}. This is described as Underweight!`;
        } else if( 18.5 >= bmi <=24.9 ){
            displayResults.textContent = `${bmi}. This is described as Healthy range!`;
        } else if(25>= bmi <=29.9 ){
            displayResults.textContent = `${bmi}. This described as Overweight!`
        }else if(30>= bmi <=39.9){
            displayResults.textContent = `${bmi}. This is described as Obesity!`
        }else if(bmi>40){
            displayResults.textContent = `${bmi}. This is described as severe obesity!`
        }

    } else {
        // If weight or height is not provided, display an error message
        alert('Please enter a your weight or height!')
    }
}

btn.addEventListener('click', calculateBMI)
