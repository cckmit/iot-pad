<template>
  <div class="app">
    <Modal />

    <!-- 面板层 -->
    <Layer :index="2" v-if="show">
      <Headerbar></Headerbar>
    </Layer>

    <!-- 调试层 -->
    <!-- <Layer :index="99">
      <div class="debug" v-show="debug" style="z-index:9999">
        <pre>当前地图覆盖物显示模式:{{CurrentOverlayType}}</pre>
        <pre>modal_list:{{modal_list}}</pre>
        <pre>CurrentRegions:{{CurrentRegions}}</pre>
        <pre>CurrentDiskMenu:{{CurrentDiskMenu}}</pre>
        <pre>CurrentDiskSubMenu:{{CurrentDiskSubMenu}}</pre>
        <pre>HtmlFontSize:{{HtmlFontSize}}</pre>
        <pre>FooterBoxVisible:{{FooterBoxVisible}}<el-button
  size="mini"
  @click="$store.commit('set_FooterBoxVisible',true)"
>setTrue</el-button></pre>
      </div>
      <el-button
        class="debug-btn"
        style="z-index:9999"
        type="primary"
        size="mini"
        @click="debug=!debug"
      >Debug</el-button>
    </Layer> -->
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import Modal from "@/components/modal";
Vue.use(Modal);
import SvgIcon from "@/components/SvgIcon";
Vue.use(SvgIcon);
import ColumnItem from "@/components/ColumnItem";
Vue.component(ColumnItem.name, ColumnItem);
import Percentbar from "@/components/Percentbar";
Vue.component(Percentbar.name, Percentbar);

import Layer from "@/components/Layer.vue";
import Headerbar from "@/components/Headerbar.vue";

export default {
  name: "App",

  components: {
    Layer,
    Modal,
    Headerbar
  },

  data() {
    return {
      debug: false,

      show: false
    };
  },

  computed: {
    ...mapState({
      // modal_list: state => state.modal.modal_list,
      // CurrentRegions: state => state.CurrentRegions,
      CurrentDiskMenu: state => state.CurrentDiskMenu,
      CurrentDiskSubMenu: state => state.CurrentDiskSubMenu,
      // HtmlFontSize: state => state.HtmlFontSize,
      FooterBoxVisible: state => state.FooterBoxVisible,
      // CurrentOverlayType: state => state.CurrentOverlayType
    })
  },

  methods: {},

  created() {
    // this.$modal({
    //   title: "测试",
    //   placement: "top-right",
    //   component: () => import("@/pages/ModalPage_01.vue")
    // });
    // this.$modal({
    //   title: "测试",
    //   placement: "center",
    //   component: () => import("@/pages/ModalPage_01.vue")
    // });
    // this.$modal({
    //   placement: "center",
    //   component: "PowerBoxLoop",
    //   data: {
    //     id: "1号配电箱"
    //   }
    // });
  },

  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 100);
  }
};
</script>

<style lang="scss" src="./App.scss"></style>
