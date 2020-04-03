import { BehaviorSubject } from 'rxjs';

export default () => {
  const observerA = {
    next: x => console.log('Observer A: ' + x)
  }
  const observerB = {
    next: x => console.log('Observer B: ' + x)
  }

  const subject = new BehaviorSubject(0)

  subject.subscribe(observerA) // Observer A: 0
  subject.next(1) // Observer A: 1
  subject.next(2) // Observer A: 2
  subject.next(3) // Observer A: 3

  setTimeout(() => {
    subject.subscribe(observerB)
    console.log('value', subject.value)
  }, 500) // Observer B: 3
}



