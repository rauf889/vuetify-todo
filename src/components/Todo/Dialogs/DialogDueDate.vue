<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
    >
    
    <v-date-picker
        v-model="date"
        scrollable
    >
        <v-spacer></v-spacer>
        <v-btn
        @click="$emit('close')"
        text
        color="primary"
        >
        Cancel
        </v-btn>
        <v-btn
        @click="saveRule"
        text
        color="primary"        
        >
        OK
        </v-btn>
    </v-date-picker>
    </v-dialog>
</template>

<script>
export default {
    props:['rule'],
    data(){
        return{
            date: null
        }
    },
    methods:{
        saveRule(){
            let payload={
                id: this.rule.id,
                dueDate: this.date
            }
            this.$store.dispatch('updateRuleDueDate', payload)
            this.$emit('close')
        }
    },
    mounted(){
        if (this.rule.dueDate){
            this.date = this.rule.dueDate
        }
    },
}
</script>

<style>

</style>