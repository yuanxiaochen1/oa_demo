//引入所有全局要注册的指令
import tooltipSpan from './tooltipSpan'

export default (Vue) => {
    // 第1个参数是指令名，v-hasBtn 使用，而在声明指令名时候不能加 v-
    Vue.directive('tooltipSpan', tooltipSpan);
}
