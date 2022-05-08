<template>
  <v-dialog
    :value="true"
      persistent
      max-width="290"
    >      
      <v-card>
        <v-card-title class="text-h5">
          Delete Rule?
        </v-card-title>
        <v-card-text>Are you sure you want it?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  
            @click="$emit('close')"
            color="red darken-1"
            text
          >
            No
          </v-btn>
          <v-btn
            @click="$store.dispatch('deleteRule', rule.id)"
            color="purple darken-2"
            text
            
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['rule']
}
</script>

<style>

</style>