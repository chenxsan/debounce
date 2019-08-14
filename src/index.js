export default function debounce(func, timeout) {
  var timer
  return function() {
    var context = this
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(context, arguments) // 指定 func 的执行上下文
    }, timeout)
  }
}
export function debounce_leading(func, timeout) {
  var run = false
  var timer // 定时器
  return function() {
    var context = this
    if (!run) {
      func.apply(context, arguments)
    }

    run = true
    if (timer) {
      // 检查 timer 是否已有，若有，则清理掉，并重新创建 - 这是对连续快速点击的惩罚
      window.clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // timeout 时间结束时将 run 重置为 false 以允许 func 再度执行
      run = false
    }, timeout)
  }
}
