import { of } from 'rxjs';
import { scan, takeLast } from 'rxjs/operators';

export default () => {
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  const obj3 = { c: 3 };

  of(obj1, obj2, obj3).pipe(
    scan((acc, cur) => Object.assign(acc, cur)),
    takeLast(1)
  ).subscribe(console.log) // { a:1, b:2, c:3 }
}