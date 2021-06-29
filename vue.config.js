"use strict";
const path = require("path");
const defaultSettings = require("./src/settings.js");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = defaultSettings.title || "vue Admin Template"; // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 8080; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: "/demo",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false, //process.env.NODE_ENV === 'development',
  productionSourceMap: true,
  css: {
    sourceMap: false,
  },
  devServer: {
    port: port,
    open: true,
    hot: true,
    inline: true,
    watchOptions: {
      poll: true,
    },
    overlay: {
      warnings: false,
      errors: true,
    },
    //解决开发环境跨域，生产环境此配置无效需要用服务器里面的nginx重新配置代理
    proxy: {
      // 引入env.development中配置的变量路径作为转发的路径,实际上就是‘/web-zhenfantong’
      "/dd_backend": {
        target: "http://121.41.170.93:80", //测试环境
        // target: "http://192.168.0.193:8080", //柯楠本地环境
        // target: "http://192.168.0.196:8080", //波哥本地环境
        // target:'http://www.ricebucket.com.cn',
        // target:'https://www.ricebucket.cn',//正式环境
        changeOrigin: true, //解决跨域 axios里面我加上了一个基路径/web-zhenfantong
        // pathRewrite:{
        //   "^/api":''//重写路径，将/web-zhenfantong去掉，写接口时都加上/web-zhenfantong，转发时再去掉，不去掉就例：http://mengxuegu.com:7300/mock/5fcb0ff06abe342cf530894c/web-zhenfantong/web-zhenfantong/test
        // }
      },
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial",
      },
    ]);

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete("prefetch");

    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    config.when(process.env.NODE_ENV !== "development", (config) => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // only package third parties that are initially dependent
          },
          elementUI: {
            name: "chunk-elementUI", // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk("single");
    });
  },
};
