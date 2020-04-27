import {
  Subject,
  ReplaySubject,
  BehaviorSubject,
  zip,
  from,
  interval,
  fromEvent
} from 'rxjs';
import { map, tap } from 'rxjs/operators';

const subjectDemo = () => {
  const words = ['Hot Dog', 'Pizza', 'Hamburger'];

  const mySubject = new Subject();

  const trickleWords = zip(
    from(words),
    interval(750),
    fromEvent(document, 'click'),
  ).pipe(
    tap(x => console.log(x)),
    map(([word, num, event]) => word)
  );

  const subscription1 = mySubject.subscribe(x => {
    console.log(x.toUpperCase());
  });

  const subscription2 = mySubject.subscribe(x => {
    console.log(
      x
        .toLowerCase()
        .split('')
        .reverse()
        .join('')
    );
  });

  trickleWords.subscribe(mySubject);
};

const asObservableDemo = () => {
  const mySubject = new Subject();
  const obs = mySubject.asObservable();
  obs.next('test');  // error
};

const replaySubjectDemo = () => {
  // replay 2 push
  const mySubject = new ReplaySubject(2);

  mySubject.next(1);
  mySubject.next(2);
  mySubject.next(3);
  mySubject.next(4);

  mySubject.subscribe(x => console.log(`From 1st sub: ${x}`));

  mySubject.next(5);

  mySubject.subscribe(x => console.log(`From 2nd sub: ${x}`));
};

const behaviorSubjectDemo = () => {
  const mySubject = new BehaviorSubject('Hey now!');

  mySubject.subscribe(x => console.log(`From 1st sub: ${x}`));

  mySubject.next(5);

  mySubject.subscribe(x => console.log(`From 2nd sub: ${x}`));
};

export default {
  subjectDemo,
  asObservableDemo,
  replaySubjectDemo,
  behaviorSubjectDemo,
}
