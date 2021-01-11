import { TodoActions, TodoItem, TodoState } from './types'
import { ActionContext } from "vuex"

export function addItem(ctx: ActionContext<TodoState, unknown>, item: TodoItem): void {
    ctx.commit(TodoActions.AddItem, item);
}

export function deleteItem(ctx: ActionContext<TodoState, unknown>, item: TodoItem): void {
    ctx.commit(TodoActions.DeleteItem, item);
}

export function cleanList(ctx: ActionContext<TodoState, unknown>): void {
    ctx.commit(TodoActions.CleanList);
}

export function recoverList(ctx: ActionContext<TodoState, unknown>): void {
    ctx.commit(TodoActions.RecoverList);
}

export function cleanRecoveredList(ctx: ActionContext<TodoState, unknown>): void {
    ctx.commit(TodoActions.cleanRecoveredList);
}
