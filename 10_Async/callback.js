function callback() {
  console.log('Hello, JavaScript!')
}

setTimeout(callback, 1000)
console.log('hello')
// hello
// Hello, JavaScript! (1 秒后输出)

setTimeout(() => {
  console.log('Hello, syxy JavaScript!')
  setTimeout(() => {
    console.log('Hello, syxy HTML!')
    setTimeout(() => {
      console.log('Hello, syxy CSS!')
    }, 1000)
  }, 1000)
}, 1000)
