<template>
  <div class="page">
    <ColumnItem title="预警机制切换">
      <div class="item" style="margin-top:.24rem">
        <label>模式选择：</label>
        <el-radio-group v-model="vm.changeMode">
          <el-radio :label="1">手动切换</el-radio>
          <el-radio :label="2">自动切换</el-radio>
        </el-radio-group>
      </div>
      <div class="item">
        <ul class="mode-select">
          <li
            class="mode-item"
            :class="i.value===vm.mode?'active':''"
            v-for="i in modeSelections"
            v-bind="i"
            :key="i.value"
            :style="modeItemStyle(i)"
            @click="vm.mode=i.value"
          >
            <span class="mode-item__label">{{i.label}}</span>
            <span class="mode-item__time">{{i.time}}</span>
            <i class="mode-item__check el-icon-check"></i>
          </li>
        </ul>
      </div>
      <div class="item" style="text-align:right">
        <a class="btn btn-primary" @click="onConfirm">确认</a>
        <a class="btn" @click="onCancel">取消</a>
      </div>
    </ColumnItem>
  </div>
</template>

<script>
import Color from "color";

export default {
  data() {
    return {
      vm: {
        changeMode: 1,
        mode: 1,
      },

      modeSelections: [
        {
          label: "上班模式",
          value: 1,
          color: new Color("rgb(48,104,204)"),
          time: "06:00-08:00",
        },
        {
          label: "下班模式",
          value: 2,
          color: new Color("rgb(112,110,214)"),
          time: "06:00-08:00",
        },
        {
          label: "休息模式",
          value: 3,
          color: new Color("rgb(60,160,110)"),
          time: "06:00-08:00",
        },
      ],
    };
  },

  methods: {
    modeItemStyle(i) {
      const { color, value } = i;
      const isActive = this.vm.mode === value;

      return {
        color,
        backgroundImage: isActive
          ? `linear-gradient(to bottom,${color.whiten(0.1).rgb()},${color})`
          : "",
      };
    },

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

  label {
  }

  .el-radio-group {
    margin-left: 0.2rem;
    float: right;
  }
}

.mode-select {
  .mode-item {
    padding: 0.08rem 0.3rem;
    position: relative;
    box-sizing: border-box;

    border-radius: 0.07rem;
    border: 0.02rem solid;
    margin-bottom: 0.2rem;
    text-align: center;
    font-size: 0.16rem;
    transition: background 0.15s ease;
    letter-spacing: 0.006rem;

    &.active {
      color: #fff !important;
      // font-weight: bold;
      border: none;
      padding: 0.09rem 0.31rem;

      .mode-item__check {
        display: block;
      }
    }

    .mode-item__label {
      color: inherit;
      margin-right: 0.2rem;
    }
    .mode-item__time {
      color: inherit;
    }

    .mode-item__check {
      color: #fff;
      font-weight: bold;
      display: none;
      position: absolute;
      right: 0.1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>