import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';
const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => acumulador + valorActual;

const total = numbers.reduce( totalReducer, 0 );
console.log(' total arr: ', total);


interval(1000)
.pipe(
    take(3),
    tap( console.log ),
    reduce( totalReducer )
)
.subscribe( {
    next: (val) => console.log('next: ', val),
    complete: () => console.log('complete: ')
})