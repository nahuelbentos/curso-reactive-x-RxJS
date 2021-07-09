
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('siguiente [next]: ', value),
  error: error => console.warn('error [obs]: ', error ),
  complete: () => console.info(' Competado [obs]')  
};

const intervalo$ = new Observable<number>( subscriber => {

  const intervalID = setInterval( () => subscriber.next( Math.random() ), 1000 );

  return () => {
    clearInterval( intervalID );
    console.log('clear interval');
    
  }

});
/**
 * 1- Casteo multiple
 * 2- Tambien es un observer
 * 3- Next, error y complete
 */

const subject$ = new Subject();

const subscription = intervalo$.subscribe ( subject$ );

// const subscription1 = intervalo$.subscribe( random => console.log( ' subs1:  ', random) );
// const subscription2 = intervalo$.subscribe( random => console.log( ' subs2:  ', random) );

const subscription1 = subject$.subscribe( observer );
const subscription2 = subject$.subscribe( observer );

setTimeout(() => {
  
  subject$.next(10);
  
  subject$.complete();

  subscription.unsubscribe();
}, 3500);