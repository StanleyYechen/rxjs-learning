import { timer } from 'rxjs';

export default () => {
  // timer(delay, step)
  timer(3000, 1000).subscribe(console.log)
}