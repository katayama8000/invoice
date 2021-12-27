<template>
  <div class="mt-36 m-auto">
    <router-link class="nav-link flex text-white mb-3" :to="{ name: 'Home' }">
      <img src="@/assets/icon-arrow-left.svg" alt="" />Go Back
    </router-link>
    <div class="flex justify-center text-white">
      <div class="text-black">
        <input type="email" required v-model="email" placeholder="email" />
        <br /><br />
        <input
          type="password"
          required
          v-model="password"
          placeholder="password"
        />
      </div>
    </div>
    <div class="text-center">
      <button
        @click="submit"
        class="
          bg-purple-500
          hover:bg-purple-700
          text-white
          font-bold
          py-2
          px-4
          rounded
          mt-10
        "
      >
        {{ pushButton }}
      </button>
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
      pushButton: "",
    };
  },

  created() {
    this.pushButton = this.$route.name;
  },

  methods: {
    submit() {
      this.$store.dispatch(this.$route.name, {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  align-items: center;
  color: #fff;
  font-size: 12px;
  img {
    margin-right: 10px;
    width: 7px;
    height: 10px;
  }
}
</style>