import { distinctUntilChanged, fromEvent, map, throttleTime } from "rxjs";

/**
 * THROTTLE TIME: EMITE EL VALOR Y SE ESPERA EL TIEMPO QUE SE INDIQUE PARA 
 * VOLVER A EMITIR EL SIGUIENTE
 */


const click$ = fromEvent(document, 'click');


click$.pipe(
    throttleTime(3000)
).subscribe(console.log)


// Ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$.pipe(
    throttleTime(1000),
    map(val => val['target']?.['value']),
    distinctUntilChanged()
).subscribe(console.log);