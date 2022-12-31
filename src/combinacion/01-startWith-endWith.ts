import { endWith, of, startWith } from "rxjs";

/**
 * STRAR WITH: INICIA EMITIENDO EL VALOR INDICADO
 */


const numeros$ = of(1, 2, 3);

numeros$.pipe(
    startWith(7, 778),
    endWith(99999)
).subscribe(console.log)
