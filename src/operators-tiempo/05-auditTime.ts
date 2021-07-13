import {interval, from, fromEvent} from 'rxjs';
import {auditTime, sample, tap, map} from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    map(({x}) => ({x})),
    tap((val) => console.log('tap ', val)),
    auditTime(2000)
  )
  .subscribe(console.log);
