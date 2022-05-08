import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')
db.config.debug = false


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    rules:[
      // {
      //   id:1,
      //   title: 'Wake up',
      //   done: false,
      //   dueDate: '2021-10-19'
      // },
      // {
      //   id:2,
      //   title: 'Get bananas',
      //   done: false,
      //   dueDate: '2021-10-20'
      // },
      // {
      //   id:3,
      //   title: 'Eat bananas',
      //   done: false,
      //   dueDate: null
      // },
    ],
    snackbar:{
      show: false,
      text:''
    },
    sorting: false,
  },
  mutations: {
    setSearch(state, value){
      state.search=value
    },
    addRule(state, newRule){      
      state.rules.push(newRule)
    },
    doneRule(state, id){
      let rule= state.rules.filter(rule => rule.id === id)[0]
      rule.done = !rule.done
    },
    deleteRule(state, id){
      state.rules= state.rules.filter(rule => rule.id !== id)
    },
    updateRuleTitle(state, payload){
      let rule = state.rules.filter(rule => rule.id === payload.id)[0]
      rule.title = payload.title
    },
    updateRuleDueDate(state, payload){
      let rule = state.rules.filter(rule => rule.id === payload.id)[0]
      rule.dueDate = payload.dueDate
    },
    setRules(state, rules){
      state.rules= rules
    },
    showSnackbar(state, text){
      let timeout = 0
      if(state.snackbar.show){
        state.snackbar.show=false
        timeout=300
      }
    setTimeout(()=>{
        state.snackbar.show=true
        state.snackbar.text= text
      },timeout)      
    },
    hideSnackbar(state){
      state.snackbar.show=false
    },
    toggleSorting(state){
      state.sorting = !state.sorting
    },
  },
  actions: {
    addRule({commit}, newRuleTitle){
      let newRule={
        id: Date.now(),
        title: newRuleTitle,
        done:false,
        dueDate: null
      }
      db.collection('rules').add(newRule).then(()=>{
        commit('addRule', newRule)
        commit('showSnackbar', 'Rule added!')
      })      
    },
    doneRule({state, commit}, id){
      let rule= state.rules.filter(rule => rule.id === id)[0]
      db.collection('rules').doc({ id: id}).update({
        done: !rule.done
      }).then(()=>{
        commit('doneRule', id)
      })
    },
    deleteRule({commit}, id){
      db.collection('rules').doc({ id: id }).delete().then(()=>{
        commit('deleteRule', id)
        commit('showSnackbar', 'Rule deleted!')
      })
      
    },
    updateRuleTitle({commit}, payload){
      db.collection('rules').doc({ id: payload.id }).update({
        title: payload.title
      }).then(() => {
        commit('updateRuleTitle', payload)
        commit('showSnackbar', 'Rule updated!')
      })      
    },
    updateRuleDueDate({commit}, payload){
      db.collection('rules').doc({ id: payload.id }).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit('updateRuleDueDate', payload)
        commit('showSnackbar', 'DueDate updated!')
      })      
    },
    setRules({commit}, rules){
      db.collection('rules').set(rules)
        commit('setRules', rules)
    },
    getRules({commit}){
      db.collection('rules').get().then(rules=>{
        commit('setRules', rules)
      })
    },
      
    
  },
  getters:{
    rulesFiltered(state){
      if(!state.search){
        return state.rules
      }
      return state.rules.filter(rule =>
        rule.title.toLowerCase().includes(state.search.toLowerCase()))
    
    }
  }
})