

const heightEl=document.getElementById('height-input')

const weightEl=document.getElementById('weight-input');


const btnEl=document.querySelector('.compute-btn');

const resultEl=document.querySelector('.bmi-display');

const conditionEl=document.querySelector('.bmi-condition');


computeValue();
function computeValue(event){

    let height=heightEl.value/100;
    let weight=weightEl.value;

    const BMI=weight/(height*height);
    resultEl.innerHTML=(`${BMI.toFixed(1)}`);
    if(BMI<18.5){
        conditionEl.innerHTML=`Your condition is:Underweight`;
    } else if(BMI>18.5 && BMI<24.9) {
        conditionEl.innerHTML=`Your condition is:Normal Weight`;

    } else if(BMI>25 &&BMI<29.9){
        conditionEl.innerHTML=`Your condition is:Overweight`;
    }else{
        conditionEl.innerHTML=`Your condition is:Obesity`;
    }


}