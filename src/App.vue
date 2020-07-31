<template>
  <div class="app">
    <Modal />

    <Headerbar></Headerbar>

    <!-- 面板层 -->
    <Layer :index="2" class="panel-layer">
      <div class="flex-container" style="height:45%">
        <Panel :flex="2.2">
          <Pad_01 ref="page_1" />
        </Panel>
        <Panel :flex="2">
          <Pad_02 ref="page_2" />
        </Panel>
        <Panel :flex="4">
          <Pad_03 ref="page_3" />
        </Panel>
      </div>
      <div class="flex-container" style="height:55%;">
        <Panel :flex="3.5">
          <Pad_04 ref="page_4" />
        </Panel>
        <Panel :flex="6.5">
          <Pad_05 ref="page_5" />
        </Panel>
      </div>
    </Layer>
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

      refreshInterval: 5000,
    };
  },

  computed: {
    ...mapState({}),
  },

  methods: {
    TimedRefresh() {
      for (let i in this.$refs) {
        const page = this.$refs[i];

        if (page && "function" === typeof page.refresh) {
          page.refresh();
        }
      }

      setTimeout(() => {
        this.TimedRefresh();
      }, this.refreshInterval);
    },
  },

  mounted() {
    setTimeout(() => {
      this.show = true;

      setTimeout(() => {
        this.TimedRefresh();
      }, this.refreshInterval);
    }, 100);
  },
};
</script>

<style lang="scss" src="./App.scss"></style>
