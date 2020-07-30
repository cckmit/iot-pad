<template>
  <div class="page">
    <ColumnItem title="当前预警机制" v-loading="loading">
      <div class="flex-container">
        <div class="ball" :style="getBallStyle(mode)">
          <div class="boll-title">{{modeMap[mode].name}}</div>
          <div class="boll-subtitle">{{modeMap[mode].time}}</div>
        </div>
        <div class="msg">{{changeType}}</div>
      </div>
      <a class="fixed-btn" slot="header" @click="changeMode">切换</a>
    </ColumnItem>
  </div>
</template>

<script>
import Color from "color";

export default {
  data() {
    return {
      modeMap: {
        1: {
          name: "上班模式",
          color: new Color("rgb(48,104,204)"),
          time: "06:00-08:00",
        },
        2: {
          name: "下班模式",
          color: new Color("rgb(112,110,214)"),
          time: "06:00-08:00",
        },
        3: {
          name: "休息模式",
          color: new Color("rgb(60,160,110)"),
          time: "06:00-08:00",
        },
      },

      mode: 1,

      loading: false,

      changeType: "自动切换",
    };
  },

  methods: {
    getBallStyle(mode = 1) {
      const color = this.modeMap[mode].color;
      return {
        backgroundImage: `linear-gradient(to bottom,${color
          .whiten(0.4)
          .rgb()
          .string()},${color} 25.68%,${color})`,
      };
    },

    //切换预警机制
    changeMode() {
      const _this = this;
      this.$modal({
        id: "Pad_02_1",
        placement: "center",
        width: "3.6rem",
        height: "3.5rem",
        component: "Pad_02_1",
        actions: {
          cancel() {
            _this.$modal.close("Pad_02_1");
          },
          confirm() {
            _this.$modal.close("Pad_02_1");
          },
        },
      });
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.page {
  padding: 0 0.1rem 0.1rem 0.2rem;
}

.flex-container {
  flex-direction: column;
  align-items: center;
  padding: 0.1rem 0;
  height: 100%;
  justify-content: center;
}

.ball {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  // background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .boll-title,
  .boll-subtitle {
    color: #fff;
    text-align: center;
    letter-spacing: 0.005rem;
  }
  .boll-title {
    font-size: 0.2rem;
  }
  .boll-subtitle {
    padding-top: 0.05rem;
    font-size: 0.14rem;
  }
}

.msg {
  color: rgb(146, 208, 255);
  font-size: 0.16rem;
  margin-top: 0.2rem;
}

.fixed-btn {
  position: absolute;
  top: 0.1rem;
  right: 0;

  color: #fff;
  font-size: 0.13rem;
  text-align: center;
  border-radius: 0.03rem;
  padding: 0.02rem 0.05rem;
  background: rgb(37, 111, 192);
  cursor: pointer;
}
</style>