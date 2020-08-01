<template>
  <div class="page Equipment_01_1">
    <ColumnItem title="设备列表">
      <div slot="header" class="toolbar">
        <el-radio-group v-model="query.prop1">
          <el-radio :label="1">按配电箱</el-radio>
          <el-radio :label="2">按网关</el-radio>
        </el-radio-group>
        <el-select style="width:1.4rem" v-model="query.Peidianxiang" clearable placeholder="请选择配电箱类型">
          <el-option v-for="i in PeidianxiangSelections" v-bind="i" :key="i.value"></el-option>
        </el-select>
      </div>

      <FxTable ref="table" :columns="columns" :query.sync="query" :options="options">
        <template #toolbar>
          <el-row style="width:100%;" align="middle">
            <el-col :span="12">
              <el-form inline @submit.native.prevent>
                <el-form-item>
                  <el-radio-group v-model="query.days" @change="refresh">
                    <el-radio-button :label="30">近30天</el-radio-button>
                    <el-radio-button :label="60">近60天</el-radio-button>
                    <el-radio-button :label="90">近90天</el-radio-button>
                    <el-radio-button :label="120">近120天</el-radio-button>
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="12">
              <el-form inline style="text-align:right;" @submit.native.prevent>
                <!-- <el-form-item>
                  <el-select v-model="query.Category" clearable placeholder="请选择设备类型">
                    <el-option v-for="i in CategorySelections" v-bind="i" :key="i.value"></el-option>
                  </el-select>
                </el-form-item>-->

                <el-form-item>
                  <el-input
                    v-model="query.key"
                    clearable
                    placeholder="请输入设备ID/所属单位"
                    @keyup.native.enter="refresh"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <a class="btn btn-primary" @click="refresh" style="padding: 0.05rem 0.1rem;line-height:1">搜索</a>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </template>
      </FxTable>
    </ColumnItem>
  </div>
</template>

<script>
/**
 * 页面内容：设备列表
 */
import {
  getEquipmentCategorySelections,
  getPDXCategorySelections,
} from "@/api";

export default {
  props: {
    Category: {},
  },

  watch: {
    Category(val) {
      this.query.Category = val;
      this.refresh();
    },
  },

  data() {
    return {
      query: {
        days: 30,
        key: "",
        Category: this.Category,
        Peidianxiang: "",
        prop1: 1,
      },

      options: {
        api: "/api/govShow?optionType=equipmentlist",
        background: "transparent",
        border: false,
        outBorder: false,
        highlightCurrentRow: false,
        paginationProps: {
          height: "0.5rem",
        },
        // toolbarProps: {
        //   height: "0.5rem",
        // },
        pagerLayout: "prev, pager, next",
      },

      CategorySelections: [],
      PeidianxiangSelections: [],
    };
  },

  computed: {
    columns() {
      return [
        {
          label: "状态",
          align: "center",
          minWidth: 50,
          prop: "IsOnline",
          render: (h, context) => {
            return context.value ? (
              <span class="color-4">在线</span>
            ) : (
              <span class="color-5">离线</span>
            );
          },
        },
        {
          label: "设备型号",
          prop: "Type",
          minWidth: 80,
          align: "center",
          showOverflowTooltip: false,
        },
        {
          label: "设备ID",
          prop: "Code",
          minWidth: 70,
          align: "center",
          showOverflowTooltip: false,
        },
        {
          label: "设备类型",
          prop: "Category",
          minWidth: 80,
          align: "center",
          showOverflowTooltip: false,
        },

        {
          label: "设备地址",
          prop: "Address",
          minWidth: 120,
          align: "center",
          resizable: true,
          showOverflowTooltip: false,
        },
        {
          label: "控制器地址",
          prop: "CtrlAddress",
          minWidth: 100,
          align: "center",
          resizable: true,
          showOverflowTooltip: false,
        },
        {
          label: "报警数",
          align: "center",
          minWidth: 70,
          prop: "WarningCount",
          render: (h, context) => {
            const { row, value } = context;
            return (
              <span>
                <span class="color-1">{row.WarningOKCount}</span>/
                <span>{value}</span>
              </span>
            );
          },
        },
        {
          label: "故障数",
          align: "center",
          minWidth: 70,
          prop: "ErrorCount",
          render: (h, context) => {
            const { row, value } = context;
            return (
              <span>
                <span class="color-2">{row.ErrorOKCount}</span>/
                <span>{value}</span>
              </span>
            );
          },
        },
      ];
    },
  },

  methods: {
    refresh() {
      this.$message("刷新");

      this.$refs.table.refreshTable();
    },

    viewPlaceDetail(row) {
      alert(row.PlaceName + ":" + row.PlaceId);
    },
  },

  created() {
    getEquipmentCategorySelections().then((res) => {
      if (res.bl) {
        this.CategorySelections = res.data.rows.map((i) => ({
          label: i.Name,
          value: i.Id,
        }));
      }
    });

    getPDXCategorySelections().then((res) => {
      if (res.bl) {
        this.PeidianxiangSelections = res.data.rows.map((i) => ({
          label: i.Name,
          value: i.Id,
        }));
      }
    });
  },
};
</script>

<style lang="scss">
.Equipment_01_1 .toolbar {
  position: absolute;
  top: .1rem;
  right: .1rem;
  display: flex;
  align-items: center;

  .el-radio {
    margin-right: 0.15rem;
  }

  .el-radio__label {
    font-size: 0.12rem;
    padding-left: 0.05rem;
  }

  .el-radio__input {
    transform: scale(0.8);
  }
}
</style>