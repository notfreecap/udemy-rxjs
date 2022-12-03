import { filter, from, range, fromEvent, map } from 'rxjs';

/**
 * FILTER -> 
 */

range(1, 10).pipe(
    filter(x => x % 2 == 0)
).subscribe(console.log)

range(1, 10).pipe(
    filter((val, i) => {
        console.log('index', i)
        return val % 2 == 1
    })
).subscribe(console.log)

interface Personaje {
    tipo: string,
    nombre: string
}
const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]

from(personajes).pipe(
    filter(heroe => heroe.tipo == 'heroe')
).subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(code => code === 'Enter')
);

keyUp$.subscribe(console.log)
