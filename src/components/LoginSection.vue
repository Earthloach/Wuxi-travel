<template>
  <div class="login-section">
    <el-avatar shape="square" :size="100" :fit="fill" :src="url"></el-avatar>
    <form @submit.prevent="handleSubmit">
      <label for="email">邮箱：</label>
      <el-input
        v-model="emailInput"
        placeholder="请输入邮箱"
        native-type="email"
        id="email"
      ></el-input>
      <label for="password">密码：</label>
      <el-input
        placeholder="请输入密码"
        v-model="passwordInput"
        native-type="password"
        show-password
        id="password"
      ></el-input>
      <el-button type="primary" native-type="submit">{{
        buttonText
      }}</el-button>
      <p>
        {{ botText }}
        <router-link @click="resetUser" :to="{ name: botLink }">{{
          botLinkText
        }}</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "LoginSection",
  props: {
    mode: {
      type: String,
      default: "login",
      validator: (value) => ["login", "register"].includes(value),
    },
  },
  data() {
    return {
      emailInput: "",
      passwordInput: "",
      url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    };
  },
  computed: {
    botText() {
      return this.mode === "login" ? "还没有账号？" : "已有账号？";
    },
    botLinkText() {
      return this.mode === "login" ? "注册" : "登录";
    },
    botLink() {
      return this.mode === "login" ? "register" : "login";
    },
    buttonText() {
      return this.mode === "login" ? "登录" : "注册";
    },
  },
  methods: {
    ...mapMutations(["login"]),
    resetUser() {
      this.emailInput = "";
      this.passwordInput = "";
    },
    handleSubmit() {
      console.log("Email:", this.emailInput);
      console.log("Password:", this.passwordInput);
      this.resetUser();
      // 重定向到主页
      if (this.mode === "login") {
        this.login();
        this.$router.replace("/");
      } else {
        this.$router.replace("/login");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/_mixins";

$background-color: #f5f5f5;
$box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
$border-radius: 10px;
$label-font-weight: bold;
$input-margin-bottom: 10px;
$button-margin-top: 20px;

.login-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: $background-color;
  padding: 20px;
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  @include set-background-image("@/assets/img/loginBack.jpg");

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    background-color: #fff;
    padding: 20px;
    border-radius: $border-radius;
    box-shadow: $box-shadow;

    label {
      align-self: flex-start;
      margin-top: 10px;
      font-weight: $label-font-weight;
    }

    .el-input {
      width: 100%;
      margin-bottom: $input-margin-bottom;
    }

    .el-button {
      margin-top: $button-margin-top;
      width: 100%;
    }
  }

  .el-avatar {
    margin-bottom: 20px;
  }
}
</style>
