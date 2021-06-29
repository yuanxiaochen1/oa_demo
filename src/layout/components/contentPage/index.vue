<template>
  <el-card :body-style="bodyStyle" class="box-card">
    <template>
      <slot></slot>
    </template>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      bodyStyle: {
        width: "100%",
        height: "calc(100vh - 105px)",
        boxSizing: "border-box",
      },
    };
  },
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  margin: 10px;
  height: calc(100vh - 105px);
}
</style>
