import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export default () => {
  fromEvent(document, 'click').pipe(
    mapTo('Hi')
  ).subscribe(console.log)  // Hi
}