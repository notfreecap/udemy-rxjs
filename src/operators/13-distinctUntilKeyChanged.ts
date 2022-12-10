import { from, distinctUntilKeyChanged } from 'rxjs';

/**
 * DISTINCT UNTIL KEY CHANGE: EMITE UN VALOR SI LA CLAVE DEL OBJETO NO ES IGUAL A LA ANTERIOR
 */

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
    distinctUntilKeyChanged('nombre')
).subscribe(console.log)