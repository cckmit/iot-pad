<template>
  <div class="page">
    <ColumnItem title="回路控制">
      <div
        slot="header"
        style="position:absolute;right:0;top:.1rem;display:flex;align-items:center;"
      >
        <el-select
          style="width:1.1rem;"
          class="fixed-selector"
          @change="refresh"
          v-model="query.Peidianxiang"
          clearable
          placeholder="请选择配电箱"
        >
          <el-option v-for="i in PeidianxiangSelections" v-bind="i" :key="i.value"></el-option>
        </el-select>
        <a
          class="btn btn-primary"
          @click="control"
          style="padding:.03rem .1rem;margin-left:.1rem"
        >控制</a>
      </div>

      <div class="loops" v-loading="loading">
        <Loop
          v-for="(i,index) in loops"
          :key="index"
          :code="i.code"
          :state="i.state"
          :icons="i.icons"
        />
      </div>
    </ColumnItem>
  </div>
</template>

<script>
import Loop from "@/components/Loop.vue";
import { getLoopDetail, getPDXCategorySelections } from "@/api";

export default {
  components: {
    Loop,
  },

  data() {
    return {
      loading: false,

      PeidianxiangSelections: [],
      loops: [],

      query: {
        Peidianxiang: "",
      },
    };
  },

  methods: {
    refresh() {
      this.loading = true;
      getLoopDetail()
        .then((res) => {
          if (res.bl) {
            const { vm, loops } = res.data;

            this.vm = vm;

            this.loops = loops;
          }
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    control() {
      const _this = this;
      this.$modal({
        id: "Pad_04_1",
        placement: "center",
        width: "6rem",
        height: "5rem",
        component: "Pad_04_1",
        actions: {
          cancel() {
            _this.$modal.close("Pad_04_1");
          },
          confirm() {
            _this.$modal.close("Pad_04_1");
          },
        },
      });
    },
  },
  mounted() {
    getPDXCategorySelections().then((res) => {
      if (res.bl) {
        this.PeidianxiangSelections = res.data.rows.map((i) => ({
          label: i.Name,
          value: i.Id,
        }));
      }
    });
    this.refresh();
  },
};
</script>

<style lang="scss">
.loops {
  height: calc(100% - 0.2rem);
  overflow-y: auto;
  box-shadow: inset 0 -2px 3px 1px rgba(22, 129, 179, 0.1);
}
</style>