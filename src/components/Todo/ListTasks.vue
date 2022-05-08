<template>
    <v-list
      class="pt-0"
      flat
    >
    <draggable 
    v-model="rules"
    handle=".handle"
    >
    <rule 
    v-for="rule in rules"
    :key="rule.id"
    :rule="rule"
    />    
    </draggable>
    </v-list>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    computed:{        
        rules: {
            get() {
                return this.$store.getters.rulesFiltered
            },
            set(value) {
                this.$store.dispatch('setRules', value)
            }
        }
    },
    components:{
        'rule' : require('@/components/Todo/Task.vue').default,
        draggable,
    },
}
</script>