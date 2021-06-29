<template>
  <section class="app-main">
      <transition enter-active-class="animate__animated animate__fadeIn">
        <content-page :title="$route.meta.title" :key="key">
          <keep-alive :include="cachedViews">
            <router-view :key="key" />
          </keep-alive>
        </content-page>
      </transition>
  </section>
</template>

<script>
import ContentPage from './contentPage'
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  components:{
    ContentPage
  }
}
</script>

<style scoped lang="scss">
// .app-main {
//   /*50 = navbar  */
//   min-height: calc(100vh - 50px);
//   width: 100%;
//   position: relative;
//   overflow: hidden;
// }
// .fixed-header+.app-main {
//   padding-top: 50px;
// }
.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    height:100vh;
    overflow: hidden;
    background: #f8f8f8;
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    // padding-right: 15px;
  }
}
</style>
