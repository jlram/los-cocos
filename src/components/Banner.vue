<template>
  <v-container id="banner" fluid>
    <v-row id="blue-row">
      <v-col cols="12" lg="5" offset-lg="3" offset="0">
        <v-row>
          <v-col cols="12" lg="6">
            <v-row>
               <v-col cols="12" md="6">
                <v-menu
                  ref="startMenu"
                  v-model="startMenu"
                  :close-on-content-click="false"
                  :return-value.sync="options.startDate"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="options.startDate"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      flat
                      solo
                      append-icon="mdi-calendar-blank"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="options.startDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="startMenu = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.startMenu.save(options.startDate)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="6">
                <v-menu
                  ref="endMenu"
                  v-model="endMenu"
                  :close-on-content-click="false"
                  :return-value.sync="options.endDate"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="options.endDate"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      flat
                      solo
                      append-icon=" mdi-calendar-blank"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="options.endDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="endMenu = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.endMenu.save(options.endDate)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="5">
            <v-row>
              <v-col cols="6">
                <v-select
                  prefix="Adults:"
                  :items="[1,2,3,4,5,6,7,8,9]"
                  v-model="options.adults"
                  flat
                  solo
                >
                  <template v-slot:append>
                    <v-icon small>mdi-chevron-down</v-icon>
                  </template>
                </v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  prefix="Children: "
                  :items="[0,1,2,3,4,5,6,7,8,9]"
                  v-model="options.children"
                  flat
                  solo
                >
                  <template v-slot:append>
                    <v-icon small>mdi-chevron-down</v-icon>
                  </template>
                </v-select>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols=12 md="6" offset-md="3" lg="3" id="button-col">
          <v-btn large class="button white--text" color="#0464B4" @click="modify()">Modify</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Banner",
  data: () => ({
    options: {
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      adults: 1,
      children: 0,
    },
    startMenu: false,
    endMenu: false,
  }),
  methods: {
    ...mapActions([
      'update'
    ]),

    modify() {
      this.$store.dispatch('update', this.options)
    }
  }
};
</script>

