<script setup>
import { defineProps } from "vue";
import Checkbox from "./Checkbox.vue";

// Define props
const props = defineProps(["todoList", "deleteTodoList", "editTodoList"]);
const title = props?.todoList.title;
const subtitle = props?.todoList.subtitle;
const order = props.todoList.order;

const defineDelete = () => props.deleteTodoList(order);
const defineEdit = (event) => props.editTodoList(event, order);
</script>

<template>
  <form className="todolist" @submit.prevent="defineEdit">
    <div>
      <Checkbox />
    </div>
    <div>
      <input className="title" :placeholder="title" id="title" />
      <input className="subtitle" :placeholder="subtitle" id="subtitle" />
    </div>
    <button type="submit">Edit</button>
    <button type="button" @click="defineDelete">Delete</button>
  </form>
</template>

<style scoped lang="scss">
.todolist {
  display: flex;
  width: 93%;
  height: 5rem;
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: white;
  margin: 1rem 0;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: auto;
    margin: 0 0.9rem;
    height: 100%;
  }

  input {
    border: none;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
  }
  .subtitle {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.8);
  }
}
</style>
