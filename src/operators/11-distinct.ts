import { distinct, of, from } from 'rxjs';

/**
 * DISTINCT: EMITE LOS VALORES QUE NO SE HAN EMITIDO ANTERIORMENTE
 */

const numeros$ = of(7, 1, 1, 2, 3, 4, 4, 1, 5, 7,1, 4);


numeros$.pipe(
    distinct()
).subscribe(console.log);

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {nombre: 'Megaman'},
    {nombre: 'X'},
    {nombre: 'Zero'},
    {nombre: 'Dr. Willy'},
    {nombre: 'Megaman'},
    {nombre: 'Zero'},
    {nombre: 'Megaman'}
]

from(personajes).pipe(
    distinct(val => val.nombre)
).subscribe(console.log)