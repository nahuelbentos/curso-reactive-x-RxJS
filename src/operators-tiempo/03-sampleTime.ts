import {fromEvent, asyncScheduler} from 'rxjs';
import {distinctUntilChanged, pluck, sampleTime, throttleTime, map} from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    sampleTime(2000),
    map(({x, y}) => ({x, y}))
  )
  .subscribe(console.log);
/*
// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent( input, 'keyup' );

input$
.pipe( 
    throttleTime(400, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
    )
.subscribe( console.log )*/
