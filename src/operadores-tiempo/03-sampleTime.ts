import { fromEvent, map, sampleTime } from 'rxjs';

/**
 * SAMPLETIME: SE EMITE EL VALOR PERIODICAMENTE DE ACUERDO CON EL VALOR INDICADO
 */


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),
    map( ({x, y}) => ({x, y}) ),
).subscribe(console.log)