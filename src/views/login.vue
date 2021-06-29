<template>
  <div class="content">
    <div class="btnBox">
      <el-button type="primary" size="small" @click="login">登陆</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  computed: {},
  methods: {
    login() {
        this.$store.dispatch("user/login",{userName:'111',passward:'222'}).then(res=>{
            console.log(res);
            this.$router.push('/')
        }).catch(sea=>{
            this.$router.push('/')
        })
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  .btnBox {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
