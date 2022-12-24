import { debounce, debounceTime, fromEvent, map, pluck, distinctUntilChanged } from 'rxjs';

/**
 * DEBOUNCE TIME: EMITE EL ULTIMO VALOR LUEGO DE QUE EL TIEMPO HAYA TRANSCURRIDO
 * DESPUES DE LA ULTIMA EMISION
 */


const click$ = fromEvent(document, 'click');


click$.pipe(
    debounceTime(3000)
)//.subscribe(console.log)


// Ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$.pipe(
    debounceTime(1000),
    map(val => val['target']?.['value']),
    distinctUntilChanged()
).subscribe(console.log);