<template>
  <v-container id="main">
    <v-row>
      <v-col cols="12" lg="8">
        <v-row>
          <v-col cols="12" lg="9" offset-lg="3" offset-md="1">
            <h1 class="headliner">Rooms & Rates</h1>
            <h4 class="subheadliner">Plan your perfect stay at our hotel</h4>
            <img src="@/assets/images/los-cocos-1.png" alt="" id="stepper" />
          </v-col>
        </v-row>
        <Rooms />
      </v-col>
      <v-col cols="12" lg="4">
        <img
          src="@/assets/images/los-cocos-img-bg.png"
          alt=""
          class="coco-straw"
        />
        <v-card elevation="0" outlined class="rounded-0 mt-n2 pa-5">
          <h1 class="header-ticket">Reservation Summary</h1>
          <h2 class="mt-5 subheader-ticket">{{ booking.room.name }}</h2>
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
              <span v-if="booking.startDate && booking.endDate"
                >From {{ booking.startDate }} until {{ booking.endDate }}</span
              >
            </v-col>
          </v-row>
          <v-row class="mt-3 pb-5">
            <v-col cols="12">
              <h3>People</h3>
              <span v-if="booking.adults > 0">{{ booking.adults }} adults</span>
              <v-spacer></v-spacer>
              <span v-if="booking.children > 0"
                >{{ booking.children }} children</span
              >
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="mt-5">
            <v-col cols="3">
              <h2 class="subheader-ticket">Total</h2>
            </v-col>
            <v-col cols="3" lg="6" offset="6" offset-lg="3">
              <h2 class="subheader-ticket float-right">
                €
                {{ totalPrice }}
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" offset-md="3">
              <v-btn
                large
                class="col-10 offset-1 save-button white--text mb-5"
                color="#0464B4"
                @click="save()"
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
import { mapState } from "vuex";
export default {
  name: "Main",
  components: {
    Rooms,
  },

  data: () => ({
    promo_code: 0,
  }),

  computed: {
    ...mapState(["booking"]),

    totalPrice: function () {
      var startDate = new Date(this.booking.startDate);
      var endDate = new Date(this.booking.endDate);
      var diff = (endDate - startDate) / (1000 * 60 * 60 * 24);
      return Math.round(
        (this.booking.room.price * this.booking.adults +
          this.booking.room.price * this.booking.children * 0.5) *
          diff *
          (this.promo_code ? 1 - this.promo_code / 100 : 1)
      );
    },
  },

  created() {
    var promo_code = window.location.search.substr(1).split("=");
    if (promo_code[0] == "promo_code" && !isNaN(parseInt(promo_code[1]))) {
      this.promo_code = parseInt(promo_code[1]);
    }
  },

  methods: {
    save() {
      this.$store.dispatch("save");
    },
  },
};
</script>

