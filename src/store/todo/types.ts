export enum TodoActions {
    AddItem = 'addItem',
    DeleteItem = 'deleteItem',
    CleanList = 'cleanList',
    RecoverList = 'recoverList',
    cleanRecoveredList = 'cleanRecoveredList'
}

export interface TodoItem {
    value: string;
    date: Date;
}

export interface TodoState {
    todoList: TodoItem[];
    recoveredList: TodoItem[];
}