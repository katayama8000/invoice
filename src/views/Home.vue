<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are {{ invoiceData.length }} total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span
            >Filter by status
            <span v-if="filteredInvoice">: {{ filteredInvoice }}</span></span
          >
          <img src="@/assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <!-- 請求書にfilterをかける -->
            <li @click="filteredInvoices">Draft</li>
            <li @click="filteredInvoices">Pending</li>
            <li @click="filteredInvoices">Paid</li>
            <li @click="filteredInvoices">Clear Filter</li>
          </ul>
        </div>
        <!-- 新しいinvoiceを作成左から請求書出てくる -->
        <div @click="newInvoice" class="button flex bg-purple-500">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </div>


        <router-link to="/signup"><div class="bg-purple-500 mx-2 py-3 px-5 rounded-3xl text-xs">sign-up</div></router-link>
        <router-link to="/signin"><div class="bg-purple-500 mx-2 py-3 px-5 rounded-3xl text-xs">sign-in</div></router-link>
        <router-link to="/registerprofile"><div class="bg-purple-500 mx-2 py-3 px-5 rounded-3xl text-xs">登録</div></router-link>
      </div>
    </div>
    <!-- Invoices一覧表示 -->
    <div v-if="invoiceData.length > 0">
      <Invoice
        v-for="(invoice, index) in filteredData"
        :invoice="invoice"
        :key="index"
      />
    </div>
    <div v-else class="empty flex flex-column">
      <!-- <img src="@/assets/illustration-empty.svg" alt="" /> -->
      <h3>There is nothing here</h3>
      <p>
        Create a new invoice by clicking the New Invoice button and get started
      </p>
    </div>
  </div>
</template>


<script>
import Invoice from "../components/Invoice";
//vuexからとってくる
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "Home",

  data() {
    return {
      filterMenu: null,
      filteredInvoice: null,
      filteredData_array: [],
    };
  },
  components: {
    Invoice,
  },

  created() {
    this.getDataFromFirebase();
  },

  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    ...mapActions(["GET_INVOICES"]),


    getDataFromFirebase() {
      this.GET_INVOICES();
    },

    newInvoice() {
      //vuexのstateを変更モーダルを表示
      this.TOGGLE_INVOICE();
    },

    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },

    filteredInvoices(e) {
      console.log(e);
      if (e.target.innerText === "Clear Filter") {
        this.filteredInvoice = null;
        return;
      }
      this.filteredInvoice = e.target.innerText;
    },
  },

  computed: {
    ...mapState(["invoiceData"]),

//state or this.filteredInvoiceの変化などで作動。配列を作り直して表示。
    filteredData() {
      let data_array = this.invoiceData.filter((invoice) => {
        if (this.filteredInvoice === "Draft") {
          return invoice.invoiceDraft === true;
        }
        if (this.filteredInvoice === "Pending") {
          return invoice.invoicePending === true;
        }
        if (this.filteredInvoice === "Paid") {
          return invoice.invoicePaid === true;
        }
        return invoice;
      });

      return data_array;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;

        span {
          font-size: 12px;
        }
      }

      .filter {
        position: relative;
        margin-right: 40px;
        cursor: pointer;

        img {
          margin-left: 12px;
          width: 9px;
          height: 5px;
        }

        .filter-menu {
          width: 120px;
          position: absolute;
          top: 25px;
          list-style: none;
          background-color: #1e2139;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

          li {
            cursor: pointer;
            font-size: 12px;
            padding: 10px 20px;

            &:hover {
              color: #1e2139;
              background-color: #fff;
            }
          }
        }
      }

      .button {
        padding: 8px 10px;
        border-radius: 40px;

        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }

  .empty {
    margin-top: 160px;
    align-items: center;

    img {
      width: 214px;
      height: 200px;
    }

    h3 {
      font-size: 20px;
      margin-top: 40px;
    }

    p {
      text-align: center;
      max-width: 224px;
      font-size: 12px;
      font-weight: 300;
      margin-top: 16px;
    }
  }
}
</style>

