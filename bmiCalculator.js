import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    bmiValue = ''
    result= ''
    inputHandler(event){
        const { name, value} = event.target

        if(name == "height"){
            this.height = value
        }
        if(name == "weight"){
            this.weight = value
        }
    }

    submitHandler(event){
        event.preventDefault();
        console.log("height" +this.height)
        console.log("weight" +this.weight)
        this.calculate();
    }

    calculate(){
        // BMI = w /h
        let height = Number(this.height)/100;
        let BMI = Number(this.weight)/(height*height);
        console.log("BMI Value is : "+BMI );
        this.bmiValue = Number(BMI.toFixed(2))


        if(this.bmiValue < 18.5){
        this.result = "Underweight"
        }else if (this.bmiValue >=18.5 && this.bmiValue <25){

        }else if (this.bmiValue >=25 && this.bmiValue < 30 ){
            ths.result = "Overweight"
        }else{
            this.result = "Obese"
        }

        console.log("BMi value is :"+ this.bmiValue)
        console.log("Result value is : " + this.result)


        
    }
    recalculate(){
          this.result = ''  
          this.height = ''
        this.weight = ''
    this.bmiValue = ''
    }
}