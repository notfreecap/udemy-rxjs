import { fromEvent, pluck, map, mergeMap, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

/**
 * SWITCH MAP: SE SUSCRIBE A UN OBSERVABLE POR CADA EMISION DEL PADRE, SOLO
 * SE SUSCRIBE A UN OBSERVABLE A LA VEZ
 */

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map(val => val.target['value']),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log)

