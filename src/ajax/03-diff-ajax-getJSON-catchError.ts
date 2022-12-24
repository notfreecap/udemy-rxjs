
import { ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ASDDDDD'
});

obs$.subscribe({
    next: resp => console.log(resp),
    error: err => console.warn(err),
    complete: () => console.log('completado')
});