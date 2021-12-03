<template>
  <v-row align="center" justify="center">
    <v-col cols="10">
      <v-card>
        <v-app id="inspire">
          <v-data-table
            :headers="headers"
            :items="tasksList"
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
            <template v-slot:[`item.actions`]="{ item }" v-if="true">
              <router-link
                :to="{
                  name: 'EditTasksComponnet',
                  params: { id: item.tasks_ID },
                }"
                class="btn btn-success"
              >
                <v-icon small class="mr-2">mdi-pencil</v-icon>
              </router-link>

              <v-icon small @click="deleteEmployee(item.tasks_ID)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
          {{ getmanager }}
        </v-app>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import moment from "moment";
import tasksserve from "../service/tasksService";
export default {
  data() {
    return {
      tasksList: [],
      headers: [
        {
          text: "tasksDetails",
          align: "start",
          sortable: false,
          value: "tasksDetails",
        },
        { text: "Date", value: "Date" },
        { text: "output", value: "output" },
        { text: "Note/Problem", value: "noteAndproblem" },
        { text: "skill", value: "skill" },
        { text: "createBy", value: "employee.Employee_Fname" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      search: '',
      admin: "",
    };
  },
  created() {
    if (this.$store.getters.positionName == "manager") this.gettaskListAll();
    else this.gettaskListByCreateBy();
  },
  methods: {
    deleteEmployee(id) {
      console.log(id);
      tasksserve.Deletetasks(id);
      this.onReset();
    },
    gettaskListAll() {
      tasksserve.ViewtasksAll().then((res) => {
        console.log(res.data);
        this.tasksList = res.data;
        for (const i in this.tasksList) {
          this.tasksList[i].Date = moment(
            String(this.tasksList[i].Date)
          ).format("DD/MM/YYYY hh.mm.ss a");
        }
      });
    },
    gettaskListByCreateBy() {
      tasksserve.ViewtasksbyCreateBy(this.$store.getters.ID).then((res) => {
        console.log(res.data);
        this.tasksList = res.data;
        for (const i in this.tasksList) {
          this.tasksList[i].Date = moment(
            String(this.tasksList[i].Date)
          ).format("DD/MM/YYYY hh.mm.ss a");
        }
      });
    },
    onReset() {
      if (this.$store.getters.positionName == "manager") this.gettaskListAll();
      else this.gettaskListByCreateBy();
    },
  },
  computed: {
    getmanager() {
      this.onReset;
      return "";
    },
  },
};
</script>
