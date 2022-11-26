import { of } from 'rxjs';

const data = [1, 2, 3, 4, 5];
// of => emite los valores pasados por comas
// const observable$ = of(...data, 12, 3, 4, 6);
const observable$ = of([1, 2], {a: 1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio del observable');
observable$.subscribe({
    next: data => console.log('next => ', data),
    complete: () => console.log('Termina la secuencia')
});
console.log('Fin del observable');