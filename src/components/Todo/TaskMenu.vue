<template>
<div>
    <v-menu
    bottom
    left
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="primary"
        icon
        v-bind="attrs"
        v-on="on"
        >
        <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </template>

    <v-list>
        <v-list-item
        v-for="(item, index) in items"
        :key="index"
        @click="handleClick(index)"
        >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
    </v-list>
    </v-menu>
    <dialog-edit 
        v-if="dialogs.edit" 
        @close="dialogs.edit =false"
        :rule="rule"
    />
    <dialog-due-date 
        v-if="dialogs.dueDate" 
        @close="dialogs.dueDate =false"
        :rule="rule"
    />
    <dialog-delete 
        v-if="dialogs.delete" 
        @close="dialogs.delete =false"
        :rule="rule"
    />
</div>
  
</template>

<script>
export default {
    props: ['rule'],
    data: () => ({
    dialogs:{
        edit: false,
        dueDate: false,
        delete:false 
    },
    items: [
        {
            title: 'Edit',
            icon : 'mdi-pencil',
            click(){
                this.dialogs.edit= true 
            }
        },
        {
            title: 'Due Date',
            icon : 'mdi-calendar',
            click(){
                this.dialogs.dueDate =true                
            }
        },
        {
            title: 'Delete',
            icon : 'mdi-delete',
            click(){
                this.dialogs.delete= true
            }
        },
        {
            title: 'Sort',
            icon : 'mdi-drag-horizontal-variant',
            click(){
                if(!this.$store.state.search){
                 this.$store.commit('toggleSorting')   
                }
                else{
                    this.$store.commit('showSnackbar', 'error...')
                }
                
            }
        },
      ],
    }),
    methods:{
        handleClick(index){
            this.items[index].click.call(this)
        }
    },
    components:{
        
        'dialog-edit': require('@/components/Todo/Dialogs/DialogEdit.vue').default,
        'dialog-due-date': require('@/components/Todo/Dialogs/DialogDueDate.vue').default,
        'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue').default,

    }
}
</script>

<style>

</style>