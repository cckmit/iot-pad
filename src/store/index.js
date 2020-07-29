import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modules/modals';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前活跃的行政区划列表
    CurrentRegions: [],

    //当前活跃的圆盘菜单项(数据图表:CHART, 场所搜索:PLACE_SEARCH)
    CurrentDiskMenu: 'CHART',

    //当前活跃的圆盘子菜单项(单位:CUSTOMER, 行业:INDUSTRY, 设备:EQUIPMENT)
    CurrentDiskSubMenu: 'CUSTOMER',

    //底部面板是否可见
    FooterBoxVisible: true,

    //html字体大小
    HtmlFontSize: 100,

    //当前地图覆盖物显示类型(街道/镇:STREET, 场所:PLACE)
    CurrentOverlayType: 'PLACE'
  },
  mutations: {
    set_CurrentRegions(state, val) {
      state.CurrentRegions = val;
    },

    set_CurrentDiskMenu(state, val) {
      state.CurrentDiskMenu = val;

      //如果没有记忆中的子菜单，则默认选中一项(因为父菜单没有对应的单独展示的内容)
      if (val === 'CHART' && !state.CurrentDiskSubMenu) {
        state.CurrentDiskSubMenu = "CUSTOMER";
      }

      //如果底部面板是隐藏状态,则开启它
      if (state.FooterBoxVisible === false) {
        state.FooterBoxVisible = true;
      }
    },

    set_CurrentDiskSubMenu(state, val) {
      state.CurrentDiskSubMenu = val;
    },

    set_HtmlFontSize(state, val) {
      state.HtmlFontSize = val;
    },

    set_FooterBoxVisible(state, val) {
      state.FooterBoxVisible = val;
    },

    set_CurrentOverlayType(state, val) {
      state.CurrentOverlayType = val;
    }
  },
  actions: {

  },
  modules: {
    modal
  }
})
