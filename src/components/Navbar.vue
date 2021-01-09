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
          <img src="@/assets/images/logo.png" alt="" id="logo-title">
          <v-spacer></v-spacer>
          <v-tab>Weddings</v-tab>
          <v-spacer></v-spacer>
          <v-tab>Membership</v-tab>
          <v-spacer></v-spacer>
          <v-tab>Contact</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

