<template>
<v-app>
<v-toolbar>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Manage</span>
        <span>192.168.1.122</span>
      </v-toolbar-title>
</v-toolbar>
<p></p>
<!-- START JUMBOTRON -->
      <div class="jumbotron" data-pages="parallax">
        <div class=" container-fluid container-fixed-lg sm-p-l-0 sm-p-r-0">
          <div class="inner">
            <!-- START BREADCRUMB -->
            <ol class="breadcrumb">
              <span class="breadcrumb-item">Clients 192.168.1.122</span>
              <!-- <li class="breadcrumb-item active"></li> -->
            </ol>
            <!-- END BREADCRUMB -->
          </div>
        </div>
      </div>
<!-- END JUMBOTRON -->
    <v-content class="mx-4 mb-4">
      <v-sheet    
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-1 md2">
            <span class="card-title">Manage Capture</span>
            <p></p>
            <span class="headline text-uppercase">Packet Capture</span>
            <p></p>           
              <v-btn  class="blue white--text">
              <v-icon left>start</v-icon>    
              </v-btn>  <a></a>
              <v-btn class="red white--text">
              <v-icon left>stop</v-icon>  
              </v-btn>
        </v-sheet>
<p></p>
      <v-sheet    
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-1 md2">
         <v-container fluid class="pa-0">
            <span class="card-title">Monitor Resources</span>
            <p></p>
            <span class="headline text-uppercase">Resource Usage</span>
            <div class="row align-items-center">
                <div class="col-lg-4">
                  CPU Usage
                </div>
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                  <div id="cpu-usage">
                    <strong class="place-middle"></strong>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-lg-4">
                  RAM Usage
                </div>
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                  <div id="ram-usage">
                    <strong class="place-middle"></strong>
                  </div>
                </div>
              </div>
          </v-container>
      </v-sheet>
<p></p>
      <v-sheet    
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-1 md4">
        <v-container fluid class="my-5"> 
          <v-card flat class="pa-3">
                <span class="card-title">View Alerts</span> <v-btn  class="blue white--text">Refresh Table</v-btn>
                <p></p>
                <span class="headline text-uppercase">Alerts Related to the Host</span>
                <p></p>
                <p></p>
                <v-layout row wrap>
                  
                <v-flex xs12 md6>
                  <div class="caption grey--text">Alert ID</div>
                  <div>####</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Alert Message</div>
                  <div>####</div>
                </v-flex>            
                </v-layout>
                </v-card> 
        </v-container>
      </v-sheet>
      <!--  -->
</v-content>
</v-app>
</template>

<script>

  export default {
    // Vuetify components provide
    // a theme variable that is
    // used to determine dark
    inject: {
      theme: {
        default: { isDark: false },
      },
    },
  }

</script>

<style>

  strong.place-middle {
    position: absolute;
    top: 34%;
    left: 32%;
    font-size: 1.3em;
  }
</style>