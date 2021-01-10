<template>
<v-row class="footer">
  <v-col cols="12" lg="6">
   <v-row>
      <v-col cols="2">
      <img
        src="@/assets/images/los-cocos-iso-footer.png"
        alt=""
        id="logo-footer"
      />
    </v-col>
    <v-col cols="10">
      <v-row>
        <v-col cols="3" class="black-text">Terms and Conditions</v-col>
        <v-col cols="3" class="black-text">Privacy Policy</v-col>
        <v-col cols="3" class="black-text">About us</v-col>
        <v-col cols="3" class="black-text">Partners</v-col>
      </v-row>
    </v-col>
   </v-row>
  </v-col>
  <v-col cols="12" lg="4" offset-lg="1">
    <v-row>
      <v-col cols="3" lg="5" class="blue-text">reservations@loscocosbungalows.com</v-col>
      <v-spacer></v-spacer>
      <v-col cols="3" lg="4" class="blue-text" offset="2" offset-xl="1">Tlf 666777778</v-col>
      <v-col cols="4" lg="1">
         <img src="@/assets/images/footer_icons.png" alt="" width="200px" id="footer-icons"/>
      </v-col>
    </v-row>
  </v-col>
</v-row>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
<style lang="css" scoped>
.footer {
    width: 100%;
    border-top: 1px solid rgb(185, 185, 185);
    position: absolute;
    bottom: -250px;
}

#logo-footer {
    position: relative;
    top: 20px;
    left: 30px;
}
.col-3 {
  padding-left: 15px;
}

.black-text {
  color: #4C4C4C;
  position: relative;
  top: 20px;
}

.blue-text {
  font-size: 14px;
  color: #0464B4;
  position: relative;
  top: 30px;
}

#footer-icons {
  position: relative;
  top: 20px;
}

</style>

