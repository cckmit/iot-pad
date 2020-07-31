<template>
  <div class="app">
    <Modal />

    <Headerbar></Headerbar>

    <!-- 面板层 -->
    <Layer :index="2" class="panel-layer">
      <div class="flex-container" style="height:45%">
        <Panel :flex="2.2">
          <Pad_01 />
        </Panel>
        <Panel :flex="2">
          <Pad_02 />
        </Panel>
        <Panel :flex="4">
          <Pad_03 />
        </Panel>
      </div>
      <div class="flex-container" style="height:55%;">
        <Panel :flex="3.5">
          <Pad_04 />
        </Panel>
        <Panel :flex="6.5">场所信息</Panel>
      </div>
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
    </Layer>-->
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import Modal from "@/components/modal";
Vue.use(Modal);
import SvgIcon from "@/components/SvgIcon";
Vue.use(SvgIcon);
import Percentbar from "@/components/Percentbar";
Vue.component(Percentbar.name, Percentbar);
import Panel from "@/components/Panel.vue";
Vue.component(Panel.name || "Panel", Panel);
import ColumnItem from "@/components/ColumnItem.vue";
Vue.component(ColumnItem.name || "ColumnItem", ColumnItem);

import Layer from "@/components/Layer.vue";
import Headerbar from "@/components/Headerbar.vue";

export default {
  name: "App",

  components: {
    Layer,
    Modal,
    Headerbar,
  },

  data() {
    return {
      debug: false,

      show: false,
    };
  },

  computed: {
    ...mapState({
      // modal_list: state => state.modal.modal_list,
      // CurrentRegions: state => state.CurrentRegions,
      CurrentDiskMenu: (state) => state.CurrentDiskMenu,
      CurrentDiskSubMenu: (state) => state.CurrentDiskSubMenu,
      // HtmlFontSize: state => state.HtmlFontSize,
      FooterBoxVisible: (state) => state.FooterBoxVisible,
      // CurrentOverlayType: state => state.CurrentOverlayType
    }),
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
  },
};
</script>

<style lang="scss" src="./App.scss"></style>
