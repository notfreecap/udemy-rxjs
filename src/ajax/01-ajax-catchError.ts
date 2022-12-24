import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, map, of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5'

const atrapaError = (err: AjaxError) => {
    console.error(err.message);
    return of([]);
}

ajax(url).pipe(
    map(resp => resp.response),
    catchError(atrapaError)
).subscribe(console.log)