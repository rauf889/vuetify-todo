<template>
  <v-text-field
    v-model="newRuleTitle"
    @keyup.enter="addRule"
    class="field-add-rule pa-3"
    outlined
    placeholder="Add Rule"
    hide-details
    clearable
  >
  <template v-slot:append>
    <v-icon
      @click="addRule"
      :disabled="!newRuleTitleInvalid"
    >
      mdi-plus
    </v-icon>
  </template>
  
  </v-text-field>
</template>

<script>
export default {
    data(){
      return {
        newRuleTitle : ''
      }
    },
    computed:{
      newRuleTitleInvalid(){
        return !this.newRuleTitle
      }
    },
    methods:{
      addRule(){
        if(!this.newRuleTitleInvalid){
         this.$store.dispatch('addRule', this.newRuleTitle)
         this.newRuleTitle= '' 
        }
        
    },
},
}
</script>

<style lang="sass">
.field-add-rule.v-input--is-focused
  .v-input__slot
    background: rgba(31, 94, 129, 0.5) 
</style>