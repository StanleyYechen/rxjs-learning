## rxjs-learning

### from 方法
``` javascript 
  // 将一个可遍历对象转换为 Observable
  from([1, 2,3 ])
  // 根据一个 promise 对象创建 Observable
  const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve')
    }, 1000);
  });
  from(pro).subscribe(console.log)  // resolve
```

