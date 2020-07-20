Function.prototype.call2 = function (context, ...args) {
  context = context || global
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

// 测试一下
var value = 2;

var obj = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.call2(null); // 2

console.log(bar.call2(obj, 'kevin', 18));