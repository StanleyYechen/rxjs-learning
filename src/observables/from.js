import { from } from 'rxjs';

export default () => {
  const pro = new Promise((resolve, rejcet) => {
    setTimeout(() => {
      resolve('promise is resolved')
    }, 1000);
  });

  from(pro).subscribe(console.log);  // promise is resolved
}