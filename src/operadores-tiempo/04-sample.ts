import { interval, fromEvent, sample } from 'rxjs';

/**
 * SAMPLE: EMITE VALORES CUANDO UN OBSERVABLE SE EJECUTA
 */

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log)