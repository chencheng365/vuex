import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state访问状态对象
const state = {
  count:1,
  num:2
}

// Mutations修改状态
const mutations = {
  add(state,n){
    state.count+=n
  },
  reduce(state){
    state.count--
  }
}

// getters计算过滤操作
const getters = {
  count(state){
    console.log('getters');
    return state.count+=100;
  }
}

// actions异步修改状态
const actions = {
  addAction(context){
    context.commit('add',9)
  },
  reduceAction({commit}){
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})