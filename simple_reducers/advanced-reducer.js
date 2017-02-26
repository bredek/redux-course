const addCounter = (list) =>{
	// bad --> list.push(0); not pure function

	// good 
	// return list.concat([0]);

	// best !!!
	return [...list, 0];
}


const removeCounter = (list, index) => {
	// bad --> list.splice(index, 1); not pure function

	// good
	// return list
	// 		.slice(0, index)
	// 		.concat(list.slice(index + 1);

	// best !!!
	return [
		...list.slice(0, index),
		...list.slice(index + 1)
		];
}

const incrementCounter = (list, index) => {
	// bad --> return list[index]++

	// good
	// return list
	// 		.slice(0, index)
	// 		.concat([list[index] + 1])
	// 		.concat(list.slice(index + 1);

	// best !!!
	return [
		...list.slice(0, index),
		...[list[index] + 1]
		...list.slice(index + 1)
		];
}