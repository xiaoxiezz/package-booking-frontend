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
        <a-form-item label="收件人" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            placeholder="李亚娥"
            v-decorator="[
          'receiver',
          {rules: [{ required: true, message: '请输入收件人！' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="电话" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            placeholder="13255555555"
            v-decorator="[
          'phoneNumber',
          {rules: [{ required: true, message: '请输入电话！' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="运单号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            placeholder="3KG"
            v-decorator="[
          'weight',
          {rules: [{ required: true, message: '请输入重量！' }]}
        ]"
          />
        </a-form-item>
        <a-button type="primary" html-type="submit">提交</a-button>
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
    }
  }
};
</script>

<style scoped>
</style>