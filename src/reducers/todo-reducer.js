// Simple todoReducer
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
// A list of todoreduces. Using Composition with Arrays.
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

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

// Luckily! We have combine reducer function
// const todoApp = (state = {}, action) => {
//   return {
//       TodoReducer: TodoReducer(
//           state.TodoReducer,
//           action
//       ),
//       visibilityFilter: visibilityFilter(
//           state.visibilityFilter,
//           action
//       )
//   }
// };

const { combineReducers } = Redux;
//
// const todoApp = combineReducers({
//     TodoReducer: TodoReducer,
//     visibilityFilter: visibilityFilter
// });
// using ES6
const todoApp = combineReducers({
    TodoReducer,
    visibilityFilter
});

export default todoApp;

