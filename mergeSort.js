function merge(left, right) {
	let result = [];

	while(left.length > 0 && right.length > 0) {
		
		if (left[0] < right[0]) {
			result.push(left.shift()); 
		} else {
			result.push(right.shift());
		}
	}

	return result.concat(left).concat(right); 	
}


function mergeSort(array) {
	
	if (array.length < 2) {
		return array;
	}

	let middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

mergeSort([1,5,3,4,222,345,849,234,552,34234,6324123,3323,2]);