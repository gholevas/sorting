// function mergeSort(arr1, arr2) {

// 	// var leftSide = arr1.splice(0, Math.floor(arr1.length / 2));
// 	// var rightSide = arr1.splice((Math.floor(arr1.length / 2))-1);
// 	// console.log(leftSide);
// 	// console.log(rightSide);
// 	var x;
// 	while(arr1.length >= 0\1){
// 		x = halfArray(arr1);
// 		return x;
// 	}


// }

// function halfArray(arr){
// 	return arr.splice(0, Math.floor(arr.length / 2));
// }


function mergeSort(array){
	if(array.length <= 1){
		return array[0];
	}

	var leftSide = [];
	var	rightSide = [];
	var middle = array.length/2;

	for (var i = 0; i < array.length-middle; i++) {
		leftSide.push(array[i]);
	};
	for (var i = array.length-middle; i < array.length; i++) {
		rightSide.push(array[i]);
	};
console.log('before left side: '+leftSide);
console.log('before right side: '+rightSide);
		
	//debugger;
	leftSide = mergeSort(leftSide);
	debugger;
	rightSide = mergeSort(rightSide);
console.log('after left side: '+leftSide);
console.log('after right side: '+rightSide);
	//return leftSide.concat(rightSide);
}