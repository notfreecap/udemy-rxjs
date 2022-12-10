import { of, take, tap } from 'rxjs';

/**
 * TAKE: LIMITA LA CANTIDAD DE EMISIONES
 */

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
    tap(console.log),
    take(3)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})