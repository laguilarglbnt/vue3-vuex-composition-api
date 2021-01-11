<template>
  <div class="home">
    <list-item v-for="(item, index) of todoList" :key="index" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import ListItem from "@/components/ListItem.vue";

export default defineComponent({
  name: 'Home',
  components: {
    ListItem
  },
  setup() {
    const store = useStore();

    return {
        todoList: computed(() => store.getters.todoList)
    };
  }
});
</script>
