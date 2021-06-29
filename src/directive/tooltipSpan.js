export default {
    // 指令钩子
    inserted(el, binding) {
        // el 指定作用到哪个元素上
        // 获取使用指令时传递的值
        const {value} = binding
        if(value) {
            //console.log(111,binding,el,el.children[1],el.children[1].style);
            //console.log("scrollWidth =", el.scrollWidth, ", clientWidth =", el.clientWidth,el.scrollWidth >= el.clientWidth+62);
            //元素内文本超过元素本身长度
            if(el.scrollWidth > el.clientWidth){
                el.children[1].style.display = 'inline-block';
                el.removeChild(el.children[0]);
                
            }else{  
                el.removeChild(el.children[1]);
            }
        }else{
            return false
        }
    },
    //组件更新时会调用
    /* update(el, binding){
        const {value} = binding
        if(value) {
            console.log(333,binding,el);
            //console.log(el.)
        }else {
            console.log(444,binding,el)
            return false
        }
    } */
}