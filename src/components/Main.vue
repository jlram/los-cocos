<template>
  <v-container id="main">
    <v-row>
      <v-col cols="12" lg="8">
        <v-row>
          <v-col cols="12" lg="9" offset-lg="3" offset-md="1">
            <h1 class="headliner">Rooms & Rates</h1>
            <h4 class="subheadliner">Plan your perfect stay at our hotel</h4>
            <img src="@/assets/images/los-cocos-1.png" alt="" id="stepper"/>
          </v-col>
        </v-row>   
        <Rooms />
      </v-col>
      <v-col cols="12" lg="4">
        <img src="@/assets/images/los-cocos-img-bg.png" alt="" class="coco-straw" />
        <v-card elevation="0" outlined class="rounded-0 mt-n2 pa-5">
          <h1 class="header-ticket">Reservation Summary</h1>
          <h2 class="mt-5 subheader-ticket">{{ $store.state.booking.room.name }}</h2>
          <v-row class="mt-3">
            <v-col cols="6">
              <h3>Check in</h3>
              <span>From 15:00h</span>
            </v-col>

            <v-col cols="6">
              <h3>Check out</h3>
              <span>Before 12:00h</span>
            </v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="12">
              <h3>Reservation date</h3>
              <span>From {{ $store.state.booking.startDate }} until {{ $store.state.booking.endDate }}</span>
            </v-col>
          </v-row>
          <v-row class="mt-3 pb-5">
            <v-col cols="12">
              <h3>People</h3>
              <span v-if="$store.state.booking.adults > 0">{{ $store.state.booking.adults }} adults</span>
              <v-spacer></v-spacer>
              <span v-if="$store.state.booking.children > 0">{{ $store.state.booking.children }} children</span>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="mt-5">
            <v-col cols="3">
              <h2 class="subheader-ticket">Total</h2>
            </v-col>
            <v-col cols="3" offset="6">
              <h2 class="subheader-ticket">€{{ $store.state.booking.room.price }}</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" offset-md="3">
              <v-btn
                large
                class="col-10 offset-1 save-button white--text mb-5"
                color="#0464B4"
                >Save</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Rooms from "@/components/Rooms.vue";
export default {
  name: "Main",
  components: {
    Rooms,
  },
  data: () => ({})
};
</script>

