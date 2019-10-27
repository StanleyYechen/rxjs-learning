import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export default () => {
  const click$ = fromEvent(document, 'click');

  interval(1000).pipe(
    takeUntil(click$)
  ).subscribe(console.log)
}