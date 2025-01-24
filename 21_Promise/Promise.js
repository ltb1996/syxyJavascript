// 简单的promise例子
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('syxy Promise resolved');
    }, 1000);
  });
// 打印 'Promise resolved' 到控制台
promise.then(value => console.log(value));


// .then的链式调用
promise
  .then(value => {
    console.log(".then的链式调用")
    console.log(value);
    return value + ' syxy';
  })
  .then(newValue => console.log(newValue));

// .catch捕获错误
promise
  .then(value => {
    throw new Error('syxy Something went wrong');
  })
  .catch(error => console.error(error));
