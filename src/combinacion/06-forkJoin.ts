import { of, interval, take, delay, forkJoin } from 'rxjs';

/**
 * FN FORKJOIN
 */

const numeros$ = of(1, 2, 3 ,4);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3000));

forkJoin({
    num: numeros$, 
    int: interval$, 
    let: letras$
}).subscribe(console.log)