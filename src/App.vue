<template>
  <div id="app">
    <template v-if="isCustomer">
      <el-card :body-style="bodyStyle" class="box-card">
        <router-view />
      </el-card>
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isCustomer: process.env.VUE_APP_CUSTOMER == "true",
      bodyStyle: {
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.box-card {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
