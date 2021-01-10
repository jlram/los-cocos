<template>
    <v-row id="rooms">
      <v-col cols="12" lg="11" offset-lg="1" md="10" offset-md="1">
        <v-card
          v-for="room in roomList"
          :key="room.id"
          :elevation="selectedRoom == room ? 10 : 0"
          outlined
          class="rounded-0 pa-2 room-card"
          @click="selectRoom(room)"
        >
          <v-row>
            <v-col cols="12" lg="4">
              <img v-bind:src="room.image" alt="a" class="img-card" />
            </v-col>
            <v-col cols="12" lg="7" offset-lg="1">
              <h1 class="header-ticket">{{ room.name }}</h1>
              <p>
                {{ room.description }}
              </p>
              <p>Size: {{ room.size }}m2</p>
              <v-row class="info-room col-lg-7">
                <v-col cols="3">
                  <img src="@/assets/images/double-bed.svg" alt="" class="double-bed">
                  Beds: {{ room.beds }} 
                </v-col>
                <v-col cols="3"> People: {{ room.people }} </v-col>
                <v-col cols="3" offset="3">
                  <h1 class="header-ticket" id="room-price">€{{ room.price }}</h1>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import rooms from "@/static/rooms.json";
export default {
  name: "Rooms",
  data: () => ({
    roomList: rooms,
    selectedRoom: undefined,
  }),

  methods: {
    selectRoom(room) {
      this.selectedRoom = room
      this.$store.dispatch('update', {room: this.selectedRoom})
    },
  },
};
</script>

