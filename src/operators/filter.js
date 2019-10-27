import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

export default () => {
  of(1, 2, 3, 4).pipe(
    filter(data => data > 2)
  ).subscribe(console.log)  // 3  4
}