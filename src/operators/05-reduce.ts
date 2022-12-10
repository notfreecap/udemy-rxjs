import { interval, reduce, take, tap } from 'rxjs';

/**
 * REDUCE: OPERA LOS VALORES Y GENERA UNA UNICA SALIDA
 */

const totalReducer = (acumulator: number, valorActual: number) => {
    return acumulator + valorActual;
}

interval(1000).pipe(
    take(3),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete:')
    
})