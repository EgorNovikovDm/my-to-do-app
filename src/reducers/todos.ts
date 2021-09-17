import {Action, ActionsTypes, Todo} from '../actions';


export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionsTypes.fetchTodos:
            return action.payload
        case ActionsTypes.deleteTodo:
            return state.filter((todo: Todo) => todo.id !== action.payload);
        default:
            return state
    }
};