import { fromEvent } from 'rxjs';
import { tap, map, takeWhile } from 'rxjs/operators';



const click$ = fromEvent<MouseEvent>( document, 'click');

click$
.pipe(
    tap<MouseEvent>( console.log ),
    map( ({x, y}) => ({x, y})),
    // takeWhile( ({y}) =>y <= 150  )
    takeWhile( ({y}) =>y <= 150, true  )
)
.subscribe( {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});