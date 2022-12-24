import { fromEvent, debounceTime, map, mergeAll } from 'rxjs';
import { ajax } from 'rxjs/ajax';

/**
 * MERGE ALL: UNE DOS OBSERVABLES
 */

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$.pipe(
    debounceTime(500),
    map(event => {
        const texto = event.target['value']

        return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    }),
    mergeAll()
).subscribe(console.log)