<template>
  <div class="page">
    <ColumnItem title="场所信息" v-loading="loading">
      <div class="flex-container" style="padding-right:.1rem">
        <ul class="left">
          <li class="item">
            <div class="th">场所名称</div>
            <p>{{vm.prop1||'-'}}</p>
          </li>
          <li class="item">
            <div class="th">所属项目</div>
            <p>{{vm.prop2||'-'}}</p>
          </li>
          <li class="item">
            <div class="th">经营范围</div>
            <p>{{vm.prop3||'-'}}</p>
          </li>
          <li class="item">
            <div class="th">负责人</div>
            <p>{{vm.prop4||'-'}}</p>
          </li>
          <li class="item">
            <div class="th">联系电话</div>
            <p>{{vm.prop5||'-'}}</p>
          </li>
        </ul>
        <div class="right">
          <el-image :src="vm.imgSrc || defaultImage"></el-image>
        </div>
      </div>
      <div class="item">
        <div class="th">场所地址</div>
        <p>{{vm.prop2||'-'}}</p>
      </div>
    </ColumnItem>
  </div>
</template>

<script>
/**
 * 页面内容：Pad 场所信息
 */
import defaultImage from "@/assets/img/default_building.jpg";
import { getPlaceDetail } from "@/api";

export default {
  data() {
    return {
      defaultImage,
      vm: {
        prop1: "",
        prop2: "",
        prop3: "",
        prop4: "",
        prop5: "",
        prop6: "",
        prop7: "",
      },

      loading: false,
    };
  },

  methods: {
    refresh() {
      this.loading = true;
      getPlaceDetail()
        .then((res) => {
          if (res.bl) {
            this.vm = res.data.vm;
          }
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },

  created() {
    this.refresh();
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 0 0.1rem 0.1rem 0.2rem;
}
.left {
  flex: 5.5;
}

.item {
  margin-bottom: 0.05rem;
  font-size: 0.12rem;
  &:last-child {
    //   margin-bottom: 0;
  }

  .th {
    color: rgb(76, 164, 252);
  }
  p {
    font-weight: bold;
  }
}
.right {
  flex: 4.5;
  padding-left: 0.1rem;
  .el-image {
    border-radius: 0.04rem;
  }
}
</style>