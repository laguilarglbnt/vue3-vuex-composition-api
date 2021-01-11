import { TodoItem, TodoState } from './types';

export function hasListItems(state: TodoState): boolean {
    return !!state.todoList.length;
}

export function hasRecoveredListItems(state: TodoState): boolean {
    return !!state.recoveredList.length;
}

export function todoList(state: TodoState): TodoItem[] {
    return state.todoList;
}
