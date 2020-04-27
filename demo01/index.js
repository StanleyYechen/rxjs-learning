import { interval, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, pluck, map, share, take } from 'rxjs/operators';

const cold2Hot = () => {
  const endpoint = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';

  const obs$ = interval(4000).pipe(
    switchMap(() => ajax({ url: endpoint, resourceType: 'json', method: 'GET' })),
    pluck('response'),
    map(res => res.filter((_, index) => index < 6)),
    take(4),
    share()  // change cold pipe to hot
  );

  const sub1 = obs$.subscribe(val => {
    console.log('Sub1:', val);
  });

  setTimeout(() => {
    const sub2 = obs$.subscribe(val => {
      console.log('Sub2:', val);
    });
  }, 10000);
};

const hot2Cold = () => {
  const obsFactory = () => fromEvent(document, 'click').pipe(
    map(event => ({
      clientX: event.clientX,
      clientY: event.clientY
    }))
  );

  const sub1 = obsFactory().subscribe(val => {
    console.log('Sub1:', val);
  });

  setTimeout(() => {
    console.log('Start sub2');
    const sub2 = obsFactory().subscribe(val => {
      console.log('Sub2:', val);
    });
  }, 4000);
}

export default {
  cold2Hot,
  hot2Cold,
};
