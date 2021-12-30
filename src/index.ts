/**
 * 防抖函数
 * @description 在[delay]毫秒内只执行一次fn的方法
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  默认：500，延迟时间，单位毫秒（ms）
 * @param immediate {Boolean}  默认：false，是否立即执行，true：先执行在计时，false：先计时在执行
 *
 * @return {Function}
 */
function debounce(fn: () => void, delay: number = 500, immediate: boolean = false) {
  let timer: any = null;
  let canExecute = true; // immediate = true时才有用
  return function () {
    // 保存函数调用时的上下文和参数，传递给 fn
    const context = this;
    const args = arguments;

    if (immediate && canExecute) {
      canExecute = false;
      fn.apply(context, args);
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      canExecute = true;
      !immediate && fn.apply(context, args); // immediate=true时已在前面调用过，无需再此处调用
    }, delay);
  };
}

export default debounce;
