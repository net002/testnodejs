<template>
  <v-row align="center" justify="center">
    <v-col cols="4">
      <v-card>
        <v-card-title>
          <v-img
            src="../assets/kisspng-logo-brain-technology-5afec97aef8471.7704486015266471629811.png"
            height="150"
          ></v-img>
        </v-card-title>
        <v-col pa="6" ma="2">
          <h1 class="text-center">Login</h1>
          <v-text-field label="User Name" clearable v-model="user.user_name">
          </v-text-field>

          <v-text-field
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show3 ? 'text' : 'password'"
            label="password"
            @click:append="show3 = !show3"
            v-model="user.password"
          ></v-text-field>
          <div class="text-center">
            <v-btn elevation="2" outlined v-on:click="test"> login</v-btn>
          </div>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
import loginService from "../service/loginService";
import positionService from "../service/positionService";
export default {
  data() {
    return {
      show3: false,
      user: {
        user_name: "",
        password: "",
      },
    };
  },
  methods: {
    async test() {
      loginService.Login(this.user).then((res) => {
        if (res.data === null) {
          alert("ID กับ Password ผิดพลาด");
        } else {
          this.$store.commit("setLogin", true);
          this.$store.commit("setPositionID", res.data.Position_ID);
          this.$store.commit("setID", res.data.Employee_ID);
          this.$store.commit("setDepartment_ID", res.data.Department_ID);
          this.CheckManager();
          this.user = {
            user_name: undefined,
            password: undefined,
          };
        }
      });
    },
    async CheckManager() {
      let checkManager = { Position_ID: this.$store.getters.positionID };
      positionService.checkadmin(checkManager).then((res) => {
        if (res.data[0].Position_Name === "manager") {
          this.$store.commit("setpositionName", 'manager');
        } else {
          this.$store.commit("setpositionName", "user");
        }
      });
    },
  },
};
</script>


