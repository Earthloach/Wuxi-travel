<template>
  <div class="home">
    <h1>Welcome!</h1>
    <div class="search_bar">
      <el-input
        v-model="input"
        class="input"
        size="large"
        :prefix-icon="Search"
        placeholder="搜索任何旅游相关"
      />
    </div>
    <div class="special-text">
      <h2>Go Near</h2>
      <p>
        Settle in somewhere new. Discover new places to live,<br />
        work, have fun or relax.
      </p>
      <el-button type="danger" style="color: white" size="large" round
        >探索周边</el-button
      >
    </div>
  </div>
  <div class="hotel-cards">
    <homeContent />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import homeContent from "../components/homeContent.vue";
const input = ref("");
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins";
$top-margin: 30px;

.home {
  display: flex;
  flex-direction: column;
  align-items: center; /* 使内容居中 */
  padding: 10px;
  width: 100vw;
  height: 600px;
  @include set-background-image("@/assets/img/cover.jpg");

  h1 {
    margin: 0;
    margin-top: $top-margin;
    font-weight: bold;
    color: white;
  }
  .input {
    max-width: 600px;
    margin-top: $top-margin;
    color: white;

    .el-input:focus {
      border: 10px solid #007bff;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.5); /* 聚焦时的阴影效果 */
    }
  }

  .special-text {
    margin-top: 80px;
    margin-right: 800px;
    max-width: 600px;
    font-weight: bold;
    color: white;
    font-family: "Poppins", sans-serif;
    h2 {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 5px;
    }
    p {
      font-size: 1em;
      margin-top: 0;
    }
  }
}

.hotel-cards {
  margin-top: $top-margin;
}
</style>
