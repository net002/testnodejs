<template>
  <div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
//import moment from "moment";
export default {
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
      },
    };
  },
  components: {
    FullCalendar,
  },
  created() {
    console.log("555555555555555555");
  },
};
</script>