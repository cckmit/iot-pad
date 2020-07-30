<template>
  <div class="page Pad_03">
    <ColumnItem title="案件列表">
      <FxTable ref="table" :columns="columns" :query.sync="query" :options="options"></FxTable>

      <el-radio-group
        slot="header"
        v-model="query.Category"
        @change="refresh"
        style="position:absolute;right:0;top:.1rem;"
      >
        <el-radio-button label>全部</el-radio-button>
        <el-radio-button label="1">报警</el-radio-button>
        <el-radio-button label="2">故障</el-radio-button>
        <!-- <el-radio-button label="3">报警且故障</el-radio-button> -->
      </el-radio-group>
    </ColumnItem>
  </div>
</template>

<script>
/**
 * 页面内容：案件列表
 */
export default {
  data() {
    return {
      vDays: this.days,

      query: {
        Category: "",
      },

      options: {
        api: "/api/govShow?optionType=recordlist",
        background: "transparent",
        border: false,
        outBorder: false,
        highlightCurrentRow: false,
        pagination: false,
        toolbar: false,
        pagerLayout: "prev,pager,next",
        resHandler(res) {
          return res.rows;
        },
      },
    };
  },

  computed: {
    columns() {
      const _this = this;
      return [
        {
          label: "设备ID",
          prop: "ID",
          minWidth: 70,
          align: "center",
          showOverflowTooltip: false,
        },
        {
          label: "设备类型",
          align: "center",
          minWidth: 85,
          showOverflowTooltip: false,
          resizable: true,
          prop: "type",
        },
        {
          label: "发生时间",
          align: "center",
          minWidth: 85,
          prop: "time",
        },
        {
          label: "状态",
          align: "center",
          minWidth: 60,
          showOverflowTooltip: false,
          prop: "status",
          render: (h, context) => {
            const obj = {
              1: {
                txt: "报警",
                class: "color-1",
              },
              2: {
                txt: "故障",
                class: "color-2",
              },
              3: {
                txt: "报警且故障",
                class: "color-3",
              },
            }[context.value];
            return <span class={obj.class}>{obj.txt}</span>;
          },
        },
        {
          label: "处理状态",
          align: "center",
          minWidth: 85,
          prop: "handleStatus",
          render: (h, context) => {
            const obj = {
              1: {
                txt: "待处理",
                class: "color-1",
              },
              2: {
                txt: "已处理",
                class: "color-4",
              },
            }[context.value];
            return <span class={obj.class}>{obj.txt}</span>;
          },
        },
        {
          label: "操作",
          prop: "Id",
          minWidth: 60,
          align: "center",
          showOverflowTooltip: false,
          render: (h, context) => {
            return (
              <div
                class="btn btn-primary btn-sm"
                on-click={() => {
                  _this.operate(context.row);
                }}
              >
                <i class="el-icon-edit"></i>
              </div>
            );
          },
        },
        {
          label: "处理",
          prop: "Id",
          minWidth: 60,
          align: "center",
          showOverflowTooltip: false,
          render: (h, context) => {
            return (
              <div
                class="btn btn-info btn-sm"
                on-click={() => {
                  _this.handle(context.row);
                }}
              >
                <i class="el-icon-edit"></i>
              </div>
            );
          },
        },
      ];
    },
  },

  methods: {
    refresh() {
      this.$refs.table.refreshTable();
    },

    viewPlaceDetail(row) {
      alert(row.place);
    },

    //处理
    handle() {
      const _this = this;
      this.$modal({
        id: "Pad_03_1",
        placement: "center",
        width: "6rem",
        height: "4.6rem",
        component: "Pad_03_2",
        actions: {
          cancel() {
            _this.$modal.close("Pad_03_1");
          },
          confirm() {
            _this.$modal.close("Pad_03_1");
          },
        },
      });
    },

    //操作
    operate() {
      const _this = this;
      this.$modal({
        id: "Pad_03_1",
        placement: "center",
        width: "3.6rem",
        height: "2.2rem",
        component: "Pad_03_1",
        actions: {
          cancel() {
            _this.$modal.close("Pad_03_1");
          },
          confirm() {
            _this.$modal.close("Pad_03_1");
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 0 0.1rem 0.1rem 0.2rem;
}
</style>

<style lang="scss">
.Pad_03 {
  .fx-table {
    * {
      font-size: 0.12rem;
    }

    .fx-table--body .fx-table--main {
      padding: 0;
    }
  }
}
</style>