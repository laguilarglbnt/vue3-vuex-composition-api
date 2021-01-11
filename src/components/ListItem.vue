<template>
    <div class="list-item">
        {{ todoItem.value }}
        <button class="item-delete" @click="deleteItem">Delete</button>
        <p class="item-note">
            {{ todoItem.date.toLocaleDateString() }}
        </p> 
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TodoItem } from "@/store/todo";

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<TodoItem>,
            required: true
        }
    },
    setup(props, ctx) {

        function deleteItem() {
            ctx.emit('delete-item', props.item);
        }

        return {
            todoItem: props.item,
            deleteItem
        };
    }
});
</script>


<style scoped>
.list-item {
    text-align: left;
    margin: 15px 5px;
    padding: 10px;
    font-weight: bold;
    color: slategrey;
    list-style-type: none;
    border: solid slategrey thin;
    border-radius: 10px;
}

.item-note {
    color: dimgrey;
    font-size: 10px;
}

.item-delete {
    background-color: tomato;
    color: white;
    border: #eeeeee;
    float: right;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
}
</style>