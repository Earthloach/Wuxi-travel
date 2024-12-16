<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-button
      @click="toggleCollapse"
      style="margin-bottom: 10px; border: none"
    >
      <el-icon v-if="isCollapse"><TurnOff /></el-icon>
      <el-icon v-else><Open /></el-icon>
    </el-button>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Home Page </template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Settings</template>
    </el-menu-item>
    <el-sub-menu index="5">
      <template #title>
        <el-icon><UserFilled /></el-icon>
        <span>User</span>
      </template>
      <el-menu-item><a href="/login">登录</a></el-menu-item>
      <el-menu-item @click="logOut"><span>退出</span></el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { UserFilled } from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Open,
  Close,
  TurnOff,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);
const store = useStore();
const router = useRouter();

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
const logOut = () => {
  store.dispatch("handleLogout", router);
};

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  height: 100%;
}
.el-icon {
  font-size: 40px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
