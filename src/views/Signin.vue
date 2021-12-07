<template>
  <div style="color: white">
    <div width="400px" class="mx-auto mt-5">
      <h1 class="display-1">ログイン</h1>

      <div>
        <div style="color: black">
          <input type="email" required v-model="email" placeholder="email" />
          <br /><br />
          <input type="password" required v-model="password" placeholder="password" />
        </div>
        <div>
          <button class="info" @click="submit">ログイン</button>
          <span>登録していない方はこちら → </span>
          <button><router-link to="/signup">新規登録</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      password: "",
      email: "",
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>