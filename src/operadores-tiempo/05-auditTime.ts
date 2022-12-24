import { auditTime, fromEvent, tap, map } from 'rxjs';

/**
 * AUDIT TIME: EMITE EL ULTIMO VALOR EN DETERMINADO LAPSO DE TIEMPO
 */


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x, y}) => ({x, y})),
    tap(val => console.log('tap', val)),
    auditTime(1000)
).subscribe(console.log)