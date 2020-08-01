<template>
  <div class="page Pad_05">
    <ColumnItem title="设备统计">
      <div slot="header" class="toolbar">
        <el-form :model="query" inline>
          <el-form-item prop="prop1">
            <el-radio-group v-model="query.prop1">
              <el-radio :label="1">按配电箱</el-radio>
              <el-radio :label="2">按网关</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="prop2">
            <el-select v-model="query.prop2" style="width:1rem">
              <el-option label="全部" value></el-option>
              <el-option v-for="i in selections" :key="i.value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <div class="flex-container" style="height:50%">
        <div class="flex-item rihgt-border" style="width:25%">
          <div class="flex-item__header">各设备数量</div>
          <div class="flex-item__body">
            <Equipment_01 />
          </div>
        </div>
        <div class="flex-item rihgt-border" style="width:35%">
          <div class="flex-item__header">设备在线率</div>
          <div class="flex-item__body">
            <Equipment_02 />
          </div>
        </div>
        <div class="flex-item" style="width:40%">
          <div class="flex-item__header">设备状态</div>
          <div class="flex-item__body">
            <div class="bars">
              <div class="bar-item">
                <div class="bar-item__label">仅报警</div>
                <div class="bar-item__value">
                  <Percentbar
                    :value="vm.warning"
                    mode="normal"
                    :color="colorMap.warning"
                    :maxValue="bar1.maxValue"
                  />
                </div>
              </div>
              <div class="bar-item">
                <div class="bar-item__label">仅故障</div>
                <div class="bar-item__value">
                  <Percentbar
                    :value="vm.error"
                    mode="normal"
                    :color="colorMap.error"
                    :maxValue="bar1.maxValue"
                  />
                </div>
              </div>
              <div class="bar-item">
                <div class="bar-item__label" style="line-height:1;">报警且故障</div>
                <div class="bar-item__value">
                  <Percentbar
                    :value="vm.both"
                    mode="normal"
                    :color="colorMap.both"
                    :maxValue="bar1.maxValue"
                  />
                </div>
              </div>
              <div class="bar-item">
                <div class="bar-item__label">正常</div>
                <div class="bar-item__value">
                  <Percentbar
                    :value="vm.normal"
                    mode="normal"
                    :color="colorMap.normal"
                    :maxValue="bar1.maxValue"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-container" style="height:50%">
        <div class="flex-item" style="width:100%;">
          <div class="flex-item__header">各设备运行趋势图</div>
          <div class="flex-item__body">
            <Equipment_03 />
          </div>
        </div>
      </div>
    </ColumnItem>
  </div>
</template>

<script>
import Equipment_01 from "@/pages/Equipment_01.vue";
import Equipment_02 from "@/pages/Equipment_02.vue";
import Equipment_03 from "@/pages/Equipment_03.vue";
import { colorMap } from "@/plugins/echarts";

export default {
  components: {
    Equipment_01,
    Equipment_02,
    Equipment_03,
  },

  data() {
    return {
      loading: false,

      colorMap,

      vm: {},

      bar1: {
        loading: false,
        maxValue: 100,
      },

      query: {
        prop1: 1,
        prop2: 1,
        prop3: 1,
      },

      selections: [],
    };
  },
  methods: {
    refresh() {
      this.loading = true;

      this.vm = {
        warning: 20,
        error: 12,
        both: 8,
        normal: 30,
      };

      const { warning, error, both, normal } = this.vm;

      this.bar1.maxValue = Math.max(warning, error, both, normal);

      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },

  mounted() {
    this.refresh();
  },
};
</script>

<style lang="scss" scoped>
.flex-item {
  height: 100%;
  position: relative;
  padding: 0 0.3rem;

  &.rihgt-border {
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      bottom: 0;
      right: 0;
      transform: translateY(-0.3rem);
      width: 0.01rem;
      background: rgb(32, 98, 126);
      opacity: 0.7;
    }
  }

  .flex-item__header {
    height: 0.2rem;
    line-height: 0.2rem;
    margin-bottom: 0.1rem;
    color: #fff;
  }

  .flex-item__body {
    height: calc(100% - 0.3rem);
  }
}

.bars {
  display: flex;
  margin-top: 0.2rem;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 0.2rem);
  .bar-item {
    width: 100%;
    display: flex;
    height: 25%;
    align-items: center;
    .bar-item__label {
      width: 25%;
      vertical-align: middle;
      text-align: right;
      font-size: 0.12rem;
    }
    .bar-item__value {
      width: 70%;
    }
  }
}
</style>

<style lang="scss">
.Pad_05 .toolbar {
  position: absolute;
  top: 0;
  right: 0;

  .el-radio{
    margin-right: .15rem;
  }

  .el-radio__label {
    font-size: 0.12rem;
    padding-left: .05rem;
  }

  .el-radio__input {
    transform: scale(0.8);
  }
}
</style>