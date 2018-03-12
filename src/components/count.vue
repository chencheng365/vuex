<template>
  <div>
      <h2>{{msg}}</h2><hr>
      <h3>{{$store.state.count}} 丶  {{count}}</h3>
      <p>
        <button @click="$store.commit('add',9)">++</button>
        <button @click="reduce(2)">--</button>
      </p>
      <br>
      <p>
        <button @click="addAction(2)">++</button>
        <button @click="reduceAction">--</button>
      </p>
  </div>
</template>

<script>
import store from '@/vuex/store';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'

export default {
  data(){
    return {
      msg:'Hello vuex'
    }
  },
  // 1.通过computed的计算属性直接赋值
  // computed:{
  //   count(){
  //     return this.$store.state.count
  //   }
  // },

  // 2.通过mapState的对象来赋值
  // computed:mapState({
  //   count:state=>state.count
  // }),

  // 3.通过mapState的数组来赋值
  computed:{
    ...mapState(['count']),
    // count(){
    //   return this.$store.getters.fun_count;
    // },
    ...mapGetters(['count'])
  },
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>

