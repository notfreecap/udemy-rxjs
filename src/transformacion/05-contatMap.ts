import { interval, take, fromEvent, concatMap } from 'rxjs';

/**
 * CONCAT MAP: SE SUSCRIBE A UN OBSERVABLE POR CADA EMISION DEL PADRE, SOLO MANTIENE
 * UNA SUSCRIPCION Y LAS SUSCRIPCIONES HIJAS SE MANTIENEN EN COLA HASTA QUE LA 
 * ANTERIOR HAYA SIDO COMPLETADA
 */

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');


click$.pipe(
    concatMap((_) => interval$)
).subscribe(console.log)