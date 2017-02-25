// // function counter(state, action) {
// // 	if(typeof state === undefined){
// // 		state = 0;
// // 	}
// // 	if (action.type === 'INCREMENT') {
// // 		return state + 1;
// // 	} else if (action.type === 'DECREMENT'){
// // 		return state - 1;
// // 	} else{
// // 		return state;
// // 	}
// // }
// // ES6 view
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// // Calling redux library
// const {createStore} = Redux;
// // conste createStore = Redux.createsore;
// const myStore = createStore(counter);

// const Counter = function () {
// 	return (
// 		<div>
// 			<h1>Hello!</h1>
// 		</div>
// 	)
// }

// ReactDOM.render(
// 	<Counter />,
// 	$('#root')
// );

// // // Subscribing
// // myStore.subscribe(() => {
// // 	$('body').text(myStore.getState());
// // });
// // $('body').text(myStore.getState());
// // // Dispatching on click
// // $('body').on('click', function() {
// // 	myStore.dispatch({type: 'INCREMENT'});
// // })