<template>
  <div class="page">
    <ColumnItem title="操作">
      <div class="item" style="margin-top:.24rem">
        <el-radio-group v-model="vm.prop1">
          <el-radio :label="1">静音</el-radio>
          <el-radio :label="2">取消静音</el-radio>
          <el-radio :label="3">复位</el-radio>
        </el-radio-group>
      </div>
      <div class="item">
        <el-radio-group v-model="vm.prop2">
          <el-radio :label="1">断路</el-radio>
          <el-radio :label="2">通路</el-radio>
        </el-radio-group>
      </div>
      <div class="item" style="text-align:right;padding-top:.3rem">
        <a class="btn btn-primary" @click="onConfirm">确认</a>
        <a class="btn" @click="onCancel">取消</a>
      </div>
    </ColumnItem>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vm: {
        prop1: 1,
        prop2: 1,
      },
    };
  },

  methods: {
    onConfirm() {
      this.$emit("confirm");
    },

    onCancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  margin-bottom: 0.24rem;
  font-size: 0.14rem;

  &:last-child {
    margin-bottom: 0;
  }

  &::after {
    content: "";
    height: 0;
    display: table;
    clear: both;
  }

  .el-radio-group {
    margin-left: 0.2rem;
  }
}
</style>