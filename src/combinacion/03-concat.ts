import { concat, interval, take } from 'rxjs';

/**
 * CONCAT: TOMA OBSERVABLES Y CREA UNO NUEVO 
 */



const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [1, 23, 3, 5]
).subscribe(console.log)