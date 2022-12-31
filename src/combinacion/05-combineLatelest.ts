import { combineLatest, fromEvent, map, merge } from "rxjs";

/**
 * FUNCTION COMBINE LATEST: 
 */

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input2.type = 'password';

document.querySelector('body').append(input1, input2);

// helper
const getInputStream = (elem: HTMLElement) => 
    fromEvent(elem, 'keyup').pipe(
        map(val => val.target['value']));

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
)