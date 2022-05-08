<template>
  <v-dialog
    :value="true"
      persistent
      max-width="290"
    >      
      <v-card>
        <v-card-title class="text-h5">
          Edit Rule
        </v-card-title>
        <v-card-text>
            Edit the title of this rule:
            <v-text-field  
            v-model="ruleTitle"
            @keyup.enter="saveRule"
            />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  
            @click="$emit('close')"
            color="red darken-1"
            text
          >
            Cansel
          </v-btn>
          <v-btn
            @click="saveRule"
            :disabled="ruleTitleInvalid"
            color="purple darken-2"
            text            
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['rule'],
    data(){
        return{
            ruleTitle: null
        }
    },    
    computed:{
        ruleTitleInvalid(){
            return !this.ruleTitle || this.ruleTitle === this.rule.title
        }
    },
    methods:{
        saveRule(){
            if (!this.ruleTitleInvalid){
            let payload={
                id:this.rule.id,
                title:this.ruleTitle
            }
            this.$store.dispatch('updateRuleTitle', payload)
            this.$emit('close')
            this.$vuetify.goTo(0, { duration: 0})
        }
        },
    },
    mounted(){
        this.ruleTitle= this.rule.title
    },
}
</script>

<style>

</style>