import { first, fromEvent, map, take } from 'rxjs';

/**
 * FIRST: LUEGO DE EMITIR UN VALOR COMPLETA LA SUSCRIPCION
 */

const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    map( ({clientX, clientY}) => ({clientX, clientY}) ),
    // map(event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // })),
    first(event => event.clientY >= 150)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})