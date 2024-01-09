<script setup>
import { ref } from "vue";
import ToDoList from "./ToDoList.vue";

const todoLists = ref([]);

const addTodoList = () => {
  const dummyData = {
    order: todoLists?.value.length
      ? todoLists.value[todoLists.value.length - 1].order + 1
      : 0,
    title: "You can delete it",
    subtitle: "Edit via delete button",
  };

  todoLists.value.push(dummyData);
};

const deleteTodoList = (order) => {
  todoLists.value = [...todoLists.value].filter(
    (todoList) => order !== todoList.order
  );
};

const editTodoList = (event, order) => {
  const title = event.target.title.value;
  const subtitle = event.target.subtitle.value;

  if (!title.length && !subtitle.length) return;

  const currentTodo = [...todoLists.value].filter(
    (todoList) => order === todoList.order
  );

  currentTodo[0].title = title;
  currentTodo[0].subtitle = subtitle;

  const newToDoLists = [...todoLists.value].map((todoList) => {
    if (todoList.order === order) {
      return currentTodo[0];
    }
    return todoList;
  });

  todoLists.value = newToDoLists;
};
</script>

<template>
  <div class="todolists__wrapper">
    <div class="todolists__title">
      <h2>TODO LIST</h2>
    </div>

    <button @click="addTodoList" type="button">Add</button>
    <div className="todolists__content">
      <ToDoList
        v-for="todoList in todoLists"
        :key="todoList.order"
        :todoList="todoList"
        :deleteTodoList="deleteTodoList"
        :editTodoList="editTodoList"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.todolists__wrapper {
  width: 55rem;
  min-height: 35rem;
  display: flex;
  align-items: start;
  flex-direction: column;

  .todolists__title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 600;
  }
  .todolists__content {
    border-radius: 0.7rem;
    width: 55rem;
    padding: 0.5rem;
    height: auto;
    background-color: black;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
