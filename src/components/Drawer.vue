<template>
  <v-row id="drawer">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" id="btn-drawer"></v-app-bar-nav-icon>
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
  </v-row>
</template>
<script>
export default {
  name: "Drawer",
  data: () => ({
    drawer: false,
  }),
};
</script>