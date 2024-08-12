const minNum=1;
const maxNum=100;
const randNum= Math.floor (Math.random() * (maxNum - minNum + 1)) + minNum;

let running=true;
let guess;
let attempts=0;

while(running){

    guess=window.prompt(`Guess a Number between ${minNum} - ${maxNum}`);
    guess=Number(guess);

    if(isNaN(guess)){
            console.log("Please Enter A Valid Number");
    }
    else if(guess<minNum || guess> maxNum){
        console.log("Please enter a Valid number");
    }
    else{
        attempts++;
        if(guess<randNum){
            window.alert("Too Low! Try Again");
        }
        else if(guess>randNum){
            window.alert("too High! Try Again");
        }
        else{
            window.alert(`Correct Answer! The Number is ${randNum} and you guessed it in ${attempts} attempts!`);
            running=false;
        }
    }
    
}