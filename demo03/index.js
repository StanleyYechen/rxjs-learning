import { from, zip } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export default () => {
  console.group('array');
  let myArr = ['🐦', '😺', '🐕', '🐊'];
  from(myArr).pipe(
    filter(x => x !== '🐦'),
    map(x => `hello ${x}`)
  ).subscribe(console.log);
  console.groupEnd();

  console.group('generator')
  function* generateName() {
    yield 'Cat';
    yield 'Dog';
    yield 'Bird';
    return;
  }

  function* generateEmoji() {
    yield '😺';
    yield '🐕';
    yield '🐦';
    return;
  }

  function* generateSound() {
    yield 'Meow';
    yield 'Woof';
    yield 'Tweet';
    return;
  }

  zip(
    from(generateName()),
    from(generateEmoji()),
    from(generateSound())
  ).pipe(
    map(([name, emoji, sound]) => `the ${name} ${emoji} goes ${sound}!`)
  ).subscribe(console.log);
  console.groupEnd();

  console.group('dom list');
  const doms = document.querySelectorAll('h2');
  from(doms).pipe(
    map(dom => dom.textContent)
  ).subscribe(console.log);
  console.groupEnd();

  console.group('string');
  const str = 'hi!';
  from(str).subscribe(console.log);
  console.groupEnd();

  console.group('promise');
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise');
    }, 2000);
  });

  from(myPromise).subscribe(x => console.log(`Hello ${x}`));

}