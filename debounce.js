(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.debounce = factory());
}(this, (function () { 'use strict';

  /**
   * 防抖函数
   * @description 在[delay]毫秒内只执行一次fn的方法
   * @param fn {Function}   实际要执行的函数
   * @param delay {Number}  延迟时间，单位毫秒（ms）
   *
   * @return {Function}
   */
  function debounce(fn) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var timer = null;
    return function () {
      // 保存函数调用时的上下文和参数，传递给 fn
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  return debounce;

})));
