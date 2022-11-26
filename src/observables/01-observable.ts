import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: resp => console.log('next', resp),
    error: error => console.log('error', error),
    complete: () => console.log('complente')
}

const obs$ = new Observable<string>(subs => {
    subs.next('hola');
    subs.next('holaA');
    subs.next('holaAA');
    subs.next('holaAAA');

    //  forzamos error
    const a = undefined;
    a.nombre = 'test';

    subs.complete();
});
obs$.subscribe(observer)
obs$.subscribe({
    next: resp => console.log('next', resp),
    error: error => console.log('error', error),
    complete: () => console.log('complente')
});
    
