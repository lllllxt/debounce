/**
 * 防抖函数
 * @description 在[delay]毫秒内只执行一次fn的方法
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  默认：500，延迟时间，单位毫秒（ms）
 * @param immediate {Boolean}  默认：false，是否立即执行，true：先执行在计时，false：先计时在执行
 *
 * @return {Function}
 */
declare function debounce(fn: () => void, delay?: number, immediate?: boolean): () => void;
export default debounce;
