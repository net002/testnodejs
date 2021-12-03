<template>
  <v-navigation-drawer permanent expand-on-hover app mini-variant>
    <v-list>
      <v-list-item class="px-2">
        <router-link :to="'/'">
          <v-list-item-avatar>
            <v-img src="../assets/icon.jpg"></v-img>
          </v-list-item-avatar>
        </router-link>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            panuwat kanpukdee
          </v-list-item-title>
          <v-list-item-subtitle
            >Admin No.{{ $store.getters.ID }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-group no-action prepend-icon="mdi-file-document">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Actions Tasks</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item router-link :to="'/createTasksComponnet'">
          <v-list-item-icon>
            <v-icon>mdi-plus-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title> Create</v-list-item-title>
        </v-list-item>
        <v-list-item router-link :to="'/viewTasksComponnet'">
          <v-list-item-icon>
            <v-icon>mdi-file-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title> view</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action prepend-icon="mdi-account-circle" v-if="manager">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Actions users</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item router-link :to="'/createUsersComponnet'">
          <v-list-item-icon>
            <v-icon>mdi-plus-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title> Create</v-list-item-title>
        </v-list-item>
        <v-list-item router-link :to="'/viewUsrsComponnet'">
          <v-list-item-icon>
            <v-icon>mdi-file-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title> view</v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-item router-link :to="'/FullCalendarComponents'">
        <v-list-item-icon>
          <v-icon>mdi-calendar</v-icon>
        </v-list-item-icon>
        <v-list-item-title> calendar</v-list-item-title>
      </v-list-item>
      <v-list-item link router-link :to="'/'" v-on:click="logout">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title>logout</v-list-item-title>
      </v-list-item>
    </v-list>
    {{ getmanager }}
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      show3: false,
      user: {
        user_name: "",
        password: "",
      },
      manager: "",
    };
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
    CheckManager() {
      if (this.$store.getters.positionName === "manager") {
        this.manager = true;
      } else this.manager = false;
    },
  },
  created() {},
  computed: {
    getmanager() {
      this.CheckManager();
      return "";
    },
  },
};
</script>