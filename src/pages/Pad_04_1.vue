<template>
  <div class="page">
    <ColumnItem title="回路控制">
      <div
        slot="header"
        style="position:absolute;right:0;top:.1rem;display:flex;align-items:center;"
      >
        <div class="info">
          <span>
            通路：
            <strong>{{vm.prop1}}</strong>个
          </span>
          <span>
            断路：
            <strong>{{vm.prop2}}</strong>个
          </span>
        </div>
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
      </div>

      <div class="loops" v-loading="loading">
        <LoopCtrl
          v-for="(i,index) in loops"
          :key="index"
          :code="i.code"
          :state.sync="i.state"
          :icons="i.icons"
        />
      </div>

      <div class="item" style="text-align:right;padding-top:.3rem">
        <a class="btn btn-primary" @click="onConfirm">确认</a>
        <a class="btn" @click="onCancel">取消</a>
      </div>
    </ColumnItem>
  </div>
</template>

<script>
import LoopCtrl from "@/components/LoopCtrl.vue";
import { getLoopDetail, getPDXCategorySelections } from "@/api";

export default {
  components: {
    LoopCtrl,
  },

  data() {
    return {
      loading: false,
      PeidianxiangSelections: [],
      loops: [],

      query: {
        Peidianxiang: "",
      },

      vm: {},
    };
  },

  methods: {
    refresh() {
      this.loading = true;
      getLoopDetail()
        .then((res) => {
          if (res.bl) {
            const { loops } = res.data;

            this.vm = {
              prop1: "24",
              prop2: "8",
            };

            this.loops = loops;
          }
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    onConfirm() {
      this.$emit("confirm");
    },

    onCancel() {
      this.$emit("cancel");
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

<style lang="scss" scoped>
.loops {
  margin-top: 0.1rem;
  height: calc(100% - 0.75rem);
  overflow-y: auto;
  box-shadow: inset 0 -2px 3px 1px rgba(22, 129, 179, 0.1);
}

.info {
  strong {
    color: #fff;
    font-size: 140%;
  }
  span {
    display: inline-block;
    margin-right: 0.2rem;
  }
}
</style>