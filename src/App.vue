<template>
  <v-app id="inspire">
    <v-row align="center" justify="center">
      <v-col cols="8">
        <template v-if="login">
          <navigationrawer />
          <template>
            <router-view></router-view>
          </template>
        </template>

        <template v-else>
          <login />
        </template>
        {{ getLogin }}
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import { store } from "./stores/store";
import loginComponents from "./components/loginComponnet.vue";
import navigationrawerComponnet from "./components/navigationrawerComponnet.vue";
export default {
  data() {
    return {
      login: false,
    };
  },
  components: {
    login: loginComponents,
    navigationrawer: navigationrawerComponnet,
  },
  methods: {
    logout() {
      this.login = false;
      this.manager = false;
      this.$store.commit("setLogin", false);
      this.$store.commit("setPositionID", undefined);
      this.$store.commit("setID", undefined);
      this.$store.commit("setpositionName", undefined);
    },
    test() {
      this.login = this.$store.getters.login;
    },
  },
  created() {},

  computed: {
    getLogin() {
      this.test();
      return "";
    },
  },
  store,
};
</script>