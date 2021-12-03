<template>
  <FullCalendar class="demo-app-calendar" :options="calendarOptions">
    <template v-slot:eventContent="arg">
      <b>{{ arg.timeText }}</b>
      <i>{{ arg.event.title }}</i>
    </template>
  </FullCalendar>
</template>

<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { createEventId } from "../service/event-utils";
import Calendar from "../service/Calendar";
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        eventChange: this.handeventChange,
        events: { url: "http://localhost:5000/getDataCalendar", method: "get" },
      },
      data: {
        start: undefined,
        end: undefined,
        allDay: undefined,
        id: undefined,
        title: undefined,
      },
    };
  },
  methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
    },
    handleDateSelect(selectInfo) {
      this.data.title = prompt("Please enter a new title for your event");
      let calendarApi = selectInfo.view.calendar;
      calendarApi.unselect(); // clear date selection
      this.data.id = createEventId(1);
      this.data.start = selectInfo.startStr;
      this.data.end = selectInfo.endStr;
      this.data.allDay = selectInfo.allDay;
      if (this.data.title) {
        calendarApi.addEvent({
          id: this.data.id,
          title: this.data.title,
          start: this.data.start,
          end: this.data.end,
          allDay: this.data.allDay,
        });
        Calendar.addDataCalendar(this.data);
        
      }
    },
    handleEventClick(clickInfo) {
      if (
        confirm(
          `Are you sure you want to delete the event '${clickInfo.event.title}'`
        )
      ) {
        console.log(clickInfo.event);
        clickInfo.event.remove();
        Calendar.deleteDataCalendar(clickInfo.event);
      }
    },
    handleEvents(events) {
      this.events = events;
    },
    handeventChange(Event) {
      Calendar.updateDataCalendar(Event.event, Event.oldEvent);
    },
  },
  created() {},
};
</script>
