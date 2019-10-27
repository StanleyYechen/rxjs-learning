import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

export default () => {
  // 只要出现第一个不满足条件的 停止take
  of(1, 2, 3, 4).pipe(
    takeWhile(x => x < 3)
  ).subscribe(console.log)
}