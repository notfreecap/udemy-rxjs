import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.post(
//     url, 
//     {id: 1, nombre: 'pepe'}, 
//     {'token': 'VVVBBBB'}
// ).subscribe(console.log)


ajax({
    url,
    method: 'GEP',
    headers: {'token': 'sssCCCC'},
    body: {id: 1, name: 'pepto'}
}).subscribe(console.log)