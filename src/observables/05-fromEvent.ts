import { fromEvent, Observer } from 'rxjs';

/**
 * Eventos del dom
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer = {
    next: (val) => console.log('next', val)
}

// usando desestructuracion
src1$.subscribe( ({x, y}) => {
    console.log('x =>', x);
    console.log('y =>', y);
});
src1$.subscribe(event => {
    console.log('x =>', event.x);
    console.log('y =>', event.y);
});

src2$.subscribe(event => {
    console.log('key', event.key);
});