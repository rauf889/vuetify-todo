<template>
<v-app>
  <v-toolbar>
    <v-toolbar-title class="text grey--text">
      <span class="font-weight-light">Change</span>
      <span>Ruleset</span>
    </v-toolbar-title>
    </v-toolbar>
    <v-content class="mx-2 mb-2">
      <v-sheet  
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3">
          <v-container fluid class="my-5">
            <v-card flat class="pa-3">
            <span class="card-title">View Rules</span> 
                <p></p>
                <span class="headline text-uppercase">Currently Applied Rules</span>
                <p></p>
                <p></p>
                <v-layout row wrap>                  
                <v-flex xs12 md2>
                  <div class="caption grey--text">Protocol</div>
                  <div></div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Source IP</div>
                  <div></div>
                </v-flex>    
                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Source Code</div>
                  <div></div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Destination IP</div>
                  <div></div>
                </v-flex>    
                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Rule Options</div>
                  <div></div>
                </v-flex>    
                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Action</div>
                  <div></div>
                </v-flex>
                </v-layout>             
                </v-card>
          </v-container>
                <list-rules 
                  v-if="$store.state.rules.length"
                />
                <no-rules
                  v-else
                />     
                <button-done-sorting
                  v-if="$store.state.sorting"
                />
      </v-sheet>
    </v-content>
</v-app>
</template>

<script>
export default {
    name: 'Home',
    components:{
      'list-rules': require('@/components/Todo/ListTasks.vue').default,
      'no-rules': require('@/components/Todo/NoTasks.vue').default,
      'button-done-sorting': require('@/components/Todo/ButtonDoneSorting.vue').default,
    },
    inject: {
      theme: {
        default: { isDark: false },
      },
    },
  }
</script>