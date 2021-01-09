<template>
  <v-app-bar id="app-bar" light>
    <template>
      <v-tabs id="nav">
        <v-tab>Home</v-tab>
        <v-spacer></v-spacer>
        <v-tab>Rooms</v-tab>
        <v-spacer></v-spacer>
        <v-tab>Restaurant</v-tab>
        <v-spacer></v-spacer>
        <img src="@/assets/images/logo.png" alt="" id="logo-title" />
        <v-spacer></v-spacer>
        <v-tab>Weddings</v-tab>
        <v-spacer></v-spacer>
        <v-tab>Membership</v-tab>
        <v-spacer></v-spacer>
        <v-tab>Contact</v-tab>
      </v-tabs>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img
        src="@/assets/images/los-cocos-iso-footer.png"
        alt=""
        id="logo-mobile"
      />
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group>
            <img src="@/assets/images/logo.png" alt="" id="drawer-image" />

            <v-list-item @click="drawer = !drawer" class="first">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item @click="drawer = !drawer">
              <v-list-item-title>Rooms</v-list-item-title>
            </v-list-item>

            <v-list-item @click="drawer = !drawer">
              <v-list-item-title>Restaurant</v-list-item-title>
            </v-list-item>

            <v-list-item @click="drawer = !drawer">
              <v-list-item-title>Weddings</v-list-item-title>
            </v-list-item>

            <v-list-item @click="drawer = !drawer">
              <v-list-item-title>Membership</v-list-item-title>
            </v-list-item>

            <v-list-item @click="drawer = !drawer">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
  }),
};
</script>

