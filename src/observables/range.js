import { range } from 'rxjs';

export default () => {
  range(1, 100).subscribe(console.log)
}