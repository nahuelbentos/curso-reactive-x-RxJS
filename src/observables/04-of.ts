import { of } from 'rxjs';


// const observable$ = of(1,2,3,4,5,6);
// const observable$ = of(...[1,2,3,4,5,6],2,3,4,5,6);
const observable$ = of( [1,2], {a:2, b:1}, function(){}, true, Promise.resolve(true)  );

console.log("inicio del observable$");

observable$.subscribe( {
  next: next => console.log('next ', next),
  error: () => null ,
  complete: ()  => console.log("Terminamos!")
});

console.log("fin del observable$");