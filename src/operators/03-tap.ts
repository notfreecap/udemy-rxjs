import { range, tap } from 'rxjs';


/**
 * TAP => EJECUTAR EFECTOS SECUNDARIOS
 */

const numeros$ = range(1, 5);

numeros$.pipe(
    tap(x => console.log('tap'))
).subscribe(console.log)