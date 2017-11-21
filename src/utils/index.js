/**
 * created by yxy 2017/11/19 
 * 事件函数
 */
//换肤加class函数
export function toggleClass(element, className) {
    if (!element || !className) {
      return
    }
    element.className = className;
}