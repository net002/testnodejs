<template>
  <v-row align="center" justify="center">
    <v-col cols="10">
      <v-card>
        <v-app id="inspire">
          <v-data-table
            :headers="headers"
            :items="userList"
            sort-by="calories"
            class="elevation-1"
             :search="search"
          >
            <template v-slot:top>
              <v-icon small class="mr-2" @click="onReset">mdi-refresh</v-icon>
              <v-col cols="5">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-col>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <router-link
                :to="{
                  name: 'EditUsersComponnet',
                  params: { id: item.Employee_ID },
                }"
                class="btn btn-success"
              >
                <v-icon small class="mr-2">mdi-pencil</v-icon>
              </router-link>

              <v-icon small @click="deleteEmployee(item.Employee_ID)">
                mdi-delete
              </v-icon>
            </template>
            
          </v-data-table>

        </v-app>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import userService from "../service/userService";

export default {
  data() {
    return {
      userList: [],
      headers: [
        {
          text: "Employee ID",
          align: "start",
          sortable: false,
          value: "Employee_ID",
        },
        { text: "Employee Fname", value: "Employee_Fname" },
        { text: "Employee Lname", value: "Employee_Lname" },
        {
          text: "Department Name",
          value: "position.department.Department_Name",
        },
        { text: "Position Name", value: "position.Position_Name" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      search: "",
      manager: "",
    };
  },
  created() {
    this.CheckManager();
    this.onReset();
  },
  methods: {
    deleteEmployee(id) {
      userService.Deleteuser(id, this.$store.getters.ID);
      this.onReset();
    },
    getuserListByDepartment_ID() {
      let Department_ID = { Department_ID: this.$store.getters.Department_ID };
      userService.ViewuserByDepartment_ID(Department_ID).then((res) => {
        this.userList = res.data;
      });
    },
    getuserListAll() {
      userService.ViewuserAll().then((res) => {
        this.userList = res.data;
      });
    },
    onReset() {
      if (this.$store.getters.ID == 1) this.getuserListAll();
      else this.getuserListByDepartment_ID();
    },
    CheckManager() {
      if (this.$store.getters.positionName == "manager") {
        this.manager = true;
      } else this.manager = false;
    },
  },
};
</script>
