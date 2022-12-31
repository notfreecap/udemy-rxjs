import { mergeMap, of, interval, take, map, fromEvent, takeUntil } from 'rxjs';

/**
 * MERGE MAP: SE SUSCRIBE A UN OBSERVABLE DURANTE LA EMISION DE UN OBSERVABLE PADRE,
 * SE CONSERVAN LAS SUSCRIPCIONES
 */


const letras$ = of('a', 'b', 'c');


letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)/*.subscribe({
    next: val => console.log(val),
    complete: () => console.log('complete**')
});*/



const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log)