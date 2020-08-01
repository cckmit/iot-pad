import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modules/modals';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前场所
    CurrentPlace: 1,

    //html字体大小
    HtmlFontSize: 100,
  },
  mutations: {
    set_CurrentPlace(state, val) {
      state.CurrentPlace = val;
    },

    set_HtmlFontSize(state, val) {
      state.HtmlFontSize = val;
    }
  },
  actions: {

  },
  modules: {
    modal
  }
})
