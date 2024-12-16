<template>
  <el-container class="basic-layout">
    <el-aside :width="isCollapse ? '64px' : '150px'" class="fixed-tab">
      <AppTab />
    </el-aside>
    <el-container>
      <el-header class="fixed-header">
        <AppHeader />
      </el-header>
      <el-main class="content-container">
        <router-view />
        <!--应用任意界面 -->
      </el-main>
      <el-footer>
        <a href="https://github.com/Earthloach" target="_blank">
          <el-icon style="font-size: 25px"><Share /></el-icon>
        </a>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import AppTab from "./AppTab.vue";
import AppHeader from "./AppHeader.vue";
import { Share } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss"></style>
