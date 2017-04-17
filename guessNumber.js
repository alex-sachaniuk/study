function guessNumber(){
	var number1=Math.floor((Math.random()*10)+1);
	var secretNumber=Math.floor((Math.random()*100)+1+number1);
	var number2=Math.floor((Math.random()*100)+1+secretNumber);
	do{
		var x=prompt("Guess the number between 1 and 100");
		if (x>secretNumber){
			alert("Secret number is less than your number");
		}else if (secretNumber<x){
			alert("Secret number is greater than your number");
		}else{}
	}
	while (x!=secretNumber);
	alert("Congrats, you guessed the secret number: "+secretNumber);
}

guessNumber();