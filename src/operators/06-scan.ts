import { from, reduce, scan, map } from 'rxjs';

/**
 * SCAN: OPERA LOS VALORES Y LOS VA RETORNANDO
 */

const numeros = [1, 2, 3, 4, 5]

const totalAcumulador = (acc, cur) => acc + cur;

// REDUCE
from(numeros).pipe(
    reduce(totalAcumulador)
)
.subscribe(console.log);

// SCAN
from(numeros).pipe(
    scan(totalAcumulador)
)
.subscribe(console.log);

// Redux
interface Usuario {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
}

const user: Usuario[] = [
    {id: 'fher', autenticado: false, token: null},
    {id: 'fher', autenticado: true, token: 'abc'},
    {id: 'fher', autenticado: true, token: 'abf566'}
]

const state$ = from(user).pipe(
    scan<Usuario, Usuario>( (acc, curr) => {
        return {...acc, ...curr}
    }, {edad: 33})
);

const id$ = state$.pipe(
    map(state => state.id)
)

id$.subscribe(console.log)