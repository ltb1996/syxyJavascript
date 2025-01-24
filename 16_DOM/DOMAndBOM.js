const el = document.getElementById('myId')
const elBySelector = document.querySelector('#myId')

const els = document.getElementsByClassName('myClass')
const elsByTag = document.getElementsByTagName('div')
const elsBySelectorAll = document.querySelectorAll('.myClass')

el.innerHTML = '<strong>Hello, World!</strong>' // 修改 HTML 内容
el.textContent = 'Hello, World!' // 修改文本内容

el.style.color = 'red' // 修改文本颜色
el.style.backgroundColor = 'black' // 修改背景颜色

const newEl = document.createElement('div') // 创建新元素
document.body.appendChild(newEl) // 添加新元素

const oldEl = document.querySelector('#myId')
document.body.removeChild(oldEl) // 删除元素

window.open('https://www.baidu.com', '_blank') // 在新窗口中打开baidu

const width = window.innerWidth // 获取窗口宽度
const height = window.innerHeight // 获取窗口高度

console.log(`窗口宽度：${width}，窗口高度：${height}`)

setTimeout(() => {
  console.log('Hello, syxy JavaScript!')
}, 1000) // 1 秒后输出 Hello, syxy JavaScript!

setInterval(() => {
  console.log('Hello, syxy JavaScript!')
}, 1000) // 每隔 1 秒输出 Hello, syxy JavaScript!
