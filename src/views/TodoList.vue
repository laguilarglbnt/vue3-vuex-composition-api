<template>
    <h1>Todo List</h1>
    <br>

    <div>
        <input class="input" type="text" v-model="newItem"> 
        <button class="add-button" @keyup.enter="addItem" @click="addItem">Add</button>
        <button class="add-button" @click="cleanList " v-if="hasListItems">Clean List</button>
        <button class="add-button" @click="recoverList" v-if="hasRecoveredListItems">Recover List</button>
    </div>

    <list-item v-for="(item, index) of todoList" 
        :key="index" 
        :item="item" 
        @delete-item="deleteItem"
    />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { TodoActions, TodoItem } from "@/store/todo";
import ListItem from "@/components/ListItem.vue";

export default defineComponent({
    components: {
        ListItem
    },
    setup() {
        const store = useStore();
        const newItem = ref<string>('');
        let recoverTimer: number;

        function startRecoverTimer() {
            recoverTimer = setTimeout(() => store.dispatch(TodoActions.cleanRecoveredList), 2000);
        }

        // All this methods may be used in a separate file (useTodoList.js) as a repository
        // to avoid explicitly call the store in every component and dispatch directly in the component.
        // The syntax will be clear and transparent to other components and changes will be easier
        function addItem() {
            store.dispatch(TodoActions.AddItem, newItem.value);
            newItem.value = '';
        }

        function deleteItem(item: TodoItem) {
            store.dispatch(TodoActions.DeleteItem, item);
        }

        function cleanList() {
            store.dispatch(TodoActions.CleanList);
            startRecoverTimer();
        }

        function recoverList() {
            store.dispatch(TodoActions.RecoverList);
            
            if (recoverTimer) {
                clearTimeout(recoverTimer);
            }
        }

        return {
            newItem,
            addItem,
            deleteItem,
            cleanList,
            recoverList,
            todoList: computed(() => store.getters.todoList),
            hasListItems: computed(() => store.getters.hasListItems),
            hasRecoveredListItems: computed(() => store.getters.hasRecoveredListItems),
        };
    }
});
</script>

<style scoped>
    .input {
        border-radius: 5px;
        font-size: 15px;
        padding: 5px;
        margin: 5px;
    }

    .add-button {
        background-color:steelblue;
        color: white;
        border: #eeeeee;
        padding: 5px;
        margin: 5px;
        font-size:  15px;
        cursor: pointer;
        border-radius: 5px;
    }
</style>