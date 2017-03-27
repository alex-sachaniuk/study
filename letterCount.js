//asking user to enter full name and applying .toLowerCase() method to it
var nameString = prompt("Enter your full name").toLowerCase();
//converting string to an array by looping through each letter in nameString
var nameArray = [];
for (var i=0; i<nameString.length; i++){
	nameArray.push(nameString[i]);
}
//need to sort my array first, so my logic would work
nameArray.sort();
counter=1;
var lettersCountInName=[];
//now I am checking if every next letter equals to the current letter, 
//and if it is equal, I increment my counter, basically calculating letters 
for (var i=0; i<nameArray.length; i++){
	if (nameArray[i]==nameArray[i+1]){
		counter++;
//if we encounter space between names, we skip it and move to the next 
//letter. If the next letter is different than current, we push this letter
//to lettersCountInName and numeric value of counter next to it, which 
//represents letter count, also reset counter to 1 for the next letter
	}else if (nameArray[i]==" "){continue}else{
		lettersCountInName.push(`Letters "${nameArray[i]}": ${counter};`);
		counter=1;
	}
}
//here I used \n as a delimiter to print everything nicely on the screen
alert(lettersCountInName.join("\n"));