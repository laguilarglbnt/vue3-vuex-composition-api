import { TodoItem, TodoState } from './types';

export function addItem(state: TodoState, value: string): void {
    state.todoList.push({
        value,
        date: new Date()
    }); // = [...state.todoList, item];
}

export function deleteItem(state: TodoState, item: TodoItem): void {
    // a better aproach is to pass the index
    const index = state.todoList.findIndex(todoItem => todoItem === item);
    state.todoList.splice(index, 1);
}

export function cleanList(state: TodoState): void {
    state.recoveredList = state.todoList;
    state.todoList = [];
}

export function recoverList(state: TodoState): void {
    state.todoList = state.recoveredList;
    state.recoveredList = [];
}

export function cleanRecoveredList(state: TodoState): void {
    state.recoveredList = [];
}