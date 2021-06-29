//此文件设置一些常用的样式固定，会被导入到vuex仓库中保存起来供使用，title会被导入到permission.js中，当项目加载时设置浏览器标题
module.exports = {

  title: '管理系统',

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true, //固定右侧头部

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,//显示左侧slidebar的最上面的logo
}
