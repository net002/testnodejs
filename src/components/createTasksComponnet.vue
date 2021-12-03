<template>
  <div>
    <v-container>
      <div class="mx-auto">
        <v-card width="1000px">
          <h1 class="text-center">Create Tasks</h1>
          <v-row pa="2" ma="2" align="center" justify="center">
            <v-col cols="10">
              <v-textarea
                counter
                auto-grow
                name="input-7-1"
                label="Tasks Detail"
                :rules="rules"
                v-model="tasksList.tasksDetails"
                hint="Hint text"
                prepend-icon="mdi-comment"
              ></v-textarea>
            </v-col>
            <v-col cols="4">
              <h1 class="font-weight-light">DATE</h1>
              <date-picker
                v-model="tasksList.Date"
                valueType="date"
                type="datetime"
                format="DD-MM-YYYY HH.mm"
                :editable="false"
                :default-value="new Date()"
                :min="new Date()"
                class="d-block pa-2"
              ></date-picker>
            </v-col>
            <v-col cols="6">
              <v-textarea
                counter
                auto-grow
                name="input-7-1"
                label="OutPut"
                :rules="rules"
                v-model="tasksList.output"
                hint="Hint text"
              ></v-textarea>
            </v-col>
            <v-col cols="5">
              <v-textarea
                counter
                auto-grow
                name="input-7-1"
                label="Note/Problem"
                :rules="rules"
                v-model="tasksList.noteAndproblem"
                hint="Hint text"
              ></v-textarea>
            </v-col>
            <v-col cols="5">
              <v-textarea
                counter
                auto-grow
                name="input-7-1"
                label="Skill"
                :rules="rules"
                v-model="tasksList.skill"
                hint="Hint text"
              ></v-textarea>
            </v-col>
            <v-col cols="5">
              <v-btn depressed @click="backpage">back</v-btn>
            </v-col>
            <v-col cols="5" >
              <v-btn depressed v-on:click="handleSubmitForm">Create</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
  </div>
</template>


<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import tasksService from "../service/tasksService";
export default {
  data() {
    return {
      tasksList: {
        tasksDetails: undefined,
        Date: undefined,
        output: undefined,
        noteAndproblem: undefined,
        skill: undefined,
        createBy: this.$store.getters.ID,
        updatedBy: this.$store.getters.ID,
        Employee_ID: this.$store.getters.ID,
      },
      rules: [(v) => v?.length <= 150 || "Max 150 characters"],
    };
  },
  components: { DatePicker },
  methods: {
    handleSubmitForm() {
      tasksService.Createtasks(this.tasksList);
      this.$router.push({ path: "/viewTasksComponnet" });
    },
    backpage() {
      this.$router.push({ path: "/viewTasksComponnet" });
    },
    checkLogin() {},
  },
  created() {},
};
</script>
