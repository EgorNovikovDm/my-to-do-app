import {FetchTodosAction,DeleteTodoAction} from "./todos";

export enum ActionsTypes {
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;