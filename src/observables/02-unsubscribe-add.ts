import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: resp => console.log('next', resp),
    error: error => console.log('error', error),
    complete: () => console.log('complete')
}

const interval$ = new Observable<number>(subs => {
    let count = 0;
    const interval = setInterval(() => {
        subs.next(++count);
        console.log(count);
    }, 1000)

    setTimeout(() => {
        subs.complete()
    }, 2500)

    // cuando se le da unsubscribe
    return () => {
        clearInterval(interval);
        console.log('interval destruido')
    }
})

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

// Agrupa las subscripciones para manejarlas
// subs1.add(subs2)
//      .add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
}, 5000)
