import { fromEvent, map, takeWhile } from 'rxjs';

/**
 * TAKE WHILE: EMITE LOS VALORES QUE CUMPLEN LA CONDICION Y SE COMPLETA
 */

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({x, y}) => ({x, y}) ),
    // takeWhile(({y}) => y <= 150)
    takeWhile(({y}) => y <= 150, true) // INCLUSIVO
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})