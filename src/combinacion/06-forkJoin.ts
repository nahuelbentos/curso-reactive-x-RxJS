import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";


const numeros$ = of(1,2,3,4);
const interval$ = interval(1000).pipe( take(3) );
const letras$ = of('a','b','c').pipe(delay(3500));


forkJoin(
    {
        numeros: numeros$, 
        interval: interval$, 
        letras: letras$
    }
).subscribe( console.log );

