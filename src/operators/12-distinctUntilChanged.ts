import { distinct, of, from, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs';

/**
 * DISTINCT: EMITE LOS VALORES QUE NO SE HAN EMITIDO ANTERIORMENTE
 * DISTINCT UNTIL CHANGED: EMITE LOS VALORES SI NO ES IGUAL AL ANTERIOR
 */

const numeros$ = of(7, 1, 1, 2, 3, 4, 4, 1, 5, 7,1, 4);


numeros$.pipe(
    distinct()
).subscribe(console.log);

console.log('**************')

numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {nombre: 'Megaman'},
    {nombre: 'Megaman'},
    {nombre: 'X'},
    {nombre: 'Zero'},
    {nombre: 'Dr. Willy'},
    {nombre: 'Megaman'},
    {nombre: 'Zero'},
    {nombre: 'Zero'},
    {nombre: 'Megaman'}
]

from(personajes).pipe(
    distinct(val => val.nombre)
).subscribe(console.log)


console.log('**************')

from(personajes).pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(console.log)