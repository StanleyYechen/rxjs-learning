import { fromEvent, interval } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

export default () => {
  const click$ = fromEvent(document, 'click');
  const timer$ = interval(1000);
  const result = click$.pipe(withLatestFrom(timer$));
  
  result.subscribe(x => console.log(x));
}

