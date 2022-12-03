import { map, range, fromEvent, pluck, mapTo } from 'rxjs';

/**
 * MAP -> Transformar la informacion
 */

/**
 * PLUK -> 
 */

range(1, 5).pipe(
    map<number, number>( val => val * 10 )
)
.subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map( event => event.code)
);

/**DEPRECATED */
const keyUpPluck$ = keyup$.pipe(
    pluck('key')
)

const keyupMapTo$ = keyup$.pipe(
    map(() => 'tecla presionada')
);


keyupCode$.subscribe(code => console.log(code));
keyUpPluck$.subscribe(code => console.log(code));
keyupMapTo$.subscribe(code => console.log(code))