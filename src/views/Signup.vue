<template>
  <div style="color: white">
    <div>
      <h1>新規登録</h1>
      <div style="color: black">
        <input type="email" required v-model="email" placeholder="email" />
        <br /><br />
        <input type="password" required v-model="password" placeholder="password" />
      </div>
      <div>
        <button @click="submit">新規登録</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      showPassword: false,
      password: "",
      email: "",
    };
  },
  methods: {
    submit: function () {
      this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
