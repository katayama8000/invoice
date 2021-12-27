<template>
  <div class="text-white mx-auto">
    <div class="bill-from mt-36">
      <router-link class="nav-link flex text-white mb-2" :to="{ name: 'Home' }">
      <img src="@/assets/icon-arrow-left.svg" alt="" /> Go Back
    </router-link>
    <form @submit.prevent="submitForm" >
      <div class="input">
        <label for="billerStreetAddress">Street Address</label><br />
        <input
          required
          type="text"
          id="billerStreetAddress"
          v-model="billerStreetAddress"
          class="text-black"
        />
        <br /><br />
      </div>
        <div class="input">
          <label for="billerCity">City</label><br />
          <input
            required
            type="text"
            id="billerCity"
            v-model="billerCity"
            class="text-black"
          />
        </div>
        <br />
        <div class="input">
          <label for="billerZipCode">Zip Code</label><br />
          <input
            required
            type="text"
            id="billerZipCode"
            v-model="billerZipCode"
            class="text-black"
          />
          <br /><br />
        </div>
        <div class="input">
          <label for="billerCountry">Country</label><br />
          <input
            required
            type="text"
            id="billerCountry"
            v-model="billerCountry"
            class="text-black"
          />
          <br /><br />
        </div>
        <div class="ml-12">
          <button
          type="submit"
            class="
              bg-purple-500
              hover:bg-purple-700
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
          >
            update
          </button>
        </div>
        </form>

    </div>
  </div>
</template>

<script>
import { db } from "../main";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
export default {
  name: "RegisterProfile",
  data() {
    return {
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
    };
  },

  methods: {
    async submitForm() {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user);
      //const uid = user.uid
      const uid = "oqT9vFPWRDQhq4cHwmyKNkODQzp2";

      await setDoc(doc(db, "users", uid), {
        billerStreetAddress: this.billerStreetAddress,
        billerCity: this.billerCity,
        billerZipCode: this.billerZipCode,
        billerCountry: this.billerCountry,
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