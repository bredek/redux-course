// function counter(state, action) {
// 	if(typeof state === undefined){
// 		state = 0;
// 	}
// 	if (action.type === 'INCREMENT') {
// 		return state + 1;
// 	} else if (action.type === 'DECREMENT'){
// 		return state - 1;
// 	} else{
// 		return state;
// 	}
// }
// ES6 view
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Testing simple actions
console.log(counter(0,{}));
console.log(counter(1,{type: 'INCREMENT'}));
console.log(counter(6,{type: 'DECREMENT'}));

// Calling redux library
const {createStore} = Redux;
// conste createStore = Redux.createsore;
const myStore = createStore(counter);
console.log(myStore.getState());

// Dispatching actions
// myStore.dispatch({type: 'INCREMENT'});
// myStore.dispatch({type: 'INCREMENT'});
// myStore.dispatch({type: 'INCREMENT'});
// console.log(myStore.getState());
// myStore.dispatch({type: 'DECREMENT'});
// console.log(myStore.getState());

// Subscribing
myStore.subscribe(() => {
	$('body').text(myStore.getState());
});
$('body').text(myStore.getState());
// Dispatching on click
$('body').on('click', function() {
	myStore.dispatch({type: 'INCREMENT'});
})