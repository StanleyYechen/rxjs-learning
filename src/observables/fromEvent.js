import { fromEvent } from 'rxjs';

export default () => {
  fromEvent(document, 'click').subscribe(console.log) // event object
}