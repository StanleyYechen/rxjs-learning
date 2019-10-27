import { defer, of } from 'rxjs';

export default () => {
  const source$ = defer(() => of(1))

  setTimeout(() => {
    source$.subscribe(console.log)
  }, 2000);
}