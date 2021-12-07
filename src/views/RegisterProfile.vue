<template>
  <div class="text-white">
    <div class="bill-from flex flex-column">
      <h4>Bill From</h4>
      <div class="input flex flex-column">
        <label for="billerStreetAddress">Street Address</label>
        <input
          required
          type="text"
          id="billerStreetAddress"
          v-model="billerStreetAddress"
          class="text-black"
        />
        <br /><br />
      </div>
      <div class="location-details flex">
        <div class="input flex flex-column m-3">
          <label for="billerCity">City</label>
          <input
            required
            type="text"
            id="billerCity"
            v-model="billerCity"
            class="text-black"
          />
        </div>
        <br /><br />
        <div class="input flex flex-column m-3">
          <label for="billerZipCode">Zip Code</label>
          <input
            required
            type="text"
            id="billerZipCode"
            v-model="billerZipCode"
            class="text-black"
          />
          <br /><br />
        </div>
        <div class="input flex flex-column m-3">
          <label for="billerCountry">Country</label>
          <input
            required
            type="text"
            id="billerCountry"
            v-model="billerCountry"
            class="text-black"
          />
          <br /><br />
        </div>
        <button @click="updatePersonalInfo()">to firebase</button>
      </div>
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
    async updatePersonalInfo() {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user);
      //const uid = user.uid
      const uid = "oqT9vFPWRDQhq4cHwmyKNkODQzp2";
      console.log(uid);

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