function evenIndexes(arr) {
	var result="";
	for (i=0; i<arr.length; i+=2){
		result+=arr[i];
	}
	return result;
}

console.log(evenIndexes(["a","b","c","d","e","f"]));