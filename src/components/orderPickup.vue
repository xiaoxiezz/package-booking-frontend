<template>
   <a-row>
    <a-col :span="6"></a-col>
    <a-col :span="12">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="运单号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          placeholder="201909050001"
          v-decorator="[
          'waybillNo',
          {rules: [{ required: true, message: '请输入运单号！' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="取件时间" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-date-picker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Select Time"
          @change="onChange"
          @ok="onOk"
        />
      </a-form-item>
      <a-button type="primary" html-type="submit">预约</a-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a-button type="primary" html-type="reset">取消</a-button>
    </a-form>
    </a-col>
   </a-row>
</template>

<script>
import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

Vue.use(Antd);

export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    onChange(value, dateString) {
      console.log("Selected Time: ", value);
      console.log("Formatted Selected Time: ", dateString);
    },
    onOk(value) {
      console.log("onOk: ", value);
    }
  }
};
</script>

<style scoped>
</style>