<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="添加新任务" />
    <el-date-picker
      v-model="taskTime"
      type="datetime"
      placeholder="Select date and time"
      style="margin-left: 10px"
      size="small"
      v-if="newTask"
    />
    <button @click="addTask" style="margin-left: 10px">添加</button>
    <div>
      <el-radio-group
        v-model="filterStatus"
        size="small"
        style="margin-top: 20px"
      >
        <el-radio-button label="all">所有任务</el-radio-button>
        <el-radio-button label="active">当前任务</el-radio-button>
        <el-radio-button label="inactive">已完成任务</el-radio-button>
      </el-radio-group>
    </div>
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index">
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <input type="checkbox" v-model="task.completed" />
        <button @click="deleteTask(index)">删除任务</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const newTask = ref("");
const taskTime = ref("");
const list = ref([]);
const filterStatus = ref("all");

const addTask = () => {
  const trimmedTask = newTask.value.trim();
  if (trimmedTask !== "") {
    list.value.push({
      text: trimmedTask,
      completed: false,
      time: taskTime.value,
    });
  } else {
    alert("请输入正确的格式！");
  }
  newTask.value = "";
};

const deleteTask = (index) => {
  list.value.splice(index, 1);
};

const filteredTasks = computed(() => {
  if (filterStatus.value === "active") {
    return list.value.filter((task) => !task.completed);
  } else if (filterStatus.value === "inactive") {
    return list.value.filter((task) => task.completed);
  } else {
    return list.value;
  }
});
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
