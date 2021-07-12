import { asyncScheduler, of, range } from 'rxjs';

// const scr$ = of(1,2,3,4,5)
const scr$ = range(1,5, asyncScheduler)

console.log('inicio');
scr$.subscribe( console.log )
console.log('fin');