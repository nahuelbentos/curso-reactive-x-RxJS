
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('siguiente [next]: ', value),
  error: error => console.warn('error [obs]: ', error ),
  complete: () => console.info(' Competado [obs]')  
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subscriber => {
  subscriber.next('Hola');
  subscriber.next('Mundo');
  subscriber.next('Hola');
  subscriber.next('Mundo');
  
  // Forzar un error
  // const a = undefined;
  // a.nombre = 'Nahuel';
  
  subscriber.complete();
  subscriber.next('Mundo1');
  subscriber.next('Mundo2 ');
});

// obs$.subscribe(  
//   valor => console.log('next: ', valor),
//   error => console.warn('error: ', error),
//   () => console.info('complete')
  //  );

  obs$.subscribe( observer );