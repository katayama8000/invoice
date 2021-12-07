import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InvoiceView from "../views/InvoiceView.vue";
import Sample from '../views/Sample.vue'
import Signup from "../views/Signup.vue"
import Signin from "../views/Signin.vue"
import RegisterProfile from "../views/RegisterProfile.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
  {
    path: '/sample',
    name: 'Sample',
    component: Sample
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/registerprofile',
    name: 'RegisterProfile',
    component: RegisterProfile
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

