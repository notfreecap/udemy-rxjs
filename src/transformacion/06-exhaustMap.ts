import { interval, take, fromEvent, exhaustMap } from 'rxjs';

/**
 * EXHAUST MAP: MANTIENE UNA UNICA SUSCRIPCION ACTIVA, SI YA TIENE UNA SUSCRIPCION
 * ACTIVA Y SE EMITE UN VALOR, ESTE NO SE EMITIRA HASTA QUE SE HAYA COMPLETADO LA 
 * SUSCRIPCION ANTERIOR
 */


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');


click$.pipe(
    exhaustMap((_) => interval$)
).subscribe(console.log)