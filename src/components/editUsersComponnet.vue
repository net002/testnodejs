<template>
  <div>
    <v-container>
      <div class="mx-auto">
        <v-row>
          <v-card class="mx-auto" width="500px">
            <v-card-title>
              <h1 class="text-center">Edit users</h1>
            </v-card-title>
            <v-col pa="2" ma="2">
              <v-text-field
                label="usesName"
                clearable
                v-model="employeeList.usesName"
              >
              </v-text-field>
              <v-text-field
                label="password"
                clearable
                v-model="employeeList.password"
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                @click:append="show3 = !show3"
              >
              </v-text-field>
              <v-text-field
                label="Employee_Fname"
                clearable
                v-model="employeeList.Employee_Fname"
              >
              </v-text-field>

              <v-text-field
                label="Employee_Lname"
                clearable
                v-model="employeeList.Employee_Lname"
              >
              </v-text-field>
              <v-select
                :items="positionList"
                label="Name Position "
                v-model="employeeList.positionName"
              ></v-select>
              <v-select
                :items="deparmentList"
                label="Name Deparment "
                v-model="employeeList.deparmentName"
              ></v-select>
            </v-col>
            <v-col>
              <v-btn depressed @click="backpage">back</v-btn>
              <v-btn depressed v-on:click="handleSubmitForm">Edit</v-btn>
            </v-col>
          </v-card>
        </v-row>
      </div>
    </v-container>
  </div>
</template>


<script>
import positionService from "../service/positionService";
import departmentService from "../service/departmentService";
import userService from "../service/userService";
export default {
  data() {
    return {
      employeeList: {},
      positionList: [],
      deparmentList: [],
      rules: [(v) => v?.length <= 150 || "Max 150 characters"],
      show3: false,
    };
  },
  components: {},
  methods: {
    handleSubmitForm() {
      userService.Editusrs(
        this.employeeList,
        this.$store.getters.ID,
        this.$route.params.id
      );
      this.$router.push({ path: "/viewUsrsComponnet" });
    },
    checkLogin() {},
    getPosition() {
      positionService.viewAllPosition().then((res) => {
        var positions = Object.values(res.data);
        for (const position in positions) {
          this.positionList.push(positions[position].Position_Name);
        }
      });
    },
    getDepartment() {
      departmentService.viewAllDepartment().then((res) => {
        var departments = Object.values(res.data);
        for (const department in departments) {
          this.deparmentList.push(departments[department].Department_Name);
        }
      });
    },
    getUsers() {
      userService.ViewuserByid(this.$route.params.id).then((res) => {
        this.employeeList = res.data[0];
      });
    },
    backpage() {
      this.$router.push({ path: "/viewUsrsComponnet" });
    },
  },

  created() {
    this.getUsers();
    this.getDepartment();
    this.getPosition();
  },
};
</script>
<style>
</style>