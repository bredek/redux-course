// const toggleTodo = (todo) => {
//     // bad --> return !todo.completed;

//     // good
//     // return {
//     // 	id: todo.id,
//     // 	text: todo.text,
//     // 	completed: !todo.completed
//     // }

//     // better but need a polyphil
//     // return Object.assign({}, todo, {
//     // 	completed : !todo.completed
//     // });

//     // best needs babel stage2 preset
//     return {
//         ...todo,
//         completed: !todo.completed
//     }
// }
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                    id: action.id,
                    text: action.text,
                    completed: false
            };
        case 'TOGGLE_TODO':
                if(state.id !== action.id){
                    return state
                }
                return {
                    ...state,
                    completed: !state.completed
                };
        default:
            return state;
    }
};
const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
            	...state,
            	todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

export default TodoReducer;

