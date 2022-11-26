import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: resp => console.log('next', resp),
    error: error => console.log('error', error),
    complete: () => console.log('complete')
}

const interval$ = new Observable<number>(subs => {
    const intervalId = setInterval(
        () => subs.next(Math.random()), 1000
    );

    return () => {
        clearInterval(intervalId);
        console.log('intervalo destruido => unsubscribe')
    }
})

/**
 * SUBJECT
 * 1. Casteo multiple
 * 2. Es un observer
 * 3. Next, Error y Complente
 */
const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(rnd => console.log('subs1 => ', rnd));
const subs2 = subject$.subscribe(rnd => console.log('subs2 => ', rnd));

setTimeout(() => {
    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();
}, 3500)

// const subs1 = interval$.subscribe(rnd => console.log('subs1 => ', rnd));
// const subs2 = interval$.subscribe(rnd => console.log('subs2 => ', rnd));