import {range} from 'rxjs';
import {tap, map} from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => console.log('antes ', x)),
    map((val) => val * 10),
    tap({
        next: (x) => console.log('despues ', x),
        complete: () => console.log('Se termino todo')
    })
  )
  .subscribe((val) => console.log('subs: ', val));
