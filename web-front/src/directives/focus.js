//自动聚焦
const focus = {
    // Vue.directive('focus', {
        inserted (el) {
            if(el.tagName.toLocaleLowerCase() == 'input'){
            el.focus()
            }else{
            if(el.getElementsByTagName('input')){
                el.getElementsByTagName('input')[0].focus()
            }
            }
        }, 
    // })
}
export default focus