import { asyncScheduler } from 'rxjs';

/**
 * asyncScheduler => 
 */

const saludar = () => console.log('salundando...')
const saludar2 = (nombre) => console.log(`salundando... ${nombre}`)

// TIMER MODE
// asyncScheduler.schedule(saludar, 2000)
// asyncScheduler.schedule(saludar2, 2000, 'mundo')


// INTERVAL MODE
const subs = asyncScheduler.schedule( function(state){
    console.log('state', state)

    this.schedule(++state, 1000);
}, 3000, 0);

setTimeout(() => {
    subs.unsubscribe();
}, 6000)
