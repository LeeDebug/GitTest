// node 环境下，任务队列的不同

setTimeout(_ => console.log('111111111'))
setImmediate(_ => console.log('----------'))

// 在 node 环境下，通常都是 setTimeout 先执行，
// 但有 10% 左右的几率，setImmediate 先执行