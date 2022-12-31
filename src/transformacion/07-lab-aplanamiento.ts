import { fromEvent, tap, map, mergeMap, catchError, of, switchMap, exhaustMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

/**
 * 
 */


// helper
const peticionLogin = (userCredentials) => 
    ajax.post('https://reqres.in/api/login?delay=1', userCredentials)
        .pipe(
            map(resp => resp.response['token']),
            catchError(err => of('Credenciales no validas'))
        );

// form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// form config
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// streams
const submitForm$ = fromEvent(form, 'submit')
    .pipe(
        tap( event => event.preventDefault()),
        map(ev => ({
            email: ev.target[0].value,
            password: ev.target[1].value
        })),
        exhaustMap(peticionLogin)
    );

submitForm$.subscribe(console.log);