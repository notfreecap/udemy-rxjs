import { interval, fromEvent, takeUntil, skip, tap } from 'rxjs';

/**
 * TAKE UNTIL: EMITE VALORES HASTA QUE OTRO OBSERVABLE SE ACTIVA
 * SKIP: SALTA EL NUMERO DE EMISIONES INDICADAS
 */

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(button, 'click')
const clickBtn$ = fromEvent(button, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1),
    tap(() => console.log('tap despues de skip'))
);

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})