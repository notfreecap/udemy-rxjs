import { fromEvent, merge, map } from 'rxjs';

/**
 * METODO MERGE: JUNTA DOS OBSERVABLES Y EMITE UN SOLO VALOR COMBINANDO LOS DATOS
 */


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');


merge(
    keyup$.pipe(
        map(val => val.type)
    ),
    click$.pipe(
        map(val => val.type)
    )
).subscribe(console.log);