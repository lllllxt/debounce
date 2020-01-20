/**
 * 防抖函数
 * @description 在[delay]毫秒内只执行一次fn的方法
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，单位毫秒（ms）
 *
 * @return {Function}
 */
function debounce(fn: () => void, delay: number = 500) {
  let timer = null;
  return function() {
    // 保存函数调用时的上下文和参数，传递给 fn
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

export default debounce;
