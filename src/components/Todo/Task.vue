<template>
  <div>
        <v-list-item 
            @click="$store.dispatch('doneRule', rule.id)"
            :class="{ 'blue lighten-5' : rule.done}"
            class="white"
            :ripple="false"    
            >
            <template v-slot:default>
                <v-list-item-action>
                    <v-checkbox
                        :input-value="rule.done"
                        color="primary"
                    ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title
                    :class="{'text-decoration-line-through' : rule.done}"
                    >
                        {{ rule.title }}
                    </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action v-if="rule.dueDate">
                    <v-list-item-action-text >
                        <v-icon small>mdi-calendar</v-icon>
                        {{ rule.dueDate | niceDate }}
                    </v-list-item-action-text>
                </v-list-item-action>
                    
                <v-list-item-action>
                    <rule-menu :rule="rule" />
                </v-list-item-action>

                <v-list-item-action
                    v-if="$store.state.sorting"
                >
                    <v-btn
                        color="primary"
                        class="handle"
                        icon
                    >
                        <v-icon>mdi-drag-horizontal-variant</v-icon>
                    </v-btn>    
                </v-list-item-action>        
            </template>           

        </v-list-item>
        <v-divider></v-divider>     

    </div>
</template>

<script>
import {format} from 'date-fns'

export default {
    props: ['rule'],
    filters:{
        niceDate(value){
            return format(new Date(value), 'MMM d')
        }
    },
    components:{
        'rule-menu': require('@/components/Todo/TaskMenu.vue').default,
    },
}
</script>

<style lang="sass">
.sortable-ghost
    opacity: 0
.sortable-drag 
    box-shadow: 0 0 10px rgba(0,0,0,0.3)

</style>