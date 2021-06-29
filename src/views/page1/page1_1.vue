<template>
  <div>
    <div class="btnBox">
      <el-button type="primary" size="small" @click="go">跳转</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "page1_1",
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push({
        name: "page2_2",
        query: {
          planId: '2323',
          sectionId: '3333',
          sitename: 'djsaid',
        },
      });
      console.log(this.$route);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
