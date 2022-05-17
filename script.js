//function
//get value
//calculate
//

function calculateBMI(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = weight /(height/100 * height/100);
    document.getElementById('heading').innerHTML = 'Your BMI is :'
    document.getElementById('bmi-output').innerHTML = bmi

    if(bmi <= 24.9){
        document.getElementById('message').innerHTML = 'you are underweight'
    }
    else if(bmi>=25 && bmi<=29.9){
        document.getElementById('message').innerHTML = 'you are healthy'
    }else{
        document.getElementById('message').innerHTML = 'you are overweight'
    }
}