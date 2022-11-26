import { asyncScheduler, observeOn, of, range } from 'rxjs';

/**
 * Range => emite una secuencia de numeros con base a un rango
 * es sincrono
 */

const data = [1, 2, 3, 4, 5]
// const src$ = of(...data);
// const src$ = range(1, 5);

/**
 * Transformando el observable en asincrono
 */
const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log('Inicio');
src$.subscribe(console.log);


console.log('Fin')