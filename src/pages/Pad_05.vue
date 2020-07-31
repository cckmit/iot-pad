<template>
  <div class="page">
    <ColumnItem title="设备统计" v-loading="loading">
      <div class="flex-container" style="height:50%">
        <div class="flex-item" style="width:25%">
          <div class="flex-item__header">各设备数量</div>
          <div class="flex-item__body"></div>
        </div>
        <div class="flex-item" style="width:30%">
          <div class="flex-item__header">设备在线率</div>
          <div class="flex-item__body"></div>
        </div>
        <div class="flex-item" style="width:45%">
          <div class="flex-item__header">设备状态</div>
          <div class="flex-item__body"></div>
        </div>
      </div>

      <div class="flex-container" style="height:50%">
        <div class="flex-item">
          <div class="flex-item__header">各设备运行趋势图</div>
          <div class="flex-item__body"></div>
        </div>
      </div>
    </ColumnItem>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    refresh() {
      this.loading = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-item {
}
</style>