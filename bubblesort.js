function bubbleSort(array) {

var counter = array.length;
var comparisonCounter = 0;
while(counter > 0){
	for (var i = 0; i < array.length; i++) {
		comparisonCounter++;
		if(array[i] > array[i+1]){
			var x = array[i+1];
			array[i+1] = array[i];
			array[i] = x;
		}
	};
	counter--;
}
	console.log(comparisonCounter);
   return array; 
}

// function bubbleSort(array) {
// 	for (var j = array.length; i > 0; i--) {
// 		for (var i = 0; j < array.length; i++) {
// 			comparisonCounter++;
// 			if(array[i] > array[i+1]){
// 				var x = array[i+1];
// 				array[i+1] = array[i];
// 				array[i] = x;
// 			}
// 		}
// 	}
//    return array; 
// }